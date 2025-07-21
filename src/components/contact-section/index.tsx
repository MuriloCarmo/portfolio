'use client';
import { useTranslations } from 'next-intl';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function ContactSection() {
    const t = useTranslations('contact');

    return (
        <section
            id="contact"
            className="px-6 md:px-[10rem] py-20 bg-dark-background text-white text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12">
                {t('description')}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
                <a
                    href="mailto:murilo1258@hotmail.com"
                    className="flex items-center gap-2 hover:underline"
                >
                    <Mail className="w-5 h-5" /> {t('email')}
                </a>
                <a
                    href="https://wa.me/5562981641037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                >
                    <Phone className="w-5 h-5" /> {t('whatsapp')}
                </a>
                <a
                    href="https://linkedin.com/in/murilo-henrique-a8a747110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                >
                    <Linkedin className="w-5 h-5" /> {t('linkedin')}
                </a>
                <a
                    href="https://github.com/murilocarmo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                >
                    <Github className="w-5 h-5" /> {t('github')}
                </a>
            </div>
        </section>
    );
}
