'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const techs = [
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    { name: 'Sass', icon: '/icons/sass.svg' },
    { name: 'NestJS', icon: '/icons/nest.svg' },
    { name: 'Node.js', icon: '/icons/node.svg' },
    { name: 'Prisma', icon: '/icons/prisma.svg' },
    { name: 'Sanity', icon: '/icons/sanity.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Vercel', icon: '/icons/vercel.svg' },
];

export default function TechStack() {
    const t = useTranslations('techstack');

    return (
        <section id="techstack" className="anchor-offset section-shell section-block text-center">
            <h2 className="section-title">{t('title')}</h2>
            <p className="section-subtitle mx-auto">{t('description')}</p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {techs.map((tech) => (
                    <div
                        key={tech.name}
                        title={tech.name}
                        className="flex items-center justify-center gap-2 rounded-full border border-border bg-panel px-3 py-2"
                    >
                        <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={18}
                            height={18}
                            className="h-[18px] w-[18px] object-contain"
                        />
                        <span className="text-xs font-medium text-muted">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
