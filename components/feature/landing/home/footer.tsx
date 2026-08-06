import { Logo } from "@/components/icons";
import { LandingLayout } from "@/components/layouts";
import NextLink from "next/link";
import { CustomText } from "@/components/ui";
import {  Instagram } from "iconsax-reactjs"; 
import { PiFacebookLogoFill, PiLinkedinLogoFill, PiTiktokLogoFill } from "react-icons/pi";

export default function Footer() {
    return (
        <section className=" w-full bg-primary-550 text-white flex flex-col ">
            <LandingLayout>
                <div className=" flex lg:flex-row flex-col gap-6 lg:justify-between py-20 lg:items-end ">
                    <div className=" flex flex-col gap-6 ">
                        <NextLink className="flex items-center gap-1" href="/">
                            <Logo color="white" width={193} />
                        </NextLink>
                        <div className=" flex gap-4 items-center ">
                            <button>
                                <Instagram size={24} />
                            </button>
                            <button>
                                <PiLinkedinLogoFill size={24} />
                            </button>
                            <button>
                                <PiTiktokLogoFill size={24} />
                            </button>
                            <button>
                                <PiFacebookLogoFill size={24} />
                            </button>
                        </div>
                    </div>
                    <div className=" flex items-center gap-4 ">
                        <CustomText type="body-lg">Privacy Policy</CustomText>
                        <CustomText type="body-lg">
                            Terms and Conditions
                        </CustomText>
                    </div>

                    <CustomText type="body-lg">
                        © 2024 Prepfora Nigeria. All rights reserved.
                    </CustomText>
                </div>
            </LandingLayout>
        </section>
    );
}
