import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/common";

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
                        <Navbar />
                        <main className=" flex flex-1 flex-col overflow-x-hidden ">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
