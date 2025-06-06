// src/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center px-6 text-center py-20 md:py-32"
        >
            {/* Avatar com borda gradiente */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 mb-8 rounded-full p-[2px] bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd">
                <Image
                    src="/me.jpeg"
                    alt="Murilo Henrique"
                    width={190}
                    height={190}
                    className="rounded-full shadow-lg mx-auto"
                    priority
                />
            </div>

            <h1 className="text-[1.875rem] leading-tight md:text-[2.5rem] font-bold">
                Olá 👋, Eu sou <span className="text-gradient bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd text-transparent bg-clip-text">Murilo Henrique</span><br />
                Eu crio aplicativos web escaláveis e de alto desempenho.
            </h1>
        </section>
    );
}
