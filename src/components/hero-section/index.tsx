import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-20 md:py-32 gap-10"
        >
            {/* Texto à esquerda */}
            <div className="text-center md:text-left max-w-xl md:max-w-2xl w-full">
                <h1 className="text-[1.875rem] leading-tight md:text-[2.5rem] font-bold">
                    Olá 👋, eu sou{" "}
                    <span className="text-gradient bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd text-transparent bg-clip-text">
                        Murilo Henrique
                    </span>
                    <br />
                    Desenvolvedor web que transforma ideias em sites rápidos, modernos e funcionais.
                </h1>

                {/* Avatar para mobile centralizado */}
                <div className="md:hidden my-10">
                    <div className="relative w-36 h-36 mx-auto rounded-full p-[2px] bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd">
                        <Image
                            src="/me.jpeg"
                            alt="Murilo Henrique"
                            width={190}
                            height={190}
                            className="rounded-full shadow-lg object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>

                <p className="text-gray-400 text-base md:text-lg">
                    Com mais de 8 anos de experiência, ajudo empresas e profissionais a lançarem
                    seus projetos com qualidade, performance e design moderno.
                </p>

                <div className="mt-8 flex justify-center md:justify-start">
                    <a
                        href="https://wa.me/5562981641037"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd text-white font-medium py-3 px-6 rounded-md transition hover:brightness-110"
                    >
                        <Image
                            src="/ui/whatsapp.svg"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                        />
                        Fale comigo no WhatsApp
                    </a>
                </div>
            </div>


            <div className="hidden md:block relative w-36 h-36 md:w-52 md:h-52 shrink-0 rounded-full p-[3px] bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src="/me.jpeg"
                        alt="Murilo Henrique"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
