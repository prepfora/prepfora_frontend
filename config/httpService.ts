"use client";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { URLS } from "./urls";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://prepforabackend-production.up.railway.app";

// ─── Token Storage ────────────────────────────────────────────────────────────

const ACCESS_TOKEN_KEY = "prepfora_access_token";
const REFRESH_TOKEN_KEY = "prepfora_refresh_token";

let inMemoryAccessToken: string | null = null;

export const tokenStorage = {
  getAccess: (): string | null => {
    if (inMemoryAccessToken) return inMemoryAccessToken;
    if (typeof window !== "undefined") {
      inMemoryAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    }
    return inMemoryAccessToken;
  },
  setAccess: (token: string | null | undefined) => {
    inMemoryAccessToken = token ?? null;
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
      } else {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
      }
    }
  },
  clearAccess: () => {
    inMemoryAccessToken = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
  },

  getRefresh: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  setRefresh: (token: string | null | undefined) => {
    if (typeof window === "undefined") return;
    if (token) {
      localStorage.setItem(REFRESH_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    }
  },
  clearRefresh: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  clearAll: () => {
    inMemoryAccessToken = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    }
  },
};

/** Clears tokens and client session keys. Safe to call from UI or interceptors. */
export function clearSession() {
  tokenStorage.clearAll();
  if (typeof window === "undefined") return;
  localStorage.removeItem("prepforauserid");
  localStorage.removeItem("prepforauserrole");
}

// ─── Axios Instances ──────────────────────────────────────────────────────────

export const httpService = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
});

export const unsecureHttpService = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
});

// ─── Refresh Token Logic ──────────────────────────────────────────────────────

let isRefreshing = false;

// Queue of { resolve, reject } for requests that arrived during a refresh
type PromiseExecutor = {
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
};
let failedQueue: PromiseExecutor[] = [];

/**
 * Drain the queue: resolve every waiting request with the new token,
 * or reject them all if the refresh itself failed.
 */
function processQueue(error: unknown, token: string | null = null) {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else if (token) resolve(token);
    else reject(new Error("No token returned after refresh"));
  });
  failedQueue = [];
}

interface RefreshApiResponse {
  success?: boolean;
  message?: string;
  data?: {
    access_token?: string;
    refresh_token?: string;
    tokens?: {
      access_token?: string;
      refresh_token?: string;
    };
  };
  access_token?: string;
  refresh_token?: string;
  tokens?: {
    access_token?: string;
    refresh_token?: string;
  };
}

async function refreshAccessToken(): Promise<string> {
  const refreshToken = tokenStorage.getRefresh();
  if (!refreshToken) throw new Error("No refresh token available");

  // Use the unsecure instance so this call never triggers another refresh loop
  const response = await unsecureHttpService.post<RefreshApiResponse>(
    URLS.REFRESH_TOKEN || "/auth/refresh-token",
    { refresh_token: refreshToken }
  );

  const res = response.data;
  const newAccessToken =
    res?.data?.access_token ||
    res?.data?.tokens?.access_token ||
    res?.access_token ||
    res?.tokens?.access_token;

  const newRefreshToken =
    res?.data?.refresh_token ||
    res?.data?.tokens?.refresh_token ||
    res?.refresh_token ||
    res?.tokens?.refresh_token;

  if (!newAccessToken) {
    throw new Error("No access token received from refresh endpoint");
  }

  tokenStorage.setAccess(newAccessToken);
  if (newRefreshToken) {
    tokenStorage.setRefresh(newRefreshToken);
  }

  return newAccessToken;
}

// ─── Unsecured Instance Interceptors ─────────────────────────────────────────

unsecureHttpService.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError<unknown>): Promise<never> => Promise.reject(error)
);

// ─── Helper for Setting Authorization Header ──────────────────────────────────

function setAuthHeader(config: InternalAxiosRequestConfig, token: string) {
  if (config.headers?.set) {
    config.headers.set("Authorization", `Bearer ${token}`);
  } else if (config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
}

// ─── Secured Instance — Request Interceptor ───────────────────────────────────

httpService.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = tokenStorage.getAccess();
    if (token) {
      setAuthHeader(config, token);
    }
    return config;
  },
  (error: AxiosError<unknown>): Promise<never> => Promise.reject(error)
);

// ─── Secured Instance — Response Interceptor (handles 401 + refresh) ─────────

httpService.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,

  async (error: AxiosError<unknown>): Promise<AxiosResponse> => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    // Only attempt refresh on 401 and only once per request
    if (!originalRequest || error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // ── If a refresh is already in-flight, queue this request ──────────────
    if (isRefreshing) {
      return new Promise<AxiosResponse>((resolve, reject) => {
        failedQueue.push({
          resolve: (token) => {
            setAuthHeader(originalRequest, token);
            resolve(httpService(originalRequest));
          },
          reject,
        });
      });
    }

    // ── This is the first 401 — kick off the refresh ────────────────────────
    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const newToken = await refreshAccessToken();
      processQueue(null, newToken);
      setAuthHeader(originalRequest, newToken);
      return httpService(originalRequest); // retry the original request
    } catch (refreshError) {
      processQueue(refreshError, null);
      clearSession();

      // Redirect to login if user session has expired
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        if (!currentPath.startsWith("/auth")) {
          window.location.href = "/auth";
        }
      }
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default httpService;