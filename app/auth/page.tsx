import { LoginForm } from "@/components/feature";
import { AuthLayout } from "@/components/layouts"; 

export default function LoginPage() {
    return (
        <AuthLayout title="Log In" body="Don't have an account?" btn="Create Account" btnlink="/auth/signup" >
            <LoginForm />
        </AuthLayout>
    );
} 
