"use client"
import { motion } from "motion/react";
import { Logo } from "@/components/icons";
import { LandingLayout } from "@/components/layouts";
import NextLink from "next/link";
import { CustomText } from "@/components/ui";
import { Instagram } from "iconsax-reactjs";
import { PiFacebookLogoFill, PiLinkedinLogoFill, PiTiktokLogoFill } from "react-icons/pi";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

export default function Footer() {
    return (
        <section className=" w-full bg-primary-550 text-white flex flex-col ">
            <LandingLayout>
                <motion.div
                    className=" flex lg:flex-row flex-col gap-6 lg:justify-between py-20 lg:items-end "
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={stagger}
                >
                    <motion.div className=" flex flex-col gap-6 " variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <NextLink className="flex items-center gap-1" href="/">
                            <Logo color="white" width={193} />
                        </NextLink>
                        <div className=" flex gap-4 items-center ">
                            <motion.button whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}>
                                <Instagram size={24} />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}>
                                <PiLinkedinLogoFill size={24} />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}>
                                <PiTiktokLogoFill size={24} />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}>
                                <PiFacebookLogoFill size={24} />
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div className=" flex items-center gap-4 " variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <CustomText type="body-lg">Privacy Policy</CustomText>
                        <CustomText type="body-lg">
                            Terms and Conditions
                        </CustomText>
                    </motion.div>

                    <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <CustomText type="body-lg">
                            © 2024 Prepfora Nigeria. All rights reserved.
                        </CustomText>
                    </motion.div>
                </motion.div>
            </LandingLayout>
        </section>
    );
}