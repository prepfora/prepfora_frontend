"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Label,
} from "@heroui/react";
import { HamburgerMenu } from "iconsax-reactjs";
import { Logo } from "@/components/icons";
import { CustomButton } from "@/components/ui";

const NAV_ITEMS = [
    { label: "How it works", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav className="sticky top-0 z-40 w-full bg-white backdrop-blur-lg">
            <header className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-4 px-6 lg:h-25">
                <NextLink className="flex items-center gap-1" href="/">
                    <Logo width={129} />
                </NextLink>

                <div className="hidden items-center gap-6 lg:flex">
                    {NAV_ITEMS.map((item) => (
                        <NextLink
                            key={item.href}
                            href={item.href}
                            className={
                                item.href === pathname ? "text-primary-300" : ""
                            }
                        >
                            {item.label}
                        </NextLink>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <CustomButton variant="primary">Join Waitlist</CustomButton>

                    <div className="flex lg:hidden">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button aria-label="Open menu" type="button">
                                    <HamburgerMenu size={25} />
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Popover>
                                <Dropdown.Menu
                                    onAction={(key) => {
                                        const item = NAV_ITEMS.find(
                                            (i) => i.href === key,
                                        );
                                        if (item) router.push(item.href);
                                    }}
                                >
                                    {NAV_ITEMS.map((item) => (
                                        <Dropdown.Item
                                            key={item.href}
                                            id={item.href}
                                            textValue={item.label}
                                            className={
                                                item.href === pathname
                                                    ? "text-primary-300"
                                                    : ""
                                            }
                                        >
                                            <Label>{item.label}</Label>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </div>
                </div>
            </header>
        </nav>
    );
}
