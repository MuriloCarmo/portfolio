// src/components/AboutSection.tsx
import { Briefcase, MapPin } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="px-6 md:px-40 py-20">
            <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
                Desenvolvedor com 8 anos de experiência na criação de soluções digitais de alto impacto. Minha paixão é transformar ideias em interfaces modernas, intuitivas e funcionais que conectam pessoas e negócios.
            </p>

            {/* EXPERIÊNCIA */}
            <h3 className="text-3xl font-bold mb-6">Experiência Profissional</h3>
            <div className="space-y-8">
                {[
                    {
                        role: 'Desenvolvedor - Sênior',
                        company: 'Work in Progress',
                        location: 'Remoto',
                        type: 'Full Time',
                        period: '2025 – atual',
                        description:
                            'Responsável pela migração completa do CMS da plataforma Hygraph (GraphCMS) para o Sanity, reestruturando toda a arquitetura de conteúdo e refatorando o front-end em Next.js para garantir performance, escalabilidade e facilidade de manutenção.',
                    },
                    {
                        role: 'Desenvolvedor Front-End - Sênior',
                        company: 'Digital Code By Dentsu',
                        location: 'Remoto',
                        type: 'Full Time',
                        period: '2022 – 2024',
                        description:
                            'Desenvolvimento de soluções front-end para o Grupo Stellantis, com foco em criação de componentes otimizados e performáticos utilizando NextJS, SEO e DataLayer.',
                    },
                    {
                        role: 'Desenvolvedor Front-End - Pleno',
                        company: 'Gesthor Hospitalar',
                        location: 'Goiânia, GO',
                        type: 'Full Time',
                        period: '2021 – 2022',
                        description:
                            'Atuação como Full Stack, criando interfaces modernas em ReactJS com API NodeJS, Context API e Styled Components.',
                    },
                ].map((job, i) => (
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
                            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">{job.type}</span>
                            <span>{job.period}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-2">{job.description}</p>
                    </div>
                ))}
            </div>

            {/* EDUCAÇÃO */}
            <h3 className="text-3xl font-bold mt-12 mb-6">Educação</h3>
            <div className="border-b border-gray-700 pb-4">
                <h4 className="text-lg font-medium">Análise e Desenvolvimento de Sistemas</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        Faculdade Estácio
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Goiânia, GO
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">Presencial</span>
                    <span>2019 – 2021</span>
                </div>
            </div>

            {/* IDIOMAS */}
            <h3 className="text-3xl font-bold mt-12 mb-6">Idiomas</h3>
            <ul className="list-disc ml-6 text-muted-foreground">
                <li>Português - Fluente</li>
                <li>Inglês - Avançado</li>
                <li>Espanhol - Intermediário</li>
            </ul>
        </section>
    );
}
