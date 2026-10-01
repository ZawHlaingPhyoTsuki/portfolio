type SkillType = {
  name: string;
  icon: string;
  iconDark?: string;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: SkillType[];
};

type Skills = {
  frontend: SkillCategory;
  backend: SkillCategory;
  databases: SkillCategory;
  tools: SkillCategory;
};

export const skillsData: Skills = {
  frontend: {
    title: 'Frontend',
    description: 'Languages, frameworks, and libraries for the client side',
    skills: [
      { name: 'TypeScript', icon: '/skills/TypeScript.svg' },
      { name: 'JavaScript', icon: '/skills/JavaScript.svg' },
      { name: 'HTML5', icon: '/skills/HTML.svg' },
      { name: 'CSS3', icon: '/skills/CSS.svg' },
      { name: 'React', icon: '/skills/React-Light.svg' },
      { name: 'Next.js', icon: '/skills/NextJS-Dark.svg' },
      { name: 'TanStack Start', icon: '/skills/tanstack-start.png' },
      { name: 'TailwindCSS', icon: '/skills/TailwindCSS-Dark.svg' },
      { name: 'shadcn UI', icon: '/skills/shadcnui.svg' },
      { name: 'Redux Toolkit', icon: '/skills/Redux.svg' },
      { name: 'RTK Query', icon: '/skills/Redux.svg' },
      { name: 'Zustand', icon: '/skills/zustand.svg' },
      { name: 'React Hook Form', icon: '/skills/reacthookform.svg' },
      { name: 'TanStack Query', icon: '/skills/reactquery.svg' },
      { name: 'TanStack Table', icon: '/skills/reactquery.svg' },
      { name: 'TanStack Form', icon: '/skills/tanstack-form.svg' },
      { name: 'Motion', icon: '/skills/motion.svg' },
    ],
  },
  backend: {
    title: 'Backend',
    description: 'Languages, frameworks, and services for the server side',
    skills: [
      { name: 'Node.js', icon: '/skills/NodeJS-Dark.svg' },
      { name: 'Express', icon: '/skills/ExpressJS-Dark.svg' },
      { name: 'NestJS', icon: '/skills/NestJS-Dark.svg' },
      { name: 'Java', icon: '/skills/Java-Dark.svg' },
      { name: 'Spring Boot', icon: '/skills/Spring-Dark.svg' },
      { name: 'PHP', icon: '/skills/PHP-Dark.svg' },
      { name: 'Laravel', icon: '/skills/Laravel-Dark.svg' },
      { name: 'Python', icon: '/skills/Python-Dark.svg' },
      { name: 'GraphQL', icon: '/skills/GraphQL-Dark.svg' },
      { name: 'Apollo', icon: '/skills/Apollo.svg' },
      { name: 'BetterAuth', icon: '/skills/BetterAuth.svg' },
    ],
  },
  databases: {
    title: 'Databases & ORMs',
    description: 'Database systems and data access tools',
    skills: [
      { name: 'PostgreSQL', icon: '/skills/PostgreSQL-Dark.svg' },
      { name: 'MySQL', icon: '/skills/MySQL-Dark.svg' },
      { name: 'MongoDB', icon: '/skills/MongoDB.svg' },
      { name: 'SQLite', icon: '/skills/SQLite.svg' },
      { name: 'Prisma', icon: '/skills/Prisma.svg' },
      { name: 'Mongoose', icon: '/skills/MongoDB.svg' },
    ],
  },
  tools: {
    title: 'Tools',
    description: 'DevOps, testing, and developer tooling',
    skills: [
      { name: 'Docker', icon: '/skills/Docker.svg' },
      { name: 'Git', icon: '/skills/Git.svg' },
      { name: 'Bun', icon: '/skills/Bun.svg' },
      { name: 'Pnpm', icon: '/skills/Pnpm.svg' },
      { name: 'Npm', icon: '/skills/Npm.svg' },
      { name: 'Biomejs', icon: '/skills/biome.svg' },
      { name: 'Vitest', icon: '/skills/Vitest-Dark.svg' },
      { name: 'Jest', icon: '/skills/Jest.svg' },
      { name: 'React Testing Library', icon: '/skills/rtl.svg' },
      { name: 'Zod', icon: '/skills/zod.svg' },
      { name: 'Swagger', icon: '/skills/swagger.svg' },
      { name: 'Firecrawl', icon: '/skills/Firecrawl.svg', iconDark: '/skills/Firecrawl-Dark.svg' },
      {
        name: 'Vercel AI SDK',
        icon: '/skills/ai-sdk-logotype-light.svg',
        iconDark: '/skills/ai-sdk-logotype-dark.svg',
      },
    ],
  },
};

export const allSkills: SkillType[] = Object.values(skillsData).flatMap(
  (category) => category.skills,
);

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

export const findSkill = (name: string): SkillType | undefined =>
  allSkills.find((skill) => normalize(skill.name) === normalize(name));
