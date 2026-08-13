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

export default function WorkHeroSection() {
    return (
        <section className=" w-full lg:h-auto flex flex-col pt-4 lg:pb-0 pb-4 relative bg-[#EAEFFA] ">
            <LandingLayout>
                <motion.div
                    className=" flex-1 relative z-20 flex flex-col gap-8 items-center justify-center text-center py-10 "
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                >
                    <div className=" w-full flex items-center flex-col gap-1 ">
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText
                                type="display-lg"
                                className=" max-w-[734px] "
                            >
                                Here's How Prepfora Helps You Succeed
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="body-lg" className=" max-w-[598px] ">
                                From choosing your exam to understanding your
                                results, every step is designed to help you prepare
                                smarter and score higher.
                            </CustomText>
                        </motion.div>
                    </div>
                    <motion.div
                        className=" w-full max-w-[1084px] "
                        variants={fadeUp}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <CustomImage
                            src="/images/works/work.png"
                            alt="work"
                            layout="width"
                        />
                    </motion.div>
                </motion.div>
            </LandingLayout>
        </section>
    );
}