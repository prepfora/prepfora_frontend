"use client";

import React from "react";
import { UserProfileData } from "./profileTypes";
import { CustomButton, CustomText } from "@/components/ui";

interface PreferencesSectionProps {
    profile: UserProfileData;
    onEditExamType: () => void;
    onEditGoals: () => void;
}

export default function PreferencesSection({
    profile,
    onEditExamType,
    onEditGoals,
}: PreferencesSectionProps) {
    return (
        <section className="w-full flex flex-col gap-3">
            <CustomText type="title-md" className="font-bold text-neutral-900 text-lg">
                Preferences
            </CustomText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Exam Type Card */}
                <div className="bg-white border border-[#E2EAF4] rounded-2xl p-5 shadow-xs flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                            Exam Type
                        </CustomText>
                        <CustomButton
                            variant="primary-outline"
                            size="sm"
                            onClick={onEditExamType}
                            className="h-7 px-3 py-0.5 text-xs rounded-full relative z-20 shrink-0 font-semibold"
                        >
                            Edit
                        </CustomButton>
                    </div>

                    <div className="flex flex-col gap-2">
                        {profile.examTypes.map((exam) => (
                            <CustomText
                                key={exam}
                                type="body-md"
                                className="text-sm text-neutral-600 font-medium"
                            >
                                {exam}
                            </CustomText>
                        ))}
                    </div>
                </div>

                {/* Goals Card */}
                <div className="bg-white border border-[#E2EAF4] rounded-2xl p-5 shadow-xs flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                            Goals
                        </CustomText>
                        <CustomButton
                            variant="primary-outline"
                            size="sm"
                            onClick={onEditGoals}
                            className="h-7 px-3 py-0.5 text-xs rounded-full relative z-20 shrink-0 font-semibold"
                        >
                            Edit
                        </CustomButton>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        {profile.goals.map((g) => (
                            <div key={g.exam} className="flex flex-col">
                                <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                                    {g.exam}
                                </CustomText>
                                <CustomText type="body-md" className="text-sm text-neutral-600 font-medium">
                                    {g.goal}
                                </CustomText>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
