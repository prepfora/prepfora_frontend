"use client";
import { Footer } from "@/components/common";
import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText } from "@/components/ui";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
};

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
            <section className=" w-full lg:min-h-[calc(100vh-100px)] relative z-20 bg-[#EAEFFA] flex flex-col  ">
                <LandingLayout>
                    <motion.div
                        className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center "
                        initial="hidden"
                        animate="show"
                        variants={stagger}
                    >
                        <div className=" flex flex-col items-center gap-2 ">
                            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                                <CustomText
                                    type="display-lg"
                                    className=" max-w-[980px] "
                                >
                                    Quality exam practice that fits your budget
                                </CustomText>
                            </motion.div>
                            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                                <CustomText
                                    type="title-md"
                                    className=" max-w-[480px] "
                                >
                                    Prepfora helps you practice smarter, track your
                                    progress and get exam-ready without breaking the
                                    bank.
                                </CustomText>
                            </motion.div>
                        </div>
                        <div className=" w-full flex flex-col gap-8 items-center justify-center ">
                            <motion.div
                                className=" w-fit flex relative "
                                variants={fadeUp}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <button
                                    onClick={() => setTab(false)}
                                    className={` ${!tab ? " text-primary-300 font-bold! " : " "} relative w-[104px] h-[44px] `}
                                >
                                    <CustomText type={!tab ? "body-lg-bold" : "body-lg"}>
                                        Monthly
                                    </CustomText>
                                    {!tab && (
                                        <motion.div
                                            layoutId="pricing-tab-underline"
                                            className=" absolute left-0 right-0 bottom-0 h-[1px] bg-primary-300 "
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                                <button
                                    onClick={() => setTab(true)}
                                    className={` ${tab ? " text-primary-300 font-bold " : " "} relative w-[104px] h-[44px] `}
                                >
                                    <CustomText type={tab ? "body-lg-bold" : "body-lg"}>
                                        Yearly
                                    </CustomText>
                                    {tab && (
                                        <motion.div
                                            layoutId="pricing-tab-underline"
                                            className=" absolute left-0 right-0 bottom-0 h-[1px] bg-primary-300 "
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                                <div className=" absolute left-0 right-0 bottom-0 h-[1px] bg-neutral-200 -z-10 " />
                            </motion.div>
                            <motion.div
                                className=" w-full justify-center lg:flex-row flex-col flex gap-6 "
                                variants={stagger}
                            >
                                {list?.map((item, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={cardVariant}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                                            className={` ${index === 0 ? " bg-white text-neutral-500 " : " bg-primary-300 text-white "} max-w-[412px] w-full rounded-xl p-10 flex flex-col gap-2 text-left `}
                                        >
                                            <CustomText type="title-lg">
                                                {item?.title}
                                            </CustomText>
                                            <CustomText type="body-md">
                                                {item?.detail}
                                            </CustomText>
                                            <div className=" overflow-hidden ">
                                                <AnimatePresence mode="wait" initial={false}>
                                                    <motion.div
                                                        key={`${item.amount}-${tab}`}
                                                        initial={{ opacity: 0, y: 16 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -16 }}
                                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                                    >
                                                        <CustomText type="display-md">
                                                            #{item?.amount}
                                                            <span className=" text-sm ">
                                                                /month
                                                            </span>
                                                        </CustomText>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>
                                            <CustomText type="body-lg-bold">
                                                {item?.extra}
                                            </CustomText>
                                            <motion.ul
                                                className=" list-disc "
                                                initial="hidden"
                                                whileInView="show"
                                                viewport={{ once: true }}
                                                variants={{
                                                    hidden: {},
                                                    show: {
                                                        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                                                    },
                                                }}
                                            >
                                                {item?.option?.map(
                                                    (subitem) => {
                                                        return (
                                                            <motion.li
                                                                key={subitem}
                                                                variants={{
                                                                    hidden: { opacity: 0, x: -12 },
                                                                    show: { opacity: 1, x: 0 },
                                                                }}
                                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                            >
                                                                <CustomText type="body-md">
                                                                    {subitem}
                                                                </CustomText>
                                                            </motion.li>
                                                        );
                                                    },
                                                )}
                                            </motion.ul>
                                            <div className=" mt-4 ">
                                                {index === 0 && (
                                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                                        <CustomButton
                                                            variant="primary-outline"
                                                            fullWidth
                                                        >
                                                            Start for Free
                                                        </CustomButton>
                                                    </motion.div>
                                                )}
                                                {index === 1 && (
                                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                                        <CustomButton
                                                            variant="primary-outline"
                                                            fullWidth
                                                        >
                                                            Choose Premium
                                                        </CustomButton>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                </LandingLayout>
            </section>
            <Footer />
        </section>
    );
}