import { Footer } from "@/components/common";
import { CommonQuestion, ContactHeroSection } from "@/components/feature";


export default function Contact() {
    return(
        <section className="flex flex-col items-center justify-center ">
            <ContactHeroSection />
            <CommonQuestion />
            <Footer />
        </section>
    )
}