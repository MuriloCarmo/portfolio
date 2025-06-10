import HeroSection from "@/components/hero-section";
import Navbar from "../components/navigation";
import TechStack from "@/components/tech-stack-section";
import ProjectsSection from "@/components/project-section";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col bg-dark-background text-dark-foreground">
                <HeroSection />
                <TechStack />
                <ProjectsSection />
            </main>
        </>
    );
}
