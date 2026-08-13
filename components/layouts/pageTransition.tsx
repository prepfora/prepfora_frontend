"use client"
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-1 flex-col"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}