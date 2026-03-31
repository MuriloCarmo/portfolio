'use client';

import { Briefcase, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
    const t = useTranslations('about');

    const experience = t.raw('experience') as Array<{
        role: string;
        company: string;
        location: string;
        type: string;
        period: string;
        bullets: string[];
    }>;

    const education = t.raw('education') as {
        degree: string;
        institution: string;
        location: string;
        type: string;
        period: string;
    };

    const languages = t.raw('languages') as string[];
    const highlights = t.raw('highlights') as string[];

    return (
        <section id="about" className="anchor-offset section-shell section-block">
            <h2 className="section-title">{t('title')}</h2>

            <div className="surface-card mt-8 p-5 md:p-6">
                <p className="max-w-3xl text-base leading-7 text-muted">{t('description')}</p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-6 text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <h3 className="mt-14 text-2xl font-semibold tracking-tight md:text-3xl">{t('experienceTitle')}</h3>
            <div className="mt-7 space-y-5 border-l border-border pl-6">
                {experience.map((job, i) => (
                    <article key={i} className="surface-card relative p-5 md:p-6">
                        <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                        <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h4 className="text-lg font-semibold leading-snug text-foreground">{job.role}</h4>
                                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
                                    <span className="flex items-center gap-1.5">
                                        <Briefcase className="h-4 w-4" />
                                        {job.company}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" />
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                            <span className="pill w-fit">{job.type}</span>
                        </header>
                        <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted">{job.period}</p>
                        <ul className="mt-3 space-y-2">
                            {job.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="flex items-start gap-2 text-sm leading-6 text-muted">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            <h3 className="mt-14 text-2xl font-semibold tracking-tight md:text-3xl">{t('educationTitle')}</h3>
            <article className="surface-card mt-7 p-5 md:p-6">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h4 className="text-lg font-semibold leading-snug text-foreground">{education.degree}</h4>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
                            <span className="flex items-center gap-1.5">
                                <Briefcase className="h-4 w-4" />
                                {education.institution}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                {education.location}
                            </span>
                        </div>
                    </div>
                    <span className="pill w-fit">{education.type}</span>
                </header>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted">{education.period}</p>
            </article>

            <h3 className="mt-14 text-2xl font-semibold tracking-tight md:text-3xl">{t('languagesTitle')}</h3>
            <div className="surface-card mt-7 p-5 md:p-6">
                <ul className="grid gap-3 text-sm leading-6 text-muted md:grid-cols-2">
                    {languages.map((lang, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{lang}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
