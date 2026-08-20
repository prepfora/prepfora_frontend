import { VerificationForm } from "@/components/feature";
import { AuthLayout } from "@/components/layouts"; 

export default function RegistrationPage() {
    return (
        <AuthLayout title="Verify your email" body="An email with a 6-digit code has been sent to janedoe@gmail.com." >
            <VerificationForm />
        </AuthLayout>
    );
} 
