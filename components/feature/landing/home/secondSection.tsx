"use client"
import { motion } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomText } from "@/components/ui";
import { FaArrowTrendUp, FaRegCircleCheck } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { LuCircleDollarSign } from "react-icons/lu";

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

export default function SecondSection() {
    const list = [
        {
            title: "Know Exactly What to Practice",
            body: "Prepfora identifies your weak topics and recommends where to focus next, helping you study smarter.",
            icon: FaRegCircleCheck
        },
        {
            title: "Practice Like It's the Real Exam",
            body: "Get comfortable with the same CBT experience you'll face on exam day, so there are no surprises.",
            icon: FiMonitor
        },
        {
            title: "Track your Readiness",
            body: "Track your scores, monitor your progress, and celebrate every milestone as you get closer to your goal.",
            icon: FaArrowTrendUp
        },
        {
            title: "Stay Motivated with Rewards",
            body: "Complete practice sessions, stay consistent, unlock badges, and earn PrepPoints you can redeem for exciting rewards.",
            icon: LuCircleDollarSign
        },
    ];

    return (
        <section className=" w-full relative z-20 bg-secondary-450 text-white  ">
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <motion.div
                        className=" flex flex-col items-center gap-2 "
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="display-md">
                                Everything You Need to Score Higher
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="title-md" className=" max-w-[480px] ">
                                Everything you need to prepare smarter, improve
                                faster, and walk into your exam with confidence.
                            </CustomText>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className=" w-full grid lg:grid-cols-2 gap-2 "
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {list.map((item) => {
                            return (
                                <motion.div
                                    key={item?.title}
                                    variants={cardVariant}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                                    className=" w-full border-white bg-[#4DC49733] rounded-2xl lg:h-[450px] flex flex-col px-6 py-6 lg:py-0 lg:px-10 justify-center border "
                                >
                                    <motion.div
                                        className=" w-16 h-16 text-secondary-500 flex justify-center items-center bg-white rounded-lg "
                                        initial={{ scale: 0, rotate: -20 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, ease: "backOut", delay: 0.15 }}
                                    >
                                        <item.icon size={"40px"} />
                                    </motion.div>
                                    <div className=" mt-6 space-y-2 text-left ">
                                        <CustomText
                                            className=" max-w-[369px] "
                                            type="display-sm"
                                        >
                                            {item?.title}
                                        </CustomText>
                                        <CustomText
                                            className=" max-w-[418px] "
                                            type="body-lg"
                                        >
                                            {item?.body}
                                        </CustomText>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </LandingLayout>
        </section>
    );
}