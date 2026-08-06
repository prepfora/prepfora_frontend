import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText } from "@/components/ui";

export default function ThirdSection() {

    const list = [
        {
            title: "Others",
            body: [
                "Practice Random Questions",
                "Only show your score",
                "No motivation to stay consistent",
                "Limited progress tracking",
                "One-size-fits-all experience",
            ],
        },
        {
            title: "Prepfora",
            body: [
                "Practice with purpose",
                "Show exactly where to improve",
                "Earn PrepPoints and unlock badges",
                "Track your growth over time",
                "Personalized practice recommendations",
            ],
        },
    ];

    const exams = [
        {
            title: "JAMB",
            body: "Practice CBT questions, take mock exams, and track your progress."
        },
        {
            title: "WAEC",
            body: "Prepare across all your subjects with real exam questions."
        },
        {
            title: "NECO",
            body: "Build confidence with topic-based practice and full mock exams."
        },
        {
            title: "POST-UTME",
            body: "Practice under timed conditions and get ready for your admission."
        },
    ]

    return (
        <section className=" w-full bg-[#EAEFFA] flex flex-col ">
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <div className=" flex flex-col items-center gap-2 ">
                        <CustomText type="display-md">
                            Why Students Choose Prepfora
                        </CustomText>
                        <CustomText type="title-md" className=" max-w-[642px] ">
                            Preparing for exams isn't just about answering more
                            questions. It's about knowing what to practice,
                            seeing your progress, and staying motivated until
                            exam day.
                        </CustomText>
                    </div>
                    <div className=" flex lg:flex-row flex-col w-full gap-4">
                        {list.map((item, index) => {
                            return (
                                <div
                                    key={item?.title}
                                    className={` ${index === 0 ? " bg-white " : " bg-primary-300 text-white "} w-full p-10 rounded-xl text-left flex gap-6 flex-col `}
                                >
                                    <CustomText type="title-lg">
                                        {item?.title}
                                    </CustomText>
                                    <ul className=" list-disc space-y-3 ">
                                        {item?.body.map((subtitle) => (
                                            <li key={subtitle}>
                                                <CustomText type="body-md">
                                                    {subtitle}
                                                </CustomText>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </LandingLayout>
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <div className=" flex flex-col items-center gap-4 ">
                        <CustomText type="display-md">
                            Prepare for Every Major Nigerian Exam
                        </CustomText>
                        <CustomText type="title-md" className=" max-w-[606px] ">
                            Whether you're preparing for JAMB, WAEC, NECO, GCE
                            or Post-UTME, Prepfora gives you the practice and
                            confidence you need to perform at your best.
                        </CustomText>
                        <CustomButton variant="primary-outline">
                            Join Waitlist
                        </CustomButton>
                    </div>
                    <div className=" grid grid-cols-2 lg:grid-cols-4 w-full gap-4">
                        {exams.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={` w-full p-4 rounded-xl border border-secondary-400 text-left flex gap-3 flex-col `}
                                >
                                    <div className=" w-14 h-14 border rounded-2xl " >

                                    </div>
                                    <CustomText type="body-lg" >{item?.title}</CustomText>
                                    <CustomText type="body-md" >{item?.body}</CustomText>
                                </div>
                            );
                        })}
                    </div>
                    <div className=" w-full h-[402px] bg-secondary-150 rounded-2xl " >

                    </div>
                </div>
            </LandingLayout>
        </section>
    );
}
