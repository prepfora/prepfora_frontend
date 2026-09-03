import { CustomText } from "@/components/ui"


export default function SubjectPerformance() {

    const data = [
        {
            name: "English Language",
            percent: "60%",
            focus: "40Focus on: Calculus & Geometry",
        },
        {
            name: "Mathematics",
            percent: "0%",
            focus: "40Focus on: Calculus & Geometry",
        },
        {
            name: "Biology",
            percent: "90%",
            focus: "40Focus on: Calculus & Geometry",
        },
        {
            name: "Physics",
            percent: "35%",
            focus: "40Focus on: Calculus & Geometry",
        },
    ]

    return (
        <section className=" flex-1 flex flex-col text-neutral-500 gap-6 " >
            <div className=" w-full flex justify-between items-center " >
                <CustomText type="headline-sm" >Subject Performance</CustomText>
                <button>
                    <CustomText type="body-sm-bold" >View All</CustomText>
                </button>
            </div>
            <div className=" flex-1 grid grid-cols-2 w-full rounded-2xl gap-4 " >
                {data.map((item, index) => (
                    <div key={index} className=" flex flex-col gap-2 p-4 bg-white border border-primary-150 rounded-2xl " >
                        <div className=" flex justify-between items-center " >
                            <CustomText type="body-sm-bold" >{item.name}</CustomText>
                            <CustomText type="body-sm-bold" >{item.percent}</CustomText>
                        </div>
                        <div className=" w-full h-2 bg-neutral-150 rounded-full " >
                            <div style={{ width: `${item.percent}` }} className=" h-full bg-primary-500 rounded-full " />
                        </div>
                        <div className=" flex justify-between items-center " >
                            <CustomText type="body-sm" >{item.focus}</CustomText>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}