import { Footer } from "@/components/common";
import { FAQ, FifthSection, ForthSection, HeroSection, SecondSection, ThirdSection } from "@/components/feature";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center ">
            <HeroSection />
            <SecondSection />
            <ThirdSection />
            <ForthSection />
            <FAQ />
            <FifthSection />
            <Footer />
        </section>
    );
}
