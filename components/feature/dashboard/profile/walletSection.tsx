"use client";

import React from "react";
import { CustomButton, CustomText } from "@/components/ui";

interface WalletSectionProps {
    balance: number;
    onAddMoney?: () => void;
}

export default function WalletSection({
    balance,
    onAddMoney,
}: WalletSectionProps) {
    return (
        <section className="w-full flex flex-col gap-3">
            <CustomText type="title-md" className="font-bold text-neutral-900 text-lg">
                My Wallet
            </CustomText>

            <div className="w-full bg-white border border-[#E2EAF4] rounded-2xl p-5 shadow-xs flex items-center justify-between">
                {/* Left: Balance Info */}
                <div className="flex flex-col gap-1.5">
                    <CustomText type="body-sm-bold" className="text-sm font-semibold text-neutral-800">
                        Wallet Balance
                    </CustomText>

                    <div className="bg-[#F8FAFC] border border-neutral-200/80 rounded-lg px-3 py-1.5 flex items-center gap-2 w-fit">
                        {/* Gold Coin Icon */}
                        <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
                            <ellipse cx="18" cy="26" rx="11" ry="5" fill="#C98A0C" />
                            <ellipse cx="18" cy="24.5" rx="11" ry="5" fill="#EAB308" />
                            <ellipse cx="18" cy="18" rx="11" ry="5" fill="#C98A0C" />
                            <ellipse cx="18" cy="16.5" rx="11" ry="5" fill="#FACC15" />
                            <ellipse cx="18" cy="10" rx="11" ry="5" fill="#C98A0C" />
                            <ellipse cx="18" cy="8.5" rx="11" ry="5" fill="#FDE047" />
                        </svg>
                        <CustomText type="body-sm-bold" className="text-sm font-bold text-neutral-900">
                            {balance} PP
                        </CustomText>
                    </div>
                </div>

                {/* Right: Add Money Button */}
                <CustomButton
                    variant="primary"
                    size="sm"
                    onClick={onAddMoney}
                    className="h-10 px-5 text-xs sm:text-sm rounded-xl font-medium"
                >
                    Add Money
                </CustomButton>
            </div>
        </section>
    );
}
