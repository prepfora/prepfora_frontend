"use client";

import React from "react";
import { UserProfileData } from "./profileTypes";
import { CustomButton, CustomText } from "@/components/ui";

interface PersonalInfoSectionProps {
    profile: UserProfileData;
    onEdit: () => void;
}

export default function PersonalInfoSection({
    profile,
    onEdit,
}: PersonalInfoSectionProps) {
    return (
        <section className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <CustomText type="title-md" className="font-bold text-neutral-900 text-lg">
                    Personal Info
                </CustomText>
                <CustomButton
                    variant="primary-outline"
                    size="sm"
                    onClick={onEdit}
                    className="h-8 px-4 py-1 text-xs rounded-full relative z-20 shrink-0 font-semibold"
                >
                    Edit
                </CustomButton>
            </div>

            <div className="w-full bg-white border border-[#E2EAF4] rounded-2xl p-6 shadow-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    {/* Email Address - Not editable */}
                    <div className="flex flex-col">
                        <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                            Email Address
                        </CustomText>
                        <CustomText type="body-md" className="text-sm text-neutral-600 font-medium mt-1">
                            {profile.email}
                        </CustomText>
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                        <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                            Phone Number
                        </CustomText>
                        <CustomText type="body-md" className="text-sm text-neutral-600 font-medium mt-1">
                            {profile.phone}
                        </CustomText>
                    </div>

                    {/* State of Residence */}
                    <div className="flex flex-col">
                        <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                            State of Residence
                        </CustomText>
                        <CustomText type="body-md" className="text-sm text-neutral-600 font-medium mt-1">
                            {profile.stateOfResidence}
                        </CustomText>
                    </div>

                    {/* University of Interest */}
                    <div className="flex flex-col">
                        <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                            University of Interest
                        </CustomText>
                        <CustomText type="body-md" className="text-sm text-neutral-600 font-medium mt-1">
                            {profile.universityOfInterest}
                        </CustomText>
                    </div>
                </div>
            </div>
        </section>
    );
}
