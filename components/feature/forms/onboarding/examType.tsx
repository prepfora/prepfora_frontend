"use client"

import { CustomButton, CustomText, FormikField } from "@/components/ui";
import useAuth from "@/hooks/auth/useAuth";
import { FormikProvider } from "formik";
import { FaCheckCircle } from "react-icons/fa";

export default function ExamType() {
    const { formik } = useAuth();

    const option = [
        {
            label: "WAEC",
            value: "WAEC"
        },
        {
            label: "NECO",
            value: "NECO"
        },
        {
            label: "JAMB",
            value: "JAMB"
        },
        {
            label: "POST-UTME",
            value: "POST-UTME"
        },
    ]

    const CustomBox = (
        {
            name,
            isActive
        }: {
            name: string,
            isActive: boolean
        }
    ) => {
        return (
            <button className={` ${isActive ? " border-secondary-300 bg-secondary-50 " : " border-neutral-100 "} w-full h-[102px] text-neutral-500 flex justify-center items-center rounded-xl border relative `} >
                {isActive && (
                    <FaCheckCircle size={24} color="#4DC497" />
                )}
                <CustomText type={isActive ? "body-lg-bold" : "body-lg"} >{name}</CustomText>
            </button>
        )
    }

    return (
        <FormikProvider value={formik}>
            <form className=" w-full p-6 flex flex-col gap-6 rounded-2xl bg-white ">
                <div className=" w-full grid grid-cols-2 gap-3 " >

                </div>
                <div className=" flex flex-col gap-4 w-full " >
                    <CustomButton fullWidth variant="disabled" >Continue</CustomButton>
                </div>
            </form>
        </FormikProvider>
    );
}
