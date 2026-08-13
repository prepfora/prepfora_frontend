import { Footer } from "@/components/common";
import { WorkHeroSection, WorkSecondSection, WorkThirdSection } from "@/components/feature";

export default function AboutPage() {
    return (
        <section className="flex flex-col items-center justify-center ">
            <WorkHeroSection />
            <WorkSecondSection />
            <WorkThirdSection />
            <Footer />
        </section>
    );
}
