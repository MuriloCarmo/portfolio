import HeroSection from "@/components/hero-section";
import Navbar from "../components/navigation";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center min-h-screen bg-dark-background text-dark-foreground">
                <HeroSection/>
            </main>
        </>
    );
}
