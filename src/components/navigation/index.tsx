'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from '@/components/svg-components/GithubIcon';
import { LinkedinIcon } from '@/components/svg-components/LinkedinIcon';
import LanguageSwitcher from "@/components/language-switcher";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('hero');
    const t = useTranslations('navbar');

    const navigation = useMemo(
        () => [
            { name: t('home'), href: '#hero', id: 'hero' },
            { name: t('about'), href: '#about', id: 'about' },
            { name: t('techstack'), href: '#techstack', id: 'techstack' },
            { name: t('projects'), href: '#projects', id: 'projects' },
            { name: t('contact'), href: '#contact', id: 'contact' },
        ],
        [t]
    );

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 120;
            for (const section of navigation) {
                const el = document.getElementById(section.id);
                if (el) {
                    const { offsetTop, offsetHeight } = el;
                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigation]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
            <div className="section-shell flex h-20 items-center justify-between">
                <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-foreground">
                    Murilo Carmo
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`text-sm font-medium transition ${
                                activeSection === item.id ? 'text-accent' : 'text-muted hover:text-foreground'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-4 md:flex">
                    <a href="https://github.com/murilocarmo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon className="h-5 w-5 text-muted transition hover:text-accent" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/murilo-henrique-a8a747110/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon className="h-5 w-5 text-muted transition hover:text-accent" />
                    </a>
                    <LanguageSwitcher />
                </div>

                <button
                    className="inline-flex items-center justify-center rounded-lg border border-border bg-panel p-2 text-foreground md:hidden"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={20} />
                </button>
            </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/65" onClick={() => setIsOpen(false)} />
                    <div className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col border-l border-border bg-background p-6 shadow-soft-lg">
                        <div className="mb-8 flex items-center justify-between border-b border-border pb-5">
                            <span className="font-display text-lg font-semibold tracking-tight">Murilo Carmo</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg border border-border bg-panel p-2"
                                aria-label="Close menu"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                                        activeSection === item.id
                                            ? 'bg-panelRaised text-accent'
                                            : 'text-muted hover:bg-panel hover:text-foreground'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        <a
                            href="https://wa.me/5562981641037"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-primary mt-8 w-full gap-2"
                        >
                            <Image src="/ui/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
                            {t('whatsapp')}
                        </a>

                        <div className="mt-5 flex justify-center">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
