import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText } from "@/components/ui";

export default function WorkThirdSection() {
    return (
        <section className=" w-full relative z-20 bg-white py-10 lg:py-20  text-neutral-500  ">
            <LandingLayout>
                <div className=" flex flex-col gap-12 lg:h-[461px] w-full py-10 px-5 rounded-2xl bg-secondary-350 text-center justify-center items-center ">
                    <div className=" flex flex-col gap-2 ">
                        <CustomText
                            type="display-md"
                            className=" max-w-[900px] "
                        >
                            Every Great Result Starts with One Practice Session.
                        </CustomText>
                        <CustomText
                            type="body-lg"
                            className=" max-w-[948px] "
                        >
                            Create your free account and start preparing today.
                        </CustomText>
                    </div>
                    <CustomButton>Start Practicing Now</CustomButton>
                </div>
            </LandingLayout>
        </section>
    );
}
