"use client";

import React, { useEffect } from "react";
import { CustomButton, CustomImage, CustomText, FormikField } from "@/components/ui";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialFirstName: string;
    initialLastName: string;
    initialPhone?: string;
    initialState?: string;
    initialUniversity?: string;
    stateOptions?: { label: string; value: string }[];
    universityOptions?: { label: string; value: string }[];
    avatarUrl?: string;
    isLoading?: boolean;
    isUploadingImage?: boolean;
    onUploadImage?: (file: File) => void;
    onUpdate: (data: {
        first_name: string;
        last_name: string;
        phone?: string;
        state?: string;
        university?: string;
    }) => void;
}

export default function EditProfileModal({
    isOpen,
    onClose,
    initialFirstName,
    initialLastName,
    initialPhone = "",
    initialState = "",
    initialUniversity = "",
    stateOptions = [],
    universityOptions = [],
    avatarUrl = "/images/landing/hero1.png",
    isLoading = false,
    isUploadingImage = false,
    onUploadImage,
    onUpdate,
}: EditProfileModalProps) {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
        onUploadImage?.(file);
        // Clear input value so same file can be selected again if needed
        e.target.value = "";
    };
    const formik = useFormik({
        initialValues: {
            first_name: initialFirstName || "",
            last_name: initialLastName || "",
            phone: initialPhone || "",
            state: initialState || "",
            university: initialUniversity || "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            phone: Yup.string(),
            state: Yup.string(),
            university: Yup.string(),
        }),
        onSubmit: (values) => {
            onUpdate(values);
            onClose();
        },
    });

    useEffect(() => {
        if (isOpen) {
            setPreviewUrl(null);
            formik.resetForm({
                values: {
                    first_name: initialFirstName || "",
                    last_name: initialLastName || "",
                    phone: initialPhone || "",
                    state: initialState || "",
                    university: initialUniversity || "",
                },
            });
        }
    }, [isOpen, initialFirstName, initialLastName, initialPhone, initialState, initialUniversity, avatarUrl]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
            <div
                className="bg-white rounded-3xl p-6 sm:p-7 w-full max-w-[480px] max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col gap-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <CustomText type="title-md" className="font-bold text-[#064E3B] text-lg">
                        Edit Profile
                    </CustomText>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-7 h-7 rounded-full border border-neutral-900 flex items-center justify-center text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                        aria-label="Close"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Avatar with Teal Border and Camera Icon */}
                <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />

                    <div
                        onClick={() => !isUploadingImage && fileInputRef.current?.click()}
                        className="w-full h-full rounded-full overflow-hidden border-4 border-[#10B981] bg-neutral-100 relative cursor-pointer group"
                    >
                        <CustomImage
                            src={previewUrl || avatarUrl}
                            alt="Profile"
                            layout="fill"
                            objectFit="cover"
                        />
                        {isUploadingImage ? (
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10 gap-1 text-white">
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span className="text-[10px] font-semibold">Uploading...</span>
                            </div>
                        ) : (
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 text-white">
                                <span className="text-[11px] font-bold bg-black/40 px-2 py-0.5 rounded-full">Change</span>
                            </div>
                        )}
                    </div>

                    {/* Camera Badge */}
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploadingImage}
                        className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white border border-neutral-900 shadow-sm flex items-center justify-center cursor-pointer hover:bg-neutral-50 transition-colors z-20"
                        title="Change photo"
                    >
                        {isUploadingImage ? (
                            <div className="w-3.5 h-3.5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                <circle cx="12" cy="13" r="4" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Formik Form */}
                <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormikField
                                name="first_name"
                                label="First Name*"
                                placeholder="First Name"
                            />
                            <FormikField
                                name="last_name"
                                label="Last Name*"
                                placeholder="Last Name"
                            />
                        </div>

                        <FormikField
                            name="phone"
                            label="Phone Number"
                            placeholder="080XXXXXXXX"
                        />

                        {stateOptions.length > 0 && (
                            <FormikField
                                as="select"
                                name="state"
                                label="State of Residence"
                                placeholder="Select State"
                                options={stateOptions}
                            />
                        )}

                        {universityOptions.length > 0 && (
                            <FormikField
                                as="select"
                                name="university"
                                label="University of Interest"
                                placeholder="Select University"
                                options={universityOptions}
                            />
                        )}

                        {/* Update Button */}
                        <CustomButton
                            type="submit"
                            fullWidth
                            loading={isLoading || formik.isSubmitting}
                            disabled={isLoading || formik.isSubmitting}
                            className="w-full mt-2"
                        >
                            Update Profile
                        </CustomButton>
                    </form>
                </FormikProvider>
            </div>
        </div>
    );
}

