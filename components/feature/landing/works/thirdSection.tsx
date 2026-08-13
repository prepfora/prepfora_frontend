"use client"
import { motion } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText } from "@/components/ui";

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

export default function WorkThirdSection() {
    return (
        <section className=" w-full relative z-20 bg-white py-10 lg:py-20  text-neutral-500  ">
            <LandingLayout>
                <motion.div
                    className=" flex flex-col gap-12 lg:h-[461px] w-full py-10 px-5 rounded-2xl bg-secondary-350 text-center justify-center items-center "
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div
                        className=" flex flex-col gap-2 "
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText
                                type="display-md"
                                className=" max-w-[900px] "
                            >
                                Every Great Result Starts with One Practice Session.
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText
                                type="body-lg"
                                className=" max-w-[948px] "
                            >
                                Create your free account and start preparing today.
                            </CustomText>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <CustomButton>Start Practicing Now</CustomButton>
                    </motion.div>
                </motion.div>
            </LandingLayout>
        </section>
    );
}