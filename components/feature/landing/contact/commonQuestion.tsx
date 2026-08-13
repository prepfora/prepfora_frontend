"use client";
import { motion, AnimatePresence } from "motion/react";
import { CustomButton, CustomText } from "@/components/ui";
import { Add, Minus } from "iconsax-reactjs";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

export default function CommonQuestion() {
    const faq = [
        {
            title: "Can I use Prepfora on my phone?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "How does Prepfora help me prepare?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "Does Prepfora teach lessons?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
    ];

    const [show, setShow] = useState("");

    return (
        <section className=" w-full bg-primary-300 flex flex-col items-center text-white py-10 lg:py-20 ">
            <div className=" lg:max-w-[716px] w-full flex flex-col items-center gap-10 px-6 lg:gap-16 ">
                <motion.div
                    className=" flex flex-col gap-4 w-fit justify-center items-center "
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={stagger}
                >
                    <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <CustomText type="display-md">FAQs</CustomText>
                    </motion.div>
                    <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <CustomText
                            type="body-lg"
                            className=" text-center max-w-[536px] "
                        >
                            Skip the wait! Most questions regarding WAEC
                            registration, JAMB mocks, are answered in our FAQ.
                        </CustomText>
                    </motion.div>
                    <motion.div
                        className=" max-w-[304px] pt-4 w-full "
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <CustomButton fullWidth variant="secondary-btn">Visit FAQ</CustomButton>
                    </motion.div>
                </motion.div>
                <motion.div
                    className=" w-full flex-col flex gap-4 "
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    {faq.map((item, index) => {
                        const isOpen = show === item?.title;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className=" w-full flex flex-col gap-3 "
                            >
                                <button
                                    onClick={() =>
                                        setShow((prev) =>
                                            prev !== item?.title
                                                ? item?.title
                                                : "",
                                        )
                                    }
                                    className=" w-full flex text-left items-center justify-between h-16 "
                                >
                                    {item?.title}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {isOpen ? (
                                            <Minus size={24} />
                                        ) : (
                                            <Add size={24} />
                                        )}
                                    </motion.div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div className=" p-5 rounded-lg border ">
                                                <CustomText type="body-md">
                                                    {item?.body}
                                                </CustomText>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}