import { CoinIcon, FlameIcon, StarIcon } from "@/components";
import { RecentActivities, SubjectPerformance } from "@/components/feature";
import { CustomText } from "@/components/ui";

export default function DashboardHome() {

    const info = [
        {
            name: "Best Score",
            value: "300",
            unit: "/400",
            body: "You have not taken any exams yet",
            icon: <StarIcon />
        },
        {
            name: "Practice Streak",
            value: "0",
            unit: "days",
            body: "Personal Best: 0 days",
            icon: <FlameIcon />
        },
        {
            name: "PrepPoints",
            value: "0",
            unit: "points",
            body: "0 earned this week",
            icon: <CoinIcon />
        },
        {
            name: "Recently Earned Badges",
            value: "",
            unit: "",
            body: "0 earned this week"
        },
    ]

    return (
        <section className=" flex flex-1 flex-col gap-4 ">
            <CustomText type="title-lg" >Hello Jane 👋</CustomText>
            <div className=" flex gap-4 items-center h-full " >
                {
                    info.map((item, index) => {
                        return (
                            <div className=" flex w-full flex-col justify-between h-[150px] bg-[#FFFFFF75] p-4 rounded-2xl shadows text-neutral-500 " key={index}>
                                <CustomText type="body-lg-bold" > {item.name} </CustomText>
                                <div className=" flex items-end gap-2 " >
                                    {
                                        index === 3 ? (
                                            <div></div>
                                        ) : (
                                            <div className=" w-12 h-12 flex justify-center items-center " >
                                                {item.icon}
                                            </div>
                                        )
                                    }
                                    <div className=" flex flex-col gap-1 " >
                                        <CustomText type="headline-sm" > {item.value} </CustomText>
                                        <CustomText type="body-sm" > {item.unit} </CustomText>
                                    </div>
                                </div>
                                <CustomText type="body-sm" className=" " > {item.body} </CustomText>
                            </div>
                        )
                    })
                }
            </div>
            <div className=" w-full flex gap-8 ">
                <SubjectPerformance />
                <RecentActivities />
            </div>
        </section>
    );
}