type SkillType = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: SkillType[];
};

type Skills = {
  languages: SkillCategory;
  frameworks: SkillCategory;
  databases: SkillCategory;
  tools: SkillCategory;
};

export const skillsData: Skills = {
  languages: {
    title: "Programming Languages",
    description: "Languages I use for development",
    skills: [
      { name: "TypeScript", icon: "/skills/TypeScript.svg" },
      { name: "JavaScript", icon: "/skills/JavaScript.svg" },
      { name: "Java", icon: "/skills/Java-Dark.svg" },
      { name: "PHP", icon: "/skills/PHP-Dark.svg" },
      { name: "Python", icon: "/skills/Python-Dark.svg" },
      { name: "HTML5", icon: "/skills/HTML.svg" },
      { name: "CSS3", icon: "/skills/CSS.svg" },
    ],
  },
  frameworks: {
    title: "Frameworks & Platforms",
    description: "Development frameworks and platforms",
    skills: [
      { name: "React", icon: "/skills/React-Dark.svg" },
      { name: "Next.js", icon: "/skills/NextJS-Dark.svg" },
      { name: "NestJS", icon: "/skills/NestJS-Dark.svg" },
      { name: "Express", icon: "/skills/ExpressJS-Dark.svg" },
      { name: "Spring Boot", icon: "/skills/Spring-Dark.svg" },
      { name: "Laravel", icon: "/skills/Laravel-Dark.svg" },
      { name: "TailwindCSS", icon: "/skills/TailwindCSS-Dark.svg" },
    ],
  },
  databases: {
    title: "Databases & ORMs",
    description: "Database systems and data management tools",
    skills: [
      { name: "PostgreSQL", icon: "/skills/PostgreSQL-Dark.svg" },
      { name: "MySQL", icon: "/skills/MySQL-Dark.svg" },
      { name: "MongoDB", icon: "/skills/MongoDB.svg" },
      { name: "SQLite", icon: "/skills/SQLite.svg" },
      { name: "Prisma", icon: "/skills/Prisma.svg" },
      { name: "Mongoose", icon: "/skills/MongoDB.svg" },
    ],
  },
  tools: {
    title: "Tools, Libraries & Packages",
    description: "Development tools, libraries, and utilities",
    skills: [
      { name: "TanStack Query", icon: "/skills/reactquery.svg" },
      { name: "TanStack Form", icon: "/skills/tanstack-form.svg" },
      { name: "React Hook Form", icon: "/skills/reacthookform.svg" },
      { name: "Redux Toolkit", icon: "/skills/Redux.svg" },
      { name: "RTK Query", icon: "/skills/Redux.svg" },
      { name: "Zustand", icon: "/skills/zustand.svg" },
      { name: "Shadcn UI", icon: "/skills/shadcnui.svg" },
      { name: "Motion", icon: "/skills/motion.svg" },
      { name: "React Testing Library", icon: "/skills/rtl.svg" },
      { name: "Vitest", icon: "/skills/Vitest-Dark.svg" },
      { name: "Jest", icon: "/skills/Jest.svg" },
      { name: "GraphQL", icon: "/skills/GraphQL-Dark.svg" },
      { name: "Apollo", icon: "/skills/Apollo.svg" },
      { name: "Swagger", icon: "/skills/swagger.svg" },
      { name: "Zod", icon: "/skills/zod.svg" },
      { name: "BetterAuth", icon: "/skills/BetterAuth.svg" },
      { name: "Docker", icon: "/skills/Docker.svg" },
      { name: "Git", icon: "/skills/Git.svg" },
      { name: "Bun", icon: "/skills/Bun.svg" },
      { name: "Pnpm", icon: "/skills/Pnpm.svg" },
      { name: "Npm", icon: "/skills/Npm.svg" },
      { name: "Node.js", icon: "/skills/NodeJS-Dark.svg" },
      { name: "Biomejs", icon: "/skills/biome.svg" },
    ],
  },
};
