"use client"
import { motion } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText } from "@/components/ui";
import { WaitlistBtn } from "@/components/common";

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

export default function FifthSection() {
    return (
        <section className=" w-full bg-primary-300 text-white flex flex-col ">
            <LandingLayout>
                <motion.div
                    className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center "
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={stagger}
                >
                    <div className=" flex flex-col items-center gap-2 ">
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="display-md">
                                Ready to Reach Your Target Score?
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="title-md" className=" max-w-[390px] ">
                                Prepare smarter, practice consistently, and walk
                                into your exam with confidence.
                            </CustomText>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* <CustomButton variant="secondary-btn">Join Waitlist</CustomButton> */}
                        <WaitlistBtn variant="secondary-btn" />
                    </motion.div>
                </motion.div>
            </LandingLayout>
        </section>
    );
}