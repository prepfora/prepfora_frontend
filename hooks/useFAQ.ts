"use client"
import { URLS } from "@/config/urls";
import { useState } from "react";
import { PaginatedResponse } from "@/types/pagination";
import { IFaqResponse } from "@/types/faq";
import { useFetchDataNoCache } from "./useFetchData";

const useFAQ = () => {

    const [page, setPage] = useState(1)


    const useGetFAQ = () => {
        return useFetchDataNoCache<PaginatedResponse<IFaqResponse>>({
            endpoint: URLS.FAQ,
            name: [URLS.FAQ],
            params: {
                page,
                limit: 10
            }

        });
    };

    return {
        useGetFAQ,
        page,
        setPage,
    };
};

export default useFAQ;
