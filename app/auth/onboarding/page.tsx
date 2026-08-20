import { ProfileForm } from "@/components/feature/forms/onboarding";
import { CustomText } from "@/components/ui";


export default function OnboardingPage () {
    return( 
        <section className=" flex-1 flex py-6 flex-col justify-center items-center ">
            <div className=" max-w-[460px] w-full flex flex-col gap-8 "> 
                <div className=" flex flex-col gap-2 mt-4 ">
                    <CustomText type="headline-md" className=" font-semibold ">
                        {"Complete Your Profile"}
                    </CustomText> 
                </div> 
                <ProfileForm />
            </div>
        </section>
    )
}