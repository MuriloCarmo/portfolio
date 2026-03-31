import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { projects as projectData } from '@/data/project-data';

export default function FeaturedProjectsSection() {
    const t = useTranslations('projects');

    const translatedProjects = t.raw('items') as {
        title: string;
        description: string;
        previewLink?: string;
        image: string;
    }[];

    const projects = translatedProjects.map((project, index) => {
        const stack = projectData[index]?.stack;
        const tags = Array.isArray(stack) ? stack.slice(0, 3) : stack ? [stack] : [];

        return {
            ...project,
            tags,
        };
    });

    return (
        <section id="projects" className="anchor-offset section-shell section-block">
            <h2 className="section-title">{t('title')}</h2>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <article key={index} className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden">
                        <div className="relative aspect-video overflow-hidden border-b border-border">
                            {project.previewLink ? (
                                <Link href={project.previewLink} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={project.title} />
                            ) : null}
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={640}
                                height={360}
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5 md:p-6">
                            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                                {project.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-muted">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6">
                                {project.previewLink ? (
                                    <Link
                                        href={project.previewLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="button-secondary"
                                    >
                                        {t('cta')}
                                    </Link>
                                ) : (
                                    <span className="pill">{t('unavailable')}</span>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
