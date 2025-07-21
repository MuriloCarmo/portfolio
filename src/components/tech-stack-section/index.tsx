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
        <section
            id="techstack"
            className="pb-20 px-6 text-center md:flex md:flex-col md:justify-center"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('title')}</h2>
            <p className="text-muted-foreground mb-10">{t('description')}</p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-8 justify-items-center">
                {techs.map((tech) => (
                    <div key={tech.name} title={tech.name} className="w-16 h-16 md:w-20 md:h-20">
                        <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={80}
                            height={80}
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
