import { LandingLayout } from "@/components/layouts";
import { CustomImage, CustomText } from "@/components/ui";

export default function ForthSection() {
    const list = [
        {
            title: "Choose your exam",
            body: "Select the exam you're preparing for, such as JAMB, WAEC, NECO, or Post-UTME.",
        },
        {
            title: "Practice Real Exam Questions",
            body: "Answer realistic CBT questions, challenge yourself with mock exams, and practice at your own pace.",
        },
        {
            title: "See Where You Stand",
            body: "After every session, Prepfora shows your score, highlights weak topics, and recommends what to practice next.",
        },
        {
            title: "Earn Rewards as You Go",
            body: "Complete practice sessions, maintain streaks, unlock badges, and earn PrepPoints that you can redeem for rewards.",
        },
    ];

    return (
        <section className=" w-full bg-primary-550 text-white flex flex-col ">
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <div className=" flex flex-col items-center gap-2 ">
                        <CustomText type="display-md">
                            Practice More. Earn More.
                        </CustomText>
                        <CustomText type="title-md" className=" max-w-[511px] ">
                            Every practice session brings you closer to your
                            exam goals, and rewards you for staying consistent.
                        </CustomText>
                    </div>
                    <div className=" lg:max-w-[952px] text-left w-full flex lg:flex-row flex-col items-center gap-4 lg:gap-8 ">
                        <div className=" w-full flex flex-col gap-4 lg:gap-8 ">
                            <div className=" w-full h-[256px] rounded-[26px] bg-[#2563EB33] px-6 gap-6 flex flex-col justify-center ">
                                <div className=" flex flex-col gap-2 ">
                                    <CustomText type="headline-sm">
                                        Earn PrepPoints
                                    </CustomText>
                                    <CustomText type="body-lg">
                                        Complete practice sessions, mock exams,
                                        and study goals to earn PrepPoints
                                    </CustomText>
                                </div>
                                <div className=" w-20 h-auto ">
                                    <CustomImage
                                        src={"/images/landing/Capa_1.png"}
                                        alt="Hero1"
                                        layout="width" 
                                    />
                                </div>
                            </div>
                            <div className=" w-full h-[256px] rounded-[26px] bg-[#2563EB33] px-6 gap-6 flex flex-col justify-center ">
                                <div className=" flex flex-col gap-2 ">
                                    <CustomText type="headline-sm">
                                        Unlock Badges
                                    </CustomText>
                                    <CustomText type="body-lg">
                                        Celebrate milestones, streaks and
                                        achievements as you prepare.
                                    </CustomText>
                                </div>
                                <div className=" w-20 h-auto ">
                                    <CustomImage
                                        src={"/images/landing/Layer_1.png"}
                                        alt="Hero1"
                                        layout="width" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-[256px] lg:h-[443px] rounded-[26px] bg-[#2563EB33] px-6 gap-6 flex flex-col justify-center ">
                            <div className=" flex flex-col gap-2 ">
                                <CustomText type="headline-sm">
                                    Redeem Rewards
                                </CustomText>
                                <CustomText type="body-lg">
                                    Exchange your PrepPoints for exciting
                                    rewards and credits
                                </CustomText>
                            </div>
                            <div className=" w-20 lg:w-63.5 h-auto ">
                                <CustomImage
                                    src={"/images/landing/Page-1.png"}
                                    alt="Hero1"
                                    layout="width" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LandingLayout>
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <div className=" flex flex-col items-center gap-2 ">
                        <CustomText type="display-md">
                            Getting Started Is Easy
                        </CustomText>
                        <CustomText type="title-md" className=" max-w-[520px] ">
                            From your first practice session to exam day,
                            Prepfora helps you stay focused, improve your
                            scores, and prepare with confidence.
                        </CustomText>
                    </div>
                    <div className=" w-full grid lg:grid-cols-4 text-left gap-6 ">
                        {list.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" w-full flex flex-col gap-4 "
                                >
                                    <div className=" w-[67px] h-[48px] rounded-lg bg-primary-300 text-white flex justify-center items-center ">
                                        <CustomText type="body-lg">
                                            Step {index + 1}
                                        </CustomText>
                                    </div>
                                    <div className=" flex flex-col gap-2 ">
                                        <CustomText
                                            type="headline-sm"
                                            className=" lg:h-[63px] "
                                        >
                                            {item?.title}
                                        </CustomText>
                                        <CustomText type="body-lg">
                                            {item?.body}
                                        </CustomText>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </LandingLayout>
        </section>
    );
}
