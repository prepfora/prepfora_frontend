import { LandingLayout } from "@/components/layouts";
import { CustomImage, CustomText } from "@/components/ui";

export default function WorkHeroSection() {
    return (
        <section className=" w-full lg:h-auto flex flex-col pt-4 lg:pb-0 pb-4 relative bg-[#EAEFFA] ">
            <LandingLayout>
                <div className=" flex-1 relative z-20 flex flex-col gap-8 items-center justify-center text-center py-10 ">
                    <div className=" w-full flex items-center flex-col gap-1 ">
                        <CustomText
                            type="display-lg"
                            className=" max-w-[734px] "
                        >
                            Here's How Prepfora Helps You Succeed
                        </CustomText>
                        <CustomText type="body-lg" className=" max-w-[598px] ">
                            From choosing your exam to understanding your
                            results, every step is designed to help you prepare
                            smarter and score higher.
                        </CustomText>
                    </div>
                    <div className=" w-full max-w-[1084px] ">
                        <CustomImage
                            src="/images/works/work.png"
                            alt="work"
                            layout="width"
                        />
                    </div>
                </div>
            </LandingLayout>
        </section>
    );
}
