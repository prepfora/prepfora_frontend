"use client";

import { ExamDate, ExamGoal, ExamType, ProfileForm, YourGoal } from "@/components/feature/forms/onboarding";
import { CustomText } from "@/components/ui";
import { useSearchParams } from "next/navigation";


export default function OnboardingPage() {

    const searchParams = useSearchParams()
    const query = searchParams.get("type")

    return (
        <section className=" flex-1 flex py-6 flex-col justify-center items-center ">
            <div className=" max-w-[460px] w-full flex flex-col gap-8 ">
                <div className=" flex flex-col gap-2 mt-4 ">
                    <CustomText type="headline-md" className=" font-semibold ">
                        {!query ? "Complete Your Profile" : query === "exam-type" ? "Choose the type of exam you want to focus on" : query === "exam-date" ? "Choose your closest exam date" : query === "goals" ? "What's your goal?" : "What's your goal?"}
                    </CustomText>
                </div>
                {!query && <ProfileForm />}
                {query === "exam-type" && <ExamType />}
                {query === "exam-date" && <ExamDate />}
                {query === "goals" && <ExamGoal />}
                {query === "your-goals" && <YourGoal />}
            </div>
        </section>
    )
}