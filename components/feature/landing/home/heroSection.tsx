import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomImage, CustomText } from "@/components/ui";

export default function HeroSection() {
    return (
        <section className=" w-full lg:h-[calc(100vh-100px)] flex flex-col pt-4 lg:pb-0 pb-4 relative bg-[#EAEFFA] ">
            <LandingLayout>
                <div className=" flex-1 relative z-20 flex flex-col items-center pt-10 ">
                    <div className=" max-w-[678px] text-center flex flex-col items-center gap-5 ">
                        <CustomText type="display-lg">
                            Ace JAMB, WAEC & More
                        </CustomText>
                        <CustomText type="body-lg" className=" max-w-[543px] ">
                            Prepare with{" "}
                            <span className=" font-bold ">
                                realistic CBT practice, full mock exams, smart
                                performance insights
                            </span>
                            , and <span className=" font-bold ">rewards</span>{" "}
                            that keep you motivated every step of the way.
                        </CustomText>
                        <CustomText type="body-md" className=" max-w-[344px] ">
                            Join the waitlist today and get{" "}
                            <span className=" font-bold ">1 month FREE</span>{" "}
                            subscription when we launch
                        </CustomText>
                        <div className=" lg:w-fit w-full flex gap-4 ">
                            <CustomButton
                                variant="primary-outline"
                                className=" w-full! lg:w-[150px] "
                            >
                                See how it works
                            </CustomButton>
                            <CustomButton
                                fullWidth
                                variant="primary"
                                className=" w-full! lg:w-[150px] "
                            >
                                Join Waitlist
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </LandingLayout>
            <div className=" absolute hidden lg:flex flex-1 justify-between inset-x-0 top-0 bottom-0 ">
                <div className=" w-full h-[93%] mt-auto flex items-start justify-start ">
                    <CustomImage
                        src="/images/landing/hero1.png"
                        alt="Hero1"
                        layout="height"
                    />
                </div>
                <div className=" w-full h-[120%] mt-10 flex items-end justify-end">
                    <CustomImage
                        src={"/images/landing/hero2.png"}
                        alt="hero2"
                        layout="height"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className=" w-full absolute bg-transparent bottom-0 inset-x-0 mt-auto hidden lg:flex ">
                <CustomImage
                    src="/images/landing/hero3.png"
                    alt="Hero3"
                    layout="width"
                />
            </div>
            <div className=" w-full lg:hidden relative -mb-10 flex flex-col ">
                <CustomImage
                    src={"/images/landing/heromobile.png"}
                    alt="heromobile"
                    layout="width"
                    objectFit="contain"
                />
                <div className=" w-full absolute bottom-5  ">
                    <CustomImage
                        src={"/images/landing/heromobile2.png"}
                        alt="heromobile"
                        layout="width"
                        objectFit="contain"
                    />
                </div>
            </div>
        </section>
    );
}
