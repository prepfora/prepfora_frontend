"use client"
import { VerificationForm } from "@/components/feature";
import { AuthLayout } from "@/components/layouts";
import { useSearchParams } from "next/navigation";

export default function RegistrationPage() {

    const searchParams = useSearchParams()
    const email = searchParams.get("email")

    return (
        <AuthLayout title="Verify your email" body={`An email with a 6-digit code has been sent to ${email}.`} >
            <VerificationForm />
        </AuthLayout>
    );
} 
