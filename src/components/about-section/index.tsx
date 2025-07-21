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
        description: string;
    }>;

    const education = t.raw('education') as {
        degree: string;
        institution: string;
        location: string;
        type: string;
        period: string;
    };

    const languages = t.raw('languages') as string[];

    return (
        <section id="about" className="px-6 md:px-40 py-20">
            <h2 className="text-4xl font-bold mb-6">{t('title')}</h2>
            <p className="text-muted-foreground max-w-2xl mb-12">{t('description')}</p>

            {/* EXPERIÊNCIA */}
            <h3 className="text-3xl font-bold mb-6">{t('experienceTitle')}</h3>
            <div className="space-y-8">
                {experience.map((job, i) => (
                    <div key={i} className="border-b border-gray-700 pb-4">
                        <h4 className="text-lg font-medium">{job.role}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {job.company}
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-2 text-sm">
                            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
                                {job.type}
                            </span>
                            <span>{job.period}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-2">{job.description}</p>
                    </div>
                ))}
            </div>

            {/* EDUCAÇÃO */}
            <h3 className="text-3xl font-bold mt-12 mb-6">{t('educationTitle')}</h3>
            <div className="border-b border-gray-700 pb-4">
                <h4 className="text-lg font-medium">{education.degree}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {education.institution}
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {education.location}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
                        {education.type}
                    </span>
                    <span>{education.period}</span>
                </div>
            </div>

            {/* IDIOMAS */}
            <h3 className="text-3xl font-bold mt-12 mb-6">{t('languagesTitle')}</h3>
            <ul className="list-disc ml-6 text-muted-foreground">
                {languages.map((lang, i) => (
                    <li key={i}>{lang}</li>
                ))}
            </ul>
        </section>
    );
}
