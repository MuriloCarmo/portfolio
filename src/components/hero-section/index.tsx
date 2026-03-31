import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
    const t = useTranslations('hero');

    return (
        <section id="hero" className="anchor-offset section-shell section-block pt-36 md:pt-44">
            <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
                <div className="text-center md:text-left">
                    <h1 className="font-display text-4xl font-semibold tracking-tight leading-[1.06] sm:text-5xl lg:text-[56px] max-w-[18ch]">
                        {t("greeting")} 👋, {t("intro")} Murilo Henrique.
                        <span className="mt-3 block text-white/90">{t("description")}</span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-[56ch] text-base leading-relaxed text-muted md:mx-0 md:text-lg">
                        {t('experience')}
                    </p>

                    <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                        <a href="#projects" className="button-primary w-full sm:w-auto">
                            {t('projectsCta')}
                        </a>
                        <a
                            href="https://wa.me/5562981641037"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-secondary w-full gap-2 sm:w-auto"
                        >
                            <Image
                                src="/ui/whatsapp.svg"
                                alt="WhatsApp"
                                width={18}
                                height={18}
                            />
                            {t('cta')}
                        </a>
                    </div>
                </div>

                <div className="order-first md:order-last">
                    <div className="surface-card mx-auto h-56 w-56 overflow-hidden rounded-[2rem] p-2 md:h-72 md:w-72">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                            <Image
                                src="/me.jpeg"
                                alt="Murilo Henrique"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
