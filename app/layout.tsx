import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/common";
import { PageTransition } from "@/components/layouts";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en" className="light">
            <head />
            <body
                className={clsx(
                    "min-h-screen relative text-neutral-500 font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "light" }}
                >
                    <div className=" w-full flex flex-col h-auto">
                        <div className=" sticky bg-[#EAEFFA] top-0 z-30 w-full h-20 lg:h-[100px] ">
                            <Navbar />
                        </div>
                        <main className=" flex flex-1 flex-col ">
                            {/* <PageTransition> */}
                                {children}
                                {/* </PageTransition> */}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
