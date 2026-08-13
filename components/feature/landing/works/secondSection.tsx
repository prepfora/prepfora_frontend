"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomImage, CustomText } from "@/components/ui";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const rowVariant = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

const textVariant = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 },
};

const imageVariant = {
    hidden: { opacity: 0, x: 24, scale: 0.97 },
    show: { opacity: 1, x: 0, scale: 1 },
};

const badgeVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
};

export default function SecondSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.7", "end 0.5"],
    });

    const list = [
        {
            title: "Choose the Exam You're Preparing For",
            body: "Start by selecting the exam you're taking, JAMB, WAEC, NECO, or Post-UTME. If you're preparing for more than one, you can choose them all.",
            image: "/images/works/work1.png",
        },
        {
            title: "Set Your Goals",
            body: "Tell Prepfora what you're working towards. Whether it's scoring 300+ in JAMB or earning distinctions in WAEC, we'll personalize your practice experience around your goals.",
            image: "/images/works/work2.png",
        },
        {
            title: "Practice with Real Exam Questions",
            body: "Choose an exam year and answer authentic questions in a realistic CBT environment that mirrors the real exam experience.",
            image: "/images/works/work3.png",
        },
        {
            title: "Understand Your Performance",
            body: "The moment you finish, Prepfora breaks down your results. See your score, identify weak topics, and get AI-powered insights into where you should focus next.",
            image: "/images/works/work4.png",
        },
        {
            title: "Improve and Earn Rewards",
            body: "Every practice session earns you PrepPoints. Stay consistent, unlock badges, and use your Prep Credits to keep practicing.",
            image: "/images/works/work5.png",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className=" w-full relative z-20 bg-primary-300 text-white  "
        >
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <motion.div
                        className=" flex flex-col items-center gap-2 "
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <CustomText type="display-md">
                            Your step by step journey to success
                        </CustomText>
                    </motion.div>
                    <div className=" flex gap-16 ">
                        <div className=" hidden lg:flex flex-col items-center relative ">
                            <div className=" h-35 " />
                            <motion.div
                                className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 "
                                variants={badgeVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                            >
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 1
                                </CustomText>
                            </motion.div>
                            <div className=" relative h-108 w-1 ">
                                <div className=" absolute inset-0 bg-white/20 " />
                                <motion.div
                                    className=" absolute inset-x-0 top-0 bg-primary-550 origin-top "
                                    style={{
                                        scaleY: useTransform(
                                            scrollYProgress,
                                            [0, 0.2],
                                            [0, 1],
                                        ),
                                        height: "100%",
                                    }}
                                />
                            </div>
                            <motion.div
                                className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 "
                                variants={badgeVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                            >
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 2
                                </CustomText>
                            </motion.div>
                            <div className=" relative h-108 w-1 ">
                                <div className=" absolute inset-0 bg-white/20 " />
                                <motion.div
                                    className=" absolute inset-x-0 top-0 bg-primary-550 origin-top "
                                    style={{
                                        scaleY: useTransform(
                                            scrollYProgress,
                                            [0.15, 0.4],
                                            [0, 1],
                                        ),
                                        height: "100%",
                                    }}
                                />
                            </div>
                            <motion.div
                                className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 "
                                variants={badgeVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                            >
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 3
                                </CustomText>
                            </motion.div>
                            <div className=" relative h-102 w-1 ">
                                <div className=" absolute inset-0 bg-white/20 " />
                                <motion.div
                                    className=" absolute inset-x-0 top-0 bg-primary-550 origin-top "
                                    style={{
                                        scaleY: useTransform(
                                            scrollYProgress,
                                            [0.4, 0.65],
                                            [0, 1],
                                        ),
                                        height: "100%",
                                    }}
                                />
                            </div>
                            <motion.div
                                className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 "
                                variants={badgeVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                            >
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 4
                                </CustomText>
                            </motion.div>
                            <div className=" relative h-108 w-1 ">
                                <div className=" absolute inset-0 bg-white/20 " />
                                <motion.div
                                    className=" absolute inset-x-0 top-0 bg-primary-550 origin-top "
                                    style={{
                                        scaleY: useTransform(
                                            scrollYProgress,
                                            [0.65, 0.9],
                                            [0, 1],
                                        ),
                                        height: "100%",
                                    }}
                                />
                            </div>
                            <motion.div
                                className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 "
                                variants={badgeVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                            >
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 5
                                </CustomText>
                            </motion.div>
                        </div>
                        <div className=" w-full flex flex-col lg:gap-8 ">
                            {list?.map((item, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        className=" w-full lg:h-[440px] flex lg:flex-row flex-col items-center justify-between lg:pb-0 pb-6 gap-6 "
                                        variants={rowVariant}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.35 }}
                                    >
                                        <motion.div
                                            className=" max-w-[447px] text-left flex flex-col gap-2 "
                                            variants={textVariant}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <CustomText type="display-sm">
                                                {item?.title}
                                            </CustomText>
                                            <CustomText type="body-lg">
                                                {item?.body}
                                            </CustomText>
                                        </motion.div>
                                        <motion.div
                                            className=" w-full max-w-[567px] rounded-2xl "
                                            variants={imageVariant}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            <CustomImage
                                                src={item?.image}
                                                alt={item?.title}
                                                layout="width"
                                            />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </LandingLayout>
        </section>
    );
}