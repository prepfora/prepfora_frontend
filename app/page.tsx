import { FAQ, FifthSection, Footer, ForthSection, HeroSection, SecondSection, ThirdSection } from "@/components";

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
