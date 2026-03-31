'use client';
import { useTranslations } from 'next-intl';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function ContactSection() {
    const t = useTranslations('contact');

    return (
        <section id="contact" className="anchor-offset section-shell section-block text-center">
            <h2 className="section-title">{t('title')}</h2>
            <p className="section-subtitle mx-auto">
                {t('description')}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
                <a
                    href="mailto:murilo1258@hotmail.com"
                    className="surface-card surface-card-hover flex items-center gap-3 p-5 md:p-6"
                >
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{t('email')}</span>
                </a>
                <a
                    href="https://wa.me/5562981641037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card surface-card-hover flex items-center gap-3 p-5 md:p-6"
                >
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{t('whatsapp')}</span>
                </a>
                <a
                    href="https://linkedin.com/in/murilo-henrique-a8a747110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card surface-card-hover flex items-center gap-3 p-5 md:p-6"
                >
                    <Linkedin className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{t('linkedin')}</span>
                </a>
                <a
                    href="https://github.com/murilocarmo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card surface-card-hover flex items-center gap-3 p-5 md:p-6"
                >
                    <Github className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{t('github')}</span>
                </a>
            </div>
        </section>
    );
}
