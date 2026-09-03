"use client"

import { GoogleBtn } from "@/components/common";
import { CustomButton, FormikField } from "@/components/ui";
import useAuth from "@/hooks/auth/useAuth";
import { FormikProvider } from "formik";

export default function LoginForm() {

    const { formik, isLoading } = useAuth();

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className=" w-full p-6 flex flex-col gap-6 rounded-2xl bg-white ">
                <FormikField placeholder="janedoe@mail.com" name="email" label="Email*" />
                <div className=" flex flex-col gap-4 w-full " >
                    <CustomButton type="submit" fullWidth loading={isLoading} disabled={isLoading} variant={!formik.isValid ? "primary" : "disabled"}>Continue</CustomButton>
                    <GoogleBtn />
                </div>
            </form>
        </FormikProvider>
    );
}
