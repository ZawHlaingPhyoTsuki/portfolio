import React from "react";
import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
import Ecommerce1 from "@/public/e-commence.png";
import FoodDel from "@/public/food-del.png";
import Portfolio from "@/public/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Computer Science, Digital Technology Innovation",
    location: "Kasem Bundit University, Bangkok, Thailand",
    description:
      "Pursuing a bachelor's degree with a focus on digital technology innovation, building foundational skills in software development, digital systems, and technology trends.",
    icon: React.createElement(LuGraduationCap),
    date: "April 2024 - Present",
  },
  {
    title: "Backend Developer - Utility Management System",
    location: "One Project One Month · Remote",
    description:
      "Developed backend services for a Utility Management System using Express.js and Prisma. Led the authentication module implementation, created comprehensive Swagger documentation for all API endpoints, and conducted code reviews to maintain code quality. Collaborated with team members to troubleshoot and resolve technical challenges in their modules.",
    icon: React.createElement(LuBriefcase),
    date: "November 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Website",
    description:
      "A full-stack e-commerce platform where users can browse products, manage their accounts, and make secure payments using Stripe. Features include user authentication with JWT, product management, and a responsive UI built with React and Tailwind.",
    tags: [
      "React",
      "MongoDB",
      "Tailwind",
      "Node.js",
      "Express",
      "JWT",
      "Stripe",
    ],
    imageUrl: Ecommerce1,
  },
  {
    title: "Food Delivery App",
    description:
      "A food delivery platform developed with a robust front-end and back-end integration. It includes user authentication, payment processing with Stripe, real-time order tracking, and a responsive design using React and Tailwind.",
    tags: [
      "React",
      "Tailwind",
      "Stripe",
      "JWT",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    imageUrl: FoodDel,
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with Next.js, Framer Motion, Resend, and React.Email for seamless email integration. It supports both dark mode and light mode, offering a modern and dynamic user experience.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Framer-motion",
      "Resend",
      "React.Email",
    ],
    imageUrl: Portfolio,
  },
] as const;

export const languageSkillsData = [
  "TypeScript",
  "JavaScript",
  "Java",
  "PHP",
  "Python",
  "HTML5",
  "CSS3",
] as const;

export const frameworkSkillsData = [
  "React",
  "Next.js",
  "NestJS",
  "Express",
  "Spring Boot",
  "Laravel",
  "TailwindCSS",
] as const;

export const toolsAndLibrariesData = [
  "Prisma",
  "Drizzle",
  "Mongoose",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Node.js",
  "Bun",
  "Git",
  "Docker",
  "Shadcn UI",
  "Jest",
  "Vitest",
  "React Testing Library",
  "Swagger",
  "GraphQL",
  "Apollo",
  "Redux Toolkit",
  "RTK Query",
  "Zustand",
  "TanStack Query",
  "TanStack Form",
  "React Hook Form",
  "Zod",
  "BetterAuth",
  "Auth.js",
  "Turborepo",
] as const;
