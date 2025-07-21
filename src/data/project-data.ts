import {ProjectProps} from "@/types/project";

export const projects:ProjectProps[] = [
    {
        title: "Landing Page – Jeep Renegade",
        description:
            "Criação de uma landing page altamente otimizada para o Jeep Renegade, priorizando SEO, responsividade e rastreamento via Google Tag Manager. O projeto utilizou componentes reutilizáveis e carregamento eficiente de mídias.",
        stack: ["Next.js", "TypeScript", "Sass", "Sentry", "Vercel", "Node.js"],
        image: "/projects/jeep-renegade.jpg",
        previewLink: "https://www.jeep.com.br/renegade/"
    },

    {
        title: "Landing Page – Jeep Compass",
        description:
            "Desenvolvimento da landing page oficial do Jeep Compass, com foco em performance, SEO e responsividade. Implementações incluem otimização de imagens, carregamento inteligente, código acessível e integração com métricas via Google Tag Manager (DataLayer).",
        stack: ["Next.js", "TypeScript", "Sass", "Sentry", "Vercel", "Node.js"],
        image: "/projects/jeep-compass.jpg",
        previewLink: "https://www.jeep.com.br/compass/"
    },
    {
        title: "Landing Page – Fiat Titano",
        description:
            "Desenvolvimento da landing page oficial do modelo Fiat Titano, com foco em performance, responsividade e SEO. O projeto incluiu otimizações como lazy loading, compressão de imagens, estrutura semântica e implementação de DataLayer para análise de métricas via Google Tag Manager.",
        stack: ["Next.js", "TypeScript", "Sass", "Sentry", "Vercel", "Node.js"],
        image: "/projects/fiat-titano.jpg",
        previewLink: "https://titano.fiat.com.br"
    },
    {
        title: "Dashboard de Vendas e Financeiro (Preview Indisponível)",
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
        image: "/projects/tyler-mitchel.jpg",
        previewLink: "https://www.tylermitchell.co/",
    },


];
