"use client";
import { Footer } from "@/components";
import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText } from "@/components/ui";
import { useState } from "react";

export default function PricingPage() {
    const [tab, setTab] = useState(false);
    const list = [
        {
            title: "Free",
            detail: "Great for getting started.",
            amount: "0",
            option: [
                "Limited practice with sample questions",
                "Basic Performance Insight",
                "Earn PrepPoints",
            ],
            extra: "",
        },
        {
            title: "Premium",
            detail: "Unlock your full potential",
            amount: "3000",
            option: ["Mock Exams", "AI Performance Insights"],
            extra: "Everything in Free plus:",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center ">
            <section className=" w-full lg:h-[calc(100vh-100px)] relative z-20 bg-[#EAEFFA] flex flex-col  ">
                <LandingLayout>
                    <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                        <div className=" flex flex-col items-center gap-2 ">
                            <CustomText
                                type="display-lg"
                                className=" max-w-[980px] "
                            >
                                Quality exam practice that fits your budget
                            </CustomText>
                            <CustomText
                                type="title-md"
                                className=" max-w-[480px] "
                            >
                                Prepfora helps you practice smarter, track your
                                progress and get exam-ready without breaking the
                                bank.
                            </CustomText>
                        </div>
                        <div className=" w-full flex flex-col gap-8 items-center justify-center ">
                            <div className=" w-fit flex ">
                                <button
                                    onClick={() => setTab(false)}
                                    className={` ${!tab ? " border-primary-300 text-primary-300 font-bold " : " "} w-[104px] h-[44px] border-b `}
                                >
                                    <CustomText type="body-lg">
                                        Monthly
                                    </CustomText>
                                </button>
                                <button
                                    onClick={() => setTab(true)}
                                    className={` ${tab ? " border-primary-300 text-primary-300 font-bold " : " "} w-[104px] h-[44px] border-b `}
                                >
                                    <CustomText type="body-lg">
                                        Yearly
                                    </CustomText>
                                </button>
                            </div>
                            <div className=" w-full justify-center lg:flex-row flex-col flex gap-6 ">
                                {list?.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={` ${index === 0 ? " bg-white text-neutral-500 " : " bg-primary-300 text-white "} lg:max-w-[412px] w-full rounded-xl p-10 flex flex-col gap-2 text-left `}
                                        >
                                            <CustomText type="title-lg">
                                                {item?.title}
                                            </CustomText>
                                            <CustomText type="body-md">
                                                {item?.detail}
                                            </CustomText>
                                            <CustomText type="display-md">
                                                #{item?.amount}
                                                <span className=" text-sm ">
                                                    /month
                                                </span>
                                            </CustomText>
                                            <CustomText type="body-lg-bold">
                                                {item?.extra}
                                            </CustomText>
                                            <ul className=" list-disc ">
                                                {item?.option?.map(
                                                    (subitem) => {
                                                        return (
                                                            <li key={subitem}>
                                                                <CustomText type="body-md">
                                                                    {subitem}
                                                                </CustomText>
                                                            </li>
                                                        );
                                                    },
                                                )}
                                            </ul>
                                            <div className=" mt-4 ">
                                                {index === 0 && (
                                                    <CustomButton
                                                        variant="primary-outline"
                                                        fullWidth
                                                    >
                                                        Start for Free
                                                    </CustomButton>
                                                )}
                                                {index === 1 && (
                                                    <CustomButton
                                                        variant="primary-outline"
                                                        fullWidth
                                                    >
                                                        Choose Premium
                                                    </CustomButton>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </LandingLayout>
            </section>
            <Footer />
        </section>
    );
}
