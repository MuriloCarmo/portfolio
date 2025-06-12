'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { GithubIcon } from '@/components/svg-components/GithubIcon';
import { LinkedinIcon } from '@/components/svg-components/LinkedinIcon';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('hero');

    const navigation = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'Sobre', href: '#about', id: 'about' },
        { name: 'Tecnologias', href: '#techstack', id: 'techstack' },
        { name: 'Projetos', href: '#projects', id: 'projects' },
        { name: 'Contato', href: '#contact', id: 'contact' },
    ];

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
    }, []);

    return (
        <header className="fixed w-full z-50 bg-dark-background text-dark-foreground shadow-md px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
                <div className="text-xl font-bold bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd text-transparent bg-clip-text">
                    {'Murilo Carmo'}
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center space-x-10">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-[1.05rem] font-medium transition ${
                                activeSection === item.id
                                    ? 'text-primary'
                                    : 'hover:text-primary'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Social icons */}
                <div className="hidden md:flex space-x-4">
                    <a href="https://github.com/murilocarmo" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-8 h-8 hover:text-primary transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/murilo-henrique-a8a747110/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="w-8 h-8 hover:text-primary transition" />
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden" onClick={() => setIsOpen(true)}>
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setIsOpen(false)} />
                    <div className="fixed top-0 right-0 h-full w-full bg-dark-background text-dark-foreground z-50 shadow-lg flex flex-col">
                        <div className="flex justify-between items-center px-6 py-6 border-b border-dark-foreground/20">
                            <div className="text-xl font-bold bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd text-transparent bg-clip-text">
                                {'Murilo Carmo'}
                            </div>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="flex flex-col px-6 pt-6 space-y-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg border-b border-dark-foreground/10 pb-2 min-h-[50px] flex items-center transition ${
                                        activeSection === item.id ? 'text-primary' : 'hover:text-primary'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-12 px-6 pb-6 space-y-4">
                            <a
                                href="https://wa.me/5562981641037"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd text-white font-medium py-3 rounded-md transition hover:brightness-110"
                            >
                                <Image src="/ui/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                                Fale comigo no WhatsApp
                            </a>

                            <div className="flex justify-center space-x-4 pt-2">
                                <a href="https://github.com/murilocarmo" target="_blank" rel="noopener noreferrer">
                                    <Image src="/ui/github.svg" alt="GitHub" width={24} height={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/murilo-henrique-a8a747110/" target="_blank" rel="noopener noreferrer">
                                    <Image src="/ui/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
