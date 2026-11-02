"use client";

import React, { useEffect } from "react";
import { FormikField, CustomButton, CustomText } from "@/components/ui";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

interface GenericEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    label: string;
    initialValue: string;
    as?: "input" | "select" | "textarea";
    options?: { label: string; value: string }[];
    multiple?: boolean;
    isLoading?: boolean;
    onUpdate: (value: string) => void;
}

export default function GenericEditModal({
    isOpen,
    onClose,
    title,
    label,
    initialValue,
    as = "input",
    options = [],
    multiple = false,
    isLoading = false,
    onUpdate,
}: GenericEditModalProps) {
    const formik = useFormik({
        initialValues: {
            value: initialValue || "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            value: Yup.string().required(`${label} is required`),
        }),
        onSubmit: (values) => {
            onUpdate(values.value);
            onClose();
        },
    });

    useEffect(() => {
        if (isOpen) {
            formik.resetForm({
                values: {
                    value: initialValue || "",
                },
            });
        }
    }, [isOpen, initialValue]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
            <div
                className="bg-white rounded-3xl p-6 sm:p-7 w-full max-w-[420px] shadow-2xl flex flex-col gap-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <CustomText type="headline-sm" className="!text-lg font-bold !text-[#064E3B]">{title}</CustomText>
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

                <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                        <FormikField
                            name="value"
                            label={`${label} *`}
                            placeholder={`Enter ${label.toLowerCase()}`}
                            as={as}
                            options={options}
                            multiple={multiple}
                        />

                        <CustomButton
                            type="submit"
                            variant="primary"
                            disabled={isLoading || formik.isSubmitting}
                            loading={isLoading || formik.isSubmitting}
                            fullWidth
                            className="!h-12 !mt-2 !rounded-2xl"
                        >
                            Update
                        </CustomButton>
                    </form>
                </FormikProvider>
            </div>
        </div>
    );
}

