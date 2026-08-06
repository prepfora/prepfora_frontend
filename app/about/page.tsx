import { Footer, WorkHeroSection, WorkSecondSection, WorkThirdSection } from "@/components";

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
