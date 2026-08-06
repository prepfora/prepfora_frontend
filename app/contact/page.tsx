import { CommonQuestion, ContactHeroSection, Footer } from "@/components";


export default function Contact() {
    return(
        <section className="flex flex-col items-center justify-center ">
            <ContactHeroSection />
            <CommonQuestion />
            <Footer />
        </section>
    )
}