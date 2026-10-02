import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Recall: TanStack Start Firecrawl',
    role: 'Full-Stack Developer',
    description:
      'Read-it-later library that scrapes URLs into clean Markdown with AI summaries and tags.',
    image: '/projects/tanstack-start-firecrawl.png',
    technologies: [
      'TanStack Start',
      'Firecrawl',
      'Vercel AI SDK',
      'Prisma',
      'shadcn/ui',
      'PostgreSQL',
      'BetterAuth',
    ],
    liveUrl: 'https://tanstack-start-firecrawl.vercel.app/',
    githubUrl: 'https://github.com/ZawHlaingPhyoTsuki/tanstack-start-firecrawl',
    featured: true,
  },
  {
    title: 'Car Dealership Management App',
    role: 'Full-Stack Developer',
    description:
      'Admin dashboard for car inventory, employee records, expense tracking, and profit analytics.',
    image: '/projects/7hr.png',
    technologies: [
      'Next.js',
      'Prisma',
      'shadcn/ui',
      'TanStack Query',
      'Zod',
      'Vitest',
      'PostgreSQL',
      'BetterAuth',
    ],
    liveUrl: 'https://7hrs-automobile.vercel.app',
    githubUrl: 'https://github.com/ZawHlaingPhyoTsuki/Car-Dealership-Management-System',
    featured: true,
  },
  {
    title: 'Nest Flow Utility Management System',
    role: 'Backend Developer',
    description: 'Property utility billing platform with REST APIs, auth, and Swagger docs.',
    image: '/projects/nest-flow.jpg',
    technologies: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Zod'],
    liveUrl: 'https://node-utility-management-system-fye1.onrender.com/docs',
    githubUrl: 'https://github.com/one-project-one-month/Node-Utility-Management-System',
    featured: true,
  },
  {
    title: 'Break Even Point Calculator',
    role: 'Developer',
    description:
      "Break-even calculator that finds a product's profit point from cost and sales price, with tested form logic.",
    image: '/projects/break-even-point-calculator.png',
    technologies: ['Next.js', 'Zustand', 'Jest', 'React Hook Form', 'Zod'],
    liveUrl: 'https://break-even-calculator-eta.vercel.app/',
    githubUrl: 'https://github.com/ZawHlaingPhyoTsuki/Break-Even-Calculator',
  },
  {
    title: 'Portfolio Website',
    role: 'Developer',
    description: 'This portfolio, built with Next.js, shadcn UI, and Motion.',
    image: '/projects/portfolio.png',
    technologies: ['Next.js', 'shadcn/ui', 'Motion'],
    liveUrl: 'https://www.zawhlaingphyo.dev/',
    githubUrl: 'https://github.com/ZawHlaingPhyoTsuki/portfolio',
  },
];
