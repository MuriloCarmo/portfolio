import HeroSection from "@/components/hero-section";
import Navbar from "../components/navigation";
import TechStack from "@/components/tech-stack-section";
import FeaturedProjectsSection from "@/components/featured-project-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import { GetStaticPropsContext } from "next";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="app-shell flex min-h-screen flex-col">
                <HeroSection />
                <AboutSection />
                <TechStack />
                <FeaturedProjectsSection />
                <ContactSection />
            </main>
        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    const messages = await import(`../../public/locales/${locale}/index.json`);
    return {
        props: {
            messages: messages.default,
        },
    };
}
