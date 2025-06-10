import {ProjectProps} from "@/types/project";

export const projects:ProjectProps[] = [
    {
        title: "Landing Pages - Grupo Stellantis",
        description:
            "Criação de diversas landing pages para modelos como Jeep Renegade, Fiat Titano, Ram Rampage e outros. Foco em SEO, performance, automação de deploys e rastreamento de métricas via DataLayer.",
        stack: ["Next.js", "TypeScript", "Styled Components", "Sentry", "Vercel"],
        image: "/projects/stellantis.jpg",
        previewLink: "https://www.jeep.com.br/renegade",
    },
    {
        title: "Dashboard de Vendas e Financeiro",
        description:
            "Desenvolvimento completo de um painel administrativo para gestão de vendas, saques e antecipações. O projeto inclui autenticação com 2FA, filtros avançados, gráficos dinâmicos, relatórios financeiros e controle de permissões. Interface moderna e responsiva com foco em performance e experiência do usuário.",
        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Chart.js",
            "Axios",
            "Node.js"
        ],
        image: "/projects/reflowapp.jpg",
    },
    {
        title: "CMS para Evento Peugeot Casacor",
        description:
            "Liderança no desenvolvimento de um CMS completo para evento da Peugeot. Construção de API robusta com autenticação, rotas protegidas, gerenciamento de conteúdos e upload de mídias.",
        stack: [
            "Next.js",
            "NestJS",
            "MySQL",
            "TypeScript",
            "Axios",
            "Styled Components",
            "Docker"
        ],
        image: "/projects/peugeot.jpg",
        previewLink: "https://carros.peugeot.com.br",
    },
    {
        title: "Migração de CMS para Sanity",
        description:
            "Migração completa do CMS Hygraph para Sanity, com reestruturação de conteúdo e refatoração do front-end em Next.js, focando em performance, escalabilidade e SEO.",
        stack: [
            "Next.js",
            "TypeScript",
            "Sanity",
            "Hygraph",
            "Styled Components",
            "Node.js",
            "GROQ",
            "GraphQL",
            "Vercel",
            "Docker"
        ],
        image: "/projects/tyler-mitchel.jpg", // Substitua por uma imagem representativa
        previewLink: "https://www.tylermitchell.co/",
    },
];
