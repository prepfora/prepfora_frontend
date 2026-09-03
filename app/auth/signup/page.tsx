import { RegistrationForm } from "@/components/feature";
import { AuthLayout } from "@/components/layouts";

export default function RegistrationPage() {
    return (
        <AuthLayout title="Create Account" body="Already have an account?" btn="Log In" btnlink="/auth" >
            <RegistrationForm />
        </AuthLayout>
    );
} 
