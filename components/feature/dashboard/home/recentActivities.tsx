import { CustomText } from "@/components/ui";

export default function RecentActivities() {

    const data = [
        {
            name: "Earned 500 PrepPoints",
            body: "Completed Physics Mock Exam with 82% score.",
            time: "2h ago"
        },
        {
            name: "Earned 500 PrepPoints",
            body: "Completed Physics Mock Exam with 82% score.",
            time: "2h ago"
        },
        {
            name: "Earned 500 PrepPoints",
            body: "Completed Physics Mock Exam with 82% score.",
            time: "2h ago"
        },
    ]

    return (
        <section className=" flex-1 flex flex-col text-neutral-500 gap-6 " >
            <div className=" w-full flex justify-between items-center " >
                <CustomText type="headline-sm" >Recent Activities</CustomText>
            </div>
            <div className=" flex w-full gap-6 flex-col p-6 rounded-2xl bg-white " >
                {data.map((item, index) => (
                    <div key={index} className=" flex w-full text-neutral-500 gap-2 flex-col " >
                        <div className=" flex w-full justify-between " >
                            <CustomText type="body-lg-bold" >{item.name}</CustomText>
                            <CustomText type="body-sm" className=" text-neutral-300 " >{item.time}</CustomText>
                        </div>
                        <CustomText type="body-sm" >{item.body}</CustomText>
                    </div>
                ))}
            </div>
        </section>
    )
} 