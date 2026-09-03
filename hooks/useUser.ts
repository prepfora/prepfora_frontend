"use client"
import { ApiErrorResponse } from "@/config/getErrorMessage";
import { handleApiError } from "@/config/handleApiError";
import httpService from "@/config/httpService";
import { showSuccess } from "@/config/toast";
import { URLS } from "@/config/urls";
import { IAuthUser } from "@/types/auth";
// import { IWaitlist } from "@/types/waitlist";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { useFetchData, useFetchDataNoCache, useUnsecureFetchDataNoCache } from "./useFetchData";
import { PaginatedResponse } from "@/types/pagination";
import { IFaqResponse } from "@/types/faq";

const useUser = () => {

    const router = useRouter()


    const validationSchema = Yup.object({
        first_name: Yup.string()
            .required("First name is required"),
        last_name: Yup.string()
            .required("Last name is required"),
        state: Yup.string()
            .required("State is required"),
        university: Yup.string()
            .required("University is required"),
        examinations: Yup.array()
            .required("Examinations is required"),
        current_expectation: Yup.string()
            .required("Current expectation is required"),
    });

    const updateUser = useMutation({
        mutationFn: (data: IAuthUser) =>
            httpService.patch(URLS.USER_PROFILE, data),
        onError: (error: AxiosError<ApiErrorResponse>) => handleApiError(error),
        onSuccess: (data) => {
            showSuccess(data?.data?.message)
            router.push(`/dashboard/home`)
        },
    });



    const [page, setPage] = useState(1)


    const useGetUniversity = () => {
        return useUnsecureFetchDataNoCache<any>({
            endpoint: URLS.UNIVERSITY,
            name: [URLS.UNIVERSITY]
        });
    };


    const useGetProfile = () => {
        return useFetchData<any>({
            endpoint: URLS.USER_PROFILE,
            name: [URLS.USER_PROFILE]
        });
    };


    const formik = useFormik<IAuthUser>({
        initialValues: {
            first_name: "",
            last_name: "",
            state: "",
            university: "",
            examinations: [],
            current_expectation: ""
        },
        validationSchema: validationSchema,
        onSubmit: (data) => {
            updateUser.mutate(data)
        },
    });

    const isLoading = updateUser.isPending

    return {
        formik,
        isLoading,
        useGetProfile,
        useGetUniversity,
        setPage,
        page
    };
};

export default useUser;
