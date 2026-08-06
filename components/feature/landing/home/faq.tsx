"use client";
import { CustomText } from "@/components/ui";
import { Add, Minus } from "iconsax-reactjs"; 
import { useState } from "react";

export default function FAQ() {
    const faq = [
        {
            title: "Can I use Prepfora on my phone?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "How does Prepfora help me prepare?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "Does Prepfora teach lessons?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "Do I need to install an app?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "Is Prepfora suitable for first-time exam candidates?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "How does Prepfora know my weak topics?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
    ];

    const [show, setShow] = useState("");

    return (
        <section className=" w-full bg-white flex flex-col items-center py-10 lg:py-20 ">
            <div className=" lg:max-w-[716px] w-full flex flex-col items-center gap-10 px-6 lg:gap-16 ">
                <CustomText type="display-md">FAQs</CustomText>
                <div className=" w-full flex-col flex gap-4 ">
                    {faq.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className=" w-full flex flex-col gap-3 "
                            >
                                <button
                                    onClick={() =>
                                        setShow((prev) =>
                                            prev !== item?.title
                                                ? item?.title
                                                : "",
                                        )
                                    }
                                    key={index}
                                    className=" w-full flex text-left items-center justify-between h-16 "
                                >
                                    {item?.title}
                                    {show !== item?.title && <Add size={24} />}
                                    {show === item?.title && (
                                        <Minus size={24} />
                                    )}
                                </button>
                                {show === item?.title && (
                                    <div className=" p-5 rounded-lg border ">
                                        <CustomText type="body-md">
                                            {item?.body}
                                        </CustomText>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
