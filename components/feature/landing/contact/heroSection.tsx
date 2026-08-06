"use client";
import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText, FormikField } from "@/components/ui";
import useContact from "@/hooks/useContact";
import { FormikProvider } from "formik";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";

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

    const { formik } = useContact();

    return (
        <section className=" w-full lg:min-h-[calc(100vh-100px)] flex flex-col pt-4 lg:pb-0 pb-4 relative bg-[#EAEFFA] ">
            <LandingLayout>
                <div className=" flex-1 relative z-20 gap-10 flex flex-col items-center py-10 ">
                    <div className=" max-w-[678px] text-center flex flex-col items-center gap-2 ">
                        <CustomText type="display-lg">
                            How can we help?
                        </CustomText>
                        <CustomText type="body-lg">
                            Whether you're a student aiming for high scores or
                            an educator seeking resources, our team is here to
                            support your academic journey.
                        </CustomText>
                    </div>
                    <div className=" w-full flex lg:flex-row flex-col gap-6 ">
                        <div className=" p-4 lg:p-10 flex-1 flex flex-col gap-6 bg-white rounded-2xl ">
                            <CustomText type="headline-lg">
                                Send us a message
                            </CustomText>
                            <FormikProvider value={formik}>
                                <div className=" w-full flex flex-col gap-3 ">
                                    <div className=" lg:flex-row flex-col flex w-full gap-4 ">
                                        <FormikField
                                            name="test"
                                            label="First Name"
                                        />
                                        <FormikField
                                            name="last"
                                            label="Last Name"
                                        />
                                    </div>
                                    <FormikField name="email" label="Email" />
                                    <FormikField
                                        as="select"
                                        name="category"
                                        label="Category"
                                    />
                                    <FormikField
                                        as="textarea"
                                        name="subject"
                                        label="Subject"
                                    />
                                    <div className=" w-full pt-4 " >
                                        <CustomButton variant="disabled" fullWidth >Send Message</CustomButton>
                                    </div>
                                </div>
                            </FormikProvider>
                        </div>
                        <div className=" max-w-[512px] w-full flex text-white flex-col gap-6 ">
                            <div className="  p-6 w-full bg-secondary-550 flex flex-col rounded-2xl gap-4 ">
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
                            </div>
                            <div className="  p-6 w-full bg-primary-550 flex flex-col rounded-2xl gap-4 ">
                                <CustomText type="headline-sm">
                                    Connect with us
                                </CustomText>
                                <div className=" w-full grid lg:grid-cols-2 gap-4 ">
                                    {SOCIAL_LINK.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="  bg-primary-500 w-full h-[60px] flex gap-4 items-center rounded-lg px-4 "
                                            >
                                                <item.icon size={24} />
                                                <CustomText type="body-lg">
                                                    {item?.label}
                                                </CustomText>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LandingLayout>
        </section>
    );
}
