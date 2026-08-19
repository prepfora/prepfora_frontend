"use client";
import { motion } from "motion/react";
import { LandingLayout } from "@/components/layouts";
import { CustomText } from "@/components/ui";
import useContact from "@/hooks/useContact";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { ContactForm } from "../../forms/landing";

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
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1 },
};

const socialItemVariant = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

export default function ContactHeroSection() {
    const SOCIAL_LINK = [
        {
            label: "Instagram",
            link: "",
            icon: FaInstagram,
        },
        {
            label: "Tiktok",
            link: "",
            icon: FaTiktok,
        },
        {
            label: "Facebook",
            link: "",
            icon: FaFacebookSquare,
        },
        {
            label: "LinkedIn",
            link: "",
            icon: FaLinkedin,
        },
    ];

    const { formik, isLoading } = useContact();

    return (
        <section className=" w-full lg:min-h-[calc(100vh-100px)] flex flex-col pt-4 lg:pb-0 pb-4 relative bg-[#EAEFFA] ">
            <LandingLayout>
                <motion.div
                    className=" flex-1 relative z-20 gap-10 flex flex-col items-center py-10 "
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                >
                    <div className=" max-w-[678px] text-center flex flex-col items-center gap-2 ">
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="display-lg">
                                How can we help?
                            </CustomText>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <CustomText type="body-lg">
                                Whether you're a student aiming for high scores or
                                an educator seeking resources, our team is here to
                                support your academic journey.
                            </CustomText>
                        </motion.div>
                    </div>
                    <div className=" w-full flex lg:flex-row flex-col gap-6 ">
                        <motion.div
                            className=" p-4 lg:p-10 flex-1 flex flex-col gap-6 bg-white rounded-2xl "
                            variants={cardVariant}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <CustomText type="headline-lg">
                                Send us a message
                            </CustomText>
                            <ContactForm loading={isLoading} formik={formik} />
                        </motion.div>
                        <div className=" max-w-[512px] w-full flex text-white flex-col gap-6 ">
                            <motion.div
                                className="  p-6 w-full bg-secondary-550 flex flex-col rounded-2xl gap-4 "
                                variants={cardVariant}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            >
                                <CustomText type="headline-sm">
                                    Direct Contact
                                </CustomText>
                                <div className=" flex gap-4 ">
                                    <div className=" w-fit mt-1 ">
                                        <FiMail />
                                    </div>
                                    <div className=" flex flex-col gap-1 ">
                                        <CustomText type="body-lg-bold">
                                            Email Support
                                        </CustomText>
                                        <CustomText type="body-lg">
                                            contact@prepfora.edu
                                        </CustomText>
                                    </div>
                                </div>
                                <div className=" flex gap-4 ">
                                    <div className=" w-fit mt-1 ">
                                        <LuPhone />
                                    </div>
                                    <div className=" flex flex-col gap-1 ">
                                        <CustomText type="body-lg-bold">
                                            Phone Line
                                        </CustomText>
                                        <CustomText type="body-lg">
                                            +234806873256
                                        </CustomText>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="  p-6 w-full bg-primary-550 flex flex-col rounded-2xl gap-4 "
                                variants={cardVariant}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            >
                                <CustomText type="headline-sm">
                                    Connect with us
                                </CustomText>
                                <motion.div
                                    className=" w-full grid lg:grid-cols-2 gap-4 "
                                    variants={stagger}
                                    initial="hidden"
                                    animate="show"
                                >
                                    {SOCIAL_LINK.map((item, index) => {
                                        return (
                                            <motion.div
                                                key={index}
                                                variants={socialItemVariant}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                whileHover={{ scale: 1.03, y: -2 }}
                                                whileTap={{ scale: 0.97 }}
                                                className="  bg-primary-500 w-full h-[60px] flex gap-4 items-center rounded-lg px-4 cursor-pointer "
                                            >
                                                <item.icon size={24} />
                                                <CustomText type="body-lg">
                                                    {item?.label}
                                                </CustomText>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </LandingLayout>
        </section>
    );
}