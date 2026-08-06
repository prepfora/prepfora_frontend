import { LandingLayout } from "@/components/layouts";
import { CustomText } from "@/components/ui";

export default function SecondSection() {
    const list = [
        {
            title: "Know Exactly What to Practice",
            body: "Prepfora identifies your weak topics and recommends where to focus next, helping you study smarter.",
        },
        {
            title: "Practice Like It's the Real Exam",
            body: "Get comfortable with the same CBT experience you'll face on exam day, so there are no surprises.",
        },
        {
            title: "Track your Readiness",
            body: "Track your scores, monitor your progress, and celebrate every milestone as you get closer to your goal.",
        },
        {
            title: "Stay Motivated with Rewards",
            body: "Complete practice sessions, stay consistent, unlock badges, and earn PrepPoints you can redeem for exciting rewards.",
        },
    ];

    return (
        <section className=" w-full relative z-20 bg-secondary-450 text-white  ">
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <div className=" flex flex-col items-center gap-2 ">
                        <CustomText type="display-md">
                            Everything You Need to Score Higher
                        </CustomText>
                        <CustomText type="title-md" className=" max-w-[480px] ">
                            Everything you need to prepare smarter, improve
                            faster, and walk into your exam with confidence.
                        </CustomText>
                    </div>
                    <div className=" w-full grid lg:grid-cols-2 gap-2 ">
                        {list.map((item) => {
                            return (
                                <div
                                    key={item?.title}
                                    className=" w-full border-white bg-[#4DC49733] rounded-2xl lg:h-[450px] flex flex-col px-6 py-6 lg:py-0 lg:px-10 justify-center border "
                                >
                                    <div className=" w-16 h-16 bg-white rounded-lg "></div>
                                    <div className=" mt-6 space-y-2 text-left ">
                                        <CustomText
                                            className=" max-w-[369px] "
                                            type="display-sm"
                                        >
                                            {item?.title}
                                        </CustomText>
                                        <CustomText
                                            className=" max-w-[418px] "
                                            type="body-lg"
                                        >
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
