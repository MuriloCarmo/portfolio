'use client';
import { useTranslations } from 'next-intl';

export default function TechStack() {
    const t = useTranslations('techstack');
    const groups = t.raw('groups') as Array<{
        title: string;
        items: string[];
    }>;

    return (
        <section id="techstack" className="anchor-offset section-shell section-block text-center">
            <h2 className="section-title">{t('title')}</h2>
            <p className="section-subtitle mx-auto">{t('description')}</p>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
                {groups.map((group) => (
                    <article key={group.title} className="surface-card p-5 md:p-6">
                        <h3 className="text-base font-semibold tracking-tight text-foreground">{group.title}</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span key={item} className="pill">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
