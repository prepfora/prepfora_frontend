import { LandingLayout } from "@/components/layouts";
import { CustomImage, CustomText } from "@/components/ui";

export default function SecondSection() {
    const list = [
        {
            title: "Choose the Exam You're Preparing For",
            body: "Start by selecting the exam you're taking, JAMB, WAEC, NECO, or Post-UTME. If you're preparing for more than one, you can choose them all.",
            image: "/images/works/work1.png",
        },
        {
            title: "Set Your Goals",
            body: "Tell Prepfora what you're working towards. Whether it's scoring 300+ in JAMB or earning distinctions in WAEC, we'll personalize your practice experience around your goals.",
            image: "/images/works/work2.png",
        },
        {
            title: "Practice with Real Exam Questions",
            body: "Choose an exam year and answer authentic questions in a realistic CBT environment that mirrors the real exam experience.",
            image: "/images/works/work3.png",
        },
        {
            title: "Understand Your Performance",
            body: "The moment you finish, Prepfora breaks down your results. See your score, identify weak topics, and get AI-powered insights into where you should focus next.",
            image: "/images/works/work4.png",
        },
        {
            title: "Improve and Earn Rewards",
            body: "Every practice session earns you PrepPoints. Stay consistent, unlock badges, and use your Prep Credits to keep practicing.",
            image: "/images/works/work5.png",
        },
    ];

    return (
        <section className=" w-full relative z-20 bg-primary-300 text-white  ">
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <div className=" flex flex-col items-center gap-2 ">
                        <CustomText type="display-md">
                            Your step by step journey to success
                        </CustomText>
                    </div>
                    <div className=" flex gap-16 ">
                        <div className=" hidden lg:flex flex-col items-center ">
                            <div className=" h-35 " />
                            <div className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 ">
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 1
                                </CustomText>
                            </div>
                            <div className=" h-54 w-1 bg-primary-550 " />
                            <div className=" h-54 w-1 bg-primary-550 " />
                            <div className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 ">
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 2
                                </CustomText>
                            </div>
                            <div className=" h-54 w-1 bg-primary-550 " />
                            <div className=" h-54 w-1 bg-primary-550 " />
                            <div className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 ">
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 3
                                </CustomText>
                            </div>
                            <div className=" h-51 w-1 bg-primary-550 " />
                            <div className=" h-51 w-1 bg-primary-550 " />
                            <div className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 ">
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 4
                                </CustomText>
                            </div>
                            <div className=" h-54 w-1 bg-primary-550 " />
                            <div className=" h-54 w-1 bg-primary-550 " />
                            <div className=" w-[71px] h-[48px] rounded-lg flex justify-center items-center bg-primary-50 ">
                                <CustomText
                                    type="body-lg"
                                    className=" text-primary-550 "
                                >
                                    Step 5
                                </CustomText>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col lg:gap-8 ">
                            {list?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" w-full lg:h-[440px] flex lg:flex-row flex-col items-center justify-between lg:pb-0 pb-6 gap-6 "
                                    >
                                        <div className=" max-w-[447px] text-left flex flex-col gap-2 ">
                                            <CustomText type="display-sm">
                                                {item?.title}
                                            </CustomText>
                                            <CustomText type="body-lg">
                                                {item?.body}
                                            </CustomText>
                                        </div>
                                        <div className=" w-full max-w-[567px] rounded-2xl ">
                                            <CustomImage
                                                src={item?.image}
                                                alt={item?.title}
                                                layout="width"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </LandingLayout>
        </section>
    );
}
