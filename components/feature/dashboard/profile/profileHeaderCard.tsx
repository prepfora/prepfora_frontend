"use client";

import React from "react";
import { UserProfileData } from "./profileTypes";
import { CustomButton, CustomImage, CustomText } from "@/components/ui";

interface ProfileHeaderCardProps {
    profile: UserProfileData;
    onEditProfile: () => void;
    onUploadImage?: (file: File) => void;
    isUploadingImage?: boolean;
}

export default function ProfileHeaderCard({
    profile,
    onEditProfile,
    onUploadImage,
    isUploadingImage = false,
}: ProfileHeaderCardProps) {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        onUploadImage?.(file);
        e.target.value = "";
    };

    return (
        <div className="w-full bg-white border-2 border-[#93C5FD] rounded-3xl p-5 sm:p-6 flex items-center justify-between shadow-2xs">
            {/* Left: Avatar & User Info */}
            <div className="flex items-center gap-4 sm:gap-5">
                {/* Avatar with Teal Border and optional upload trigger */}
                <div className="relative group flex-shrink-0">
                    {onUploadImage && (
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    )}

                    <div
                        onClick={() => onUploadImage && !isUploadingImage && fileInputRef.current?.click()}
                        className={`w-18 h-18 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#10B981] relative flex-shrink-0 bg-neutral-100 ${
                            onUploadImage ? "cursor-pointer" : ""
                        }`}
                    >
                        <CustomImage
                            src={profile.avatarUrl || "/images/landing/hero1.png"}
                            alt={`${profile.firstName} ${profile.lastName}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        {isUploadingImage ? (
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10 gap-1 text-white">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span className="text-[9px] font-semibold">Uploading...</span>
                            </div>
                        ) : onUploadImage ? (
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 text-white">
                                <span className="text-[10px] font-bold bg-black/40 px-2 py-0.5 rounded-full">Change</span>
                            </div>
                        ) : null}
                    </div>

                    {/* Camera Badge if upload is enabled */}
                    {onUploadImage && (
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploadingImage}
                            className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-neutral-900 shadow-sm flex items-center justify-center cursor-pointer hover:bg-neutral-50 transition-colors z-20"
                            title="Change photo"
                        >
                            {isUploadingImage ? (
                                <div className="w-3.5 h-3.5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx="12" cy="13" r="4" />
                                </svg>
                            )}
                        </button>
                    )}
                </div>

                {/* Name & Badge */}
                <div className="flex flex-col">
                    <div className="flex items-baseline flex-wrap gap-x-2">
                        <CustomText type="headline-sm" className="text-xl sm:text-2xl font-bold text-neutral-900">
                            {profile.firstName} {profile.lastName}
                        </CustomText>
                        <CustomText type="body-sm" className="text-xs sm:text-sm text-neutral-400 font-medium">
                            {profile.handle}
                        </CustomText>
                    </div>

                    <div className="flex items-center gap-1.5 mt-1.5">
                        {/* Medal Icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M8.5 13.5L5 22L12 18.5L19 22L15.5 13.5"
                                fill="#EA580C"
                                stroke="#C2410C"
                                strokeWidth="0.8"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="12"
                                cy="9"
                                r="6.5"
                                fill="#FBBF24"
                                stroke="#D97706"
                                strokeWidth="1"
                            />
                            <circle cx="12" cy="9" r="4.5" fill="#F59E0B" />
                        </svg>
                        <CustomText type="body-sm" className="text-xs text-neutral-600 font-medium">
                            {profile.currentBadge}
                        </CustomText>
                    </div>
                </div>
            </div>

            {/* Right: Edit Profile Button */}
            <CustomButton
                variant="primary-outline"
                size="sm"
                onClick={onEditProfile}
                className="h-10 px-4 sm:px-5 text-xs sm:text-sm rounded-xl relative z-20 shrink-0 font-medium"
            >
                Edit Profile
            </CustomButton>
        </div>
    );
}
