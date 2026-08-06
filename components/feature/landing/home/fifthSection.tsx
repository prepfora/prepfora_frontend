import { LandingLayout } from "@/components/layouts";
import { CustomButton, CustomText } from "@/components/ui";

export default function FifthSection() {
    return (
        <section className=" w-full bg-primary-300 text-white flex flex-col ">
            <LandingLayout>
                <div className=" flex flex-col gap-12 py-10 lg:py-20 text-center items-center ">
                    <div className=" flex flex-col items-center gap-2 ">
                        <CustomText type="display-md">
                            Ready to Reach Your Target Score?
                        </CustomText>
                        <CustomText type="title-md" className=" max-w-[390px] ">
                            Prepare smarter, practice consistently, and walk
                            into your exam with confidence.
                        </CustomText>
                    </div>
                    <CustomButton variant="secondary-btn" >Join Waitlist</CustomButton>
                </div>
            </LandingLayout>
        </section>
    );
}
