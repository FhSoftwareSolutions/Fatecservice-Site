import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const testimonials = [
  {
    company: "Empresa Tech Solutions",
    author: "João Silva, CEO",
    content: "A parceria com a FH Software Solutions foi fundamental para o sucesso do nosso projeto. A equipe entregou um sistema perfeito, dentro do prazo e do orçamento previsto.",
    rating: 5
  },
  {
    company: "E-commerce Outlet",
    author: "Maria Oliveira, Diretora",
    content: "Nossa plataforma de e-commerce desenvolvida pela FH Software Solutions superou todas as expectativas. As vendas aumentaram em 200% após o lançamento do novo site.",
    rating: 5
  },
  {
    company: "Serviços Financeiros MB",
    author: "Carlos Santos, CTO",
    content: "O aplicativo desenvolvido pela FH Software Solutions para nossa empresa de serviços financeiros revolucionou a forma como interagimos com nossos clientes.",
    rating: 4.5
  }
];

export const services = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Criamos sites responsivos, aplicações web e e-commerces personalizados com as tecnologias mais modernas do mercado.",
    icon: "fa-laptop",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4",
    features: [
      "Sites institucionais e landing pages",
      "E-commerce com integração de pagamentos",
      "Dashboards e painéis administrativos"
    ],
    color: "blue"
  },
  {
    id: 2,
    title: "Desenvolvimento Mobile",
    description: "Desenvolvemos aplicativos mobile nativos e híbridos para iOS e Android que impulsionam o seu negócio e expandem seu alcance.",
    icon: "fa-mobile-alt",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356",
    features: [
      "Aplicativos nativos para Android e iOS",
      "Aplicativos híbridos multiplataforma",
      "Integração com APIs e serviços externos"
    ],
    color: "gold"
  },
  {
    id: 3,
    title: "Integrações e APIs",
    description: "Conectamos sistemas, aplicativos e plataformas para automatizar processos e unificar dados em um único ecossistema digital.",
    icon: "fa-plug",
    image: "https://images.unsplash.com/photo-1576568699714-a3f4950805d5",
    features: [
      "Desenvolvimento de APIs RESTful",
      "Integração com sistemas de pagamento",
      "Automação de processos e workflows"
    ],
    color: "blue"
  }
];

export function getStarsArray(rating: number): { type: 'full' | 'half' | 'empty' }[] {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  const starsArray = [
    ...Array.from({ length: fullStars }).map(() => ({ type: 'full' as const })),
    ...(hasHalfStar ? [{ type: 'half' as const }] : []),
    ...Array.from({ length: emptyStars }).map(() => ({ type: 'empty' as const }))
  ];
  
  return starsArray;
}
