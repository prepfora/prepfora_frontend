"use client"
import { motion } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomImage, CustomText } from "@/components/ui";

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

const stepVariant = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function ForthSection() {
    const list = [
        {
            title: "Choose your exam",
            body: "Select the exam you're preparing for, such as JAMB, WAEC, NECO, or Post-UTME.",
        },
        {
            title: "Practice Real Exam Questions",
            body: "Answer realistic CBT questions, challenge yourself with mock exams, and practice at your own pace.",
        },
        {
            title: "See Where You Stand",
            body: "After every session, Prepfora shows your score, highlights weak topics, and recommends what to practice next.",
        },
        {
            title: "Earn Rewards as You Go",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
    ];

    return (
        <section className=" w-full bg-primary-550 text-white flex flex-col ">
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
                                Practice More. Earn More.
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="title-md" className=" max-w-[511px] ">
                                Every practice session brings you closer to your
                                exam goals, and rewards you for staying consistent.
                            </CustomText>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className=" lg:max-w-[952px] text-left w-full flex lg:flex-row flex-col items-center gap-4 lg:gap-8 "
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        <div className=" w-full flex flex-col gap-4 lg:gap-8 ">
                            <motion.div
                                variants={cardVariant}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                                className=" w-full h-[256px] rounded-[26px] bg-[#2563EB33] px-6 gap-6 flex flex-col justify-center "
                            >
                                <div className=" flex flex-col gap-2 ">
                                    <CustomText type="headline-sm">
                                        Earn PrepPoints
                                    </CustomText>
                                    <CustomText type="body-lg">
                                        Complete practice sessions, mock exams,
                                        and study goals to earn PrepPoints
                                    </CustomText>
                                </div>
                                <div className=" w-20 h-auto ">
                                    <CustomImage
                                        src={"/images/landing/Capa_1.png"}
                                        alt="Hero1"
                                        layout="width"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={cardVariant}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                                className=" w-full h-[256px] rounded-[26px] bg-[#2563EB33] px-6 gap-6 flex flex-col justify-center "
                            >
                                <div className=" flex flex-col gap-2 ">
                                    <CustomText type="headline-sm">
                                        Unlock Badges
                                    </CustomText>
                                    <CustomText type="body-lg">
                                        Celebrate milestones, streaks and
                                        achievements as you prepare.
                                    </CustomText>
                                </div>
                                <div className=" w-20 h-auto ">
                                    <CustomImage
                                        src={"/images/landing/Layer_1.png"}
                                        alt="Hero1"
                                        layout="width"
                                    />
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={cardVariant}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                            className=" w-full h-[256px] lg:h-[443px] rounded-[26px] bg-[#2563EB33] px-6 gap-6 flex flex-col justify-center "
                        >
                            <div className=" flex flex-col gap-2 ">
                                <CustomText type="headline-sm">
                                    Redeem Rewards
                                </CustomText>
                                <CustomText type="body-lg">
                                    Exchange your PrepPoints for exciting
                                    rewards and credits
                                </CustomText>
                            </div>
                            <div className=" w-20 lg:w-63.5 h-auto ">
                                <CustomImage
                                    src={"/images/landing/Page-1.png"}
                                    alt="Hero1"
                                    layout="width"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </LandingLayout>
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
                                Getting Started Is Easy
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="title-md" className=" max-w-[520px] ">
                                From your first practice session to exam day,
                                Prepfora helps you stay focused, improve your
                                scores, and prepare with confidence.
                            </CustomText>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className=" w-full grid lg:grid-cols-4 text-left gap-6 "
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {list.map((item, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={stepVariant}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className=" w-full flex flex-col gap-4 "
                                >
                                    <motion.div
                                        className=" w-[67px] h-[48px] rounded-lg bg-primary-300 text-white flex justify-center items-center "
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, ease: "backOut", delay: 0.15 }}
                                    >
                                        <CustomText type="body-lg">
                                            Step {index + 1}
                                        </CustomText>
                                    </motion.div>
                                    <div className=" flex flex-col gap-2 ">
                                        <CustomText
                                            type="headline-sm"
                                            className=" lg:h-[63px] "
                                        >
                                            {item?.title}
                                        </CustomText>
                                        <CustomText type="body-lg">
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