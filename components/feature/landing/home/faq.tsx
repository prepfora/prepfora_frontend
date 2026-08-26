"use client";
import { motion, AnimatePresence } from "motion/react";
import { CustomText } from "@/components/ui";
import { Add, Minus } from "iconsax-reactjs";
import { useState } from "react";
import useFAQ from "@/hooks/useFAQ";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

export default function FAQ() {
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
        {
            title: "Do I need to install an app?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "Is Prepfora suitable for first-time exam candidates?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
        {
            title: "How does Prepfora know my weak topics?",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
    ];

    const [show, setShow] = useState("");

    const { useGetFAQ } = useFAQ()

    const { data } = useGetFAQ()

    return (
        <section className=" w-full bg-white flex flex-col items-center py-10 lg:py-20 ">
            <div className=" lg:max-w-[716px] w-full flex flex-col items-center gap-10 px-6 lg:gap-16 ">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <CustomText type="display-md">FAQs</CustomText>
                </motion.div>
                <motion.div
                    className=" w-full flex-col flex gap-4 "
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    {data?.data.map((item, index) => {
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
                                                    {item?.description}
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