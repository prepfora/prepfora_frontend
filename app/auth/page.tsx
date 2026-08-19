import { LoginForm } from "@/components/feature/forms";
import { AuthLayout } from "@/components/layouts"; 

export default function LoginPage() {
    return (
        <AuthLayout title="Log In" body="Don't have an account?" btn="Create Account" btnlink="/signup" >
            <LoginForm />
        </AuthLayout>
    );
} 
