"use client"
import { motion } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomImage, CustomText } from "@/components/ui";

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

const listItemVariant = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0 },
};

const listStagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

export default function ThirdSection() {
    const list = [
        {
            title: "Others",
            body: [
                "Practice Random Questions",
                "Only show your score",
                "No motivation to stay consistent",
                "Limited progress tracking",
                "One-size-fits-all experience",
            ],
        },
        {
            title: "Prepfora",
            body: [
                "Practice with purpose",
                "Show exactly where to improve",
                "Earn PrepPoints and unlock badges",
                "Track your growth over time",
                "Personalized practice recommendations",
            ],
        },
    ];

    const exams = [
        {
            image: "/images/landing/jamb.png",
            title: "JAMB",
            body: "Practice CBT questions, take mock exams, and track your progress.",
        },
        {
            image: "/images/landing/waec.png",
            title: "WAEC",
            body: "Prepare across all your subjects with real exam questions.",
        },
        {
            image: "/images/landing/neco.png",
            title: "NECO",
            body: "Build confidence with topic-based practice and full mock exams.",
        },
        {
            image: "/images/landing/jamb.png",
            title: "POST-UTME",
            body: "Practice under timed conditions and get ready for your admission.",
        },
    ];

    return (
        <section className=" w-full bg-[#EAEFFA] flex flex-col ">
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
                                Why Students Choose Prepfora
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="title-md" className=" max-w-[642px] ">
                                Preparing for exams isn't just about answering more
                                questions. It's about knowing what to practice,
                                seeing your progress, and staying motivated until
                                exam day.
                            </CustomText>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className=" flex lg:flex-row flex-col w-full gap-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {list.map((item, index) => {
                            return (
                                <motion.div
                                    key={item?.title}
                                    variants={cardVariant}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className={` ${index === 0 ? " bg-white " : " bg-primary-300 text-white "} w-full p-10 rounded-xl text-left flex gap-6 flex-col `}
                                >
                                    <CustomText type="title-lg">
                                        {item?.title}
                                    </CustomText>
                                    <motion.ul
                                        className=" list-disc space-y-3 "
                                        variants={listStagger}
                                    >
                                        {item?.body.map((subtitle) => (
                                            <motion.li
                                                key={subtitle}
                                                variants={listItemVariant}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            >
                                                <CustomText type="body-md">
                                                    {subtitle}
                                                </CustomText>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </LandingLayout>
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <motion.div
                        className=" flex flex-col items-center gap-4 "
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="display-md">
                                Prepare for Every Major Nigerian Exam
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="title-md" className=" max-w-[606px] ">
                                Whether you're preparing for JAMB, WAEC, NECO, GCE
                                or Post-UTME, Prepfora gives you the practice and
                                confidence you need to perform at your best.
                            </CustomText>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <CustomButton variant="primary-outline">
                                Join Waitlist
                            </CustomButton>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className=" grid grid-cols-2 lg:grid-cols-4 w-full gap-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {exams.map((item, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariant}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                                    className=" w-full p-4 rounded-xl border border-secondary-400 text-left flex gap-3 flex-col "
                                >
                                    <div className=" w-14 h-14 ">
                                        <CustomImage
                                            src={item?.image}
                                            alt="Hero1"
                                            layout="width"
                                        />
                                    </div>
                                    <CustomText type="body-lg">
                                        {item?.title}
                                    </CustomText>
                                    <CustomText type="body-md">
                                        {item?.body}
                                    </CustomText>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    <motion.div
                        className=" w-full h-[402px] lg:flex hidden mb-8 rounded-2xl "
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <CustomImage
                            src={"/images/landing/exam.png"}
                            alt="Hero1"
                            layout="width"
                            borderRadius="24px"
                        />
                    </motion.div>
                    <motion.div
                        className=" w-full h-[596px] flex justify-center items-center lg:hidden mb-8 rounded-2xl "
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <CustomImage
                            src={"/images/landing/exam-mobile.png"}
                            alt="Hero1"
                            layout="height"
                        />
                    </motion.div>
                </div>
            </LandingLayout>
        </section>
    );
}