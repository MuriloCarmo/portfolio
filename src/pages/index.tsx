import HeroSection from "@/components/hero-section";
import Navbar from "../components/navigation";
import TechStack from "@/components/tech-stack-section";
import FeaturedProjectsSection from "@/components/featured-project-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="flex flex-col bg-dark-background text-dark-foreground">
                <HeroSection/>
                <AboutSection />
                <TechStack/>
                <FeaturedProjectsSection/>
                <ContactSection />
            </main>
        </>
    );
}
