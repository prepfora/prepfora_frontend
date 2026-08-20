"use client"
import { motion } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomImage, CustomText } from "@/components/ui"; 
import { WaitlistBtn } from "@/components/common";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

export default function HeroSection() {
    
    return (
        <section className=" w-full lg:h-[calc(100vh-100px)] flex flex-col pt-4 lg:pb-0 pb-4 relative bg-[#EAEFFA] ">
            <LandingLayout>
                <motion.div
                    className=" flex-1 relative z-20 flex flex-col items-center pt-10 "
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className=" max-w-[678px] text-center flex flex-col items-center gap-5 ">
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="display-lg">
                                Ace JAMB, WAEC & More
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="body-lg" className=" max-w-[543px] ">
                                Prepare with{" "}
                                <span className=" font-bold ">
                                    realistic CBT practice, full mock exams, smart
                                    performance insights
                                </span>
                                , and <span className=" font-bold ">rewards</span>{" "}
                                that keep you motivated every step of the way.
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="body-md" className=" max-w-[344px] ">
                                Join the waitlist today and get{" "}
                                <span className=" font-bold ">1 month FREE</span>{" "}
                                subscription when we launch
                            </CustomText>
                        </motion.div>
                        <motion.div
                            className=" lg:w-fit w-full flex gap-4 "
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.div
                                className=" w-full lg:w-[150px] "
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <CustomButton
                                    variant="primary-outline"
                                    className=" w-full! lg:w-[150px] "
                                >
                                    See how it works
                                </CustomButton>
                            </motion.div>
                            <motion.div
                                className=" w-full lg:w-[150px] "
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <WaitlistBtn />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </LandingLayout>
            <div className=" absolute hidden lg:flex flex-1 justify-between inset-x-0 top-0 bottom-0 ">
                <motion.div
                    className=" w-full h-[93%] mt-auto flex items-start justify-start "
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        opacity: { duration: 0.8, ease: "easeOut" },
                        x: { duration: 0.8, ease: "easeOut" },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                    }}
                >
                    <CustomImage
                        src="/images/landing/hero1.png"
                        alt="Hero1"
                        layout="height"
                    />
                </motion.div>
                <motion.div
                    className=" w-full h-[120%] mt-10 flex items-end justify-end"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                        opacity: { duration: 0.8, ease: "easeOut", delay: 0.1 },
                        x: { duration: 0.8, ease: "easeOut", delay: 0.1 },
                        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                    }}
                >
                    <CustomImage
                        src={"/images/landing/hero2.png"}
                        alt="hero2"
                        layout="height"
                        objectFit="contain"
                    />
                </motion.div>
            </div>
            <motion.div
                className=" w-full absolute bg-transparent bottom-0 inset-x-0 mt-auto hidden lg:flex "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <CustomImage
                    src="/images/landing/hero3.png"
                    alt="Hero3"
                    layout="width"
                />
            </motion.div>
            <div className=" w-full lg:hidden relative mt-6 -mb-10 flex flex-col ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <CustomImage
                        src={"/images/landing/heromobile1.png"}
                        alt="heromobile"
                        layout="width"
                        objectFit="contain"
                    />
                </motion.div>
                <motion.div
                    className=" w-full absolute bottom-5  "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                    <CustomImage
                        src={"/images/landing/heromobile2.png"}
                        alt="heromobile"
                        layout="width"
                        objectFit="contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}