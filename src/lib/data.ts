import { Mail, MapPin, Phone } from "lucide-react";
import type { Experience, Project, SectionName } from "@/types";

export const links: { title: SectionName; href: string }[] = [
  {
    title: "home",
    href: "#home",
  },
  {
    title: "about",
    href: "#about",
  },
  {
    title: "experience",
    href: "#experience",
  },
  {
    title: "skills",
    href: "#skills",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "contact",
    href: "#contact",
  },
];

export const experiences: Experience[] = [
  {
    title: "Freelance Developer",
    company: "Banana Coder",
    companyImage: "/experiences/banana-coder.png",
    companyUrl: "https://github.com/Banana-Coder",
    period: "2025 Dec - Present",
    description:
      "Delivered a production-ready Car Dealership Management System for a real client as part of the Banana Coder organization. Developed a full-stack admin-only application enabling car inventory management, employee records, expense tracking, and profit analytics. Collaborated with a teammate on system design, database modeling with Prisma, and deployment on Vercel, ensuring a simple and efficient workflow for daily business operations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Zod",
    ],
  },
  {
    title: "Backend Developer",
    company: "One Project, One Month",
    companyImage: "/experiences/one.png",
    companyUrl: "https://github.com/One-Project-One-Month",
    period: "2025 Nov - 2025 Dec",
    description:
      "Developed backend services for a Utility Management System using Express.js and Prisma. Led the authentication module implementation, created comprehensive Swagger documentation for all API endpoints, and conducted code reviews to maintain code quality. Collaborated with team members to troubleshoot and resolve technical challenges in their modules.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Zod",
    ],
  },
  {
    title: "Student",
    company: "Kasem Bundit University, Bangkok, Thailand",
    companyImage: "/experiences/kasem.png",
    companyUrl: "https://kbu.ac.th/",
    period: "2024 - Present",
    description:
      "Pursuing a bachelor's degree with a focus on digital technology innovation, building foundational skills in software development, digital systems, and technology trends.",
    technologies: [],
  },
];

export const projects: Project[] = [
  {
    title: "Nest Flow Utility Management System",
    description:
      "A collaborative full-stack utility management system developed as part of the 'One Project One Month' initiative. I contributed as a backend developer, building RESTful APIs with Express.js and Prisma, implementing authentication systems, and creating comprehensive Swagger documentation. Worked closely with a distributed team using agile methodologies to deliver features for property management, tenant billing, and utility tracking.",
    image: "/projects/nest-flow.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    liveUrl: "https://node-utility-management-system-fye1.onrender.com/docs",
    githubUrl:
      "https://github.com/one-project-one-month/Node-Utility-Management-System",
  },
  {
    title: "Car Dealership Management App",
    description:
      "A production-ready full-stack admin-only application enabling car inventory management, employee records, expense tracking, and profit analytics.",
    image: "/projects/7hr.png",
    technologies: [
      "Next.js",
      "Prisma",
      "Shadcn UI",
      "TanStack Query",
      "TanStack Table",
      "React Hook Form",
      "Zod",
      "Vitest",
      "Docker",
      "PostgreSQL",
      "BetterAuth",
      "Pnpm",
      "Cloudinary",
      "Biomejs",
    ],
    liveUrl: "https://7hrs-automobile.vercel.app",
    githubUrl:
      "https://github.com/ZawHlaingPhyoTsuki/Car-Dealership-Management-System",
  },
  {
    title: "Break Even Point Calculator",
    description:
      "A React application that helps users calculate the break even point of a product based on its cost and sales price.",
    image: "/projects/break-even-point-calculator.png",
    technologies: [
      "Next.js",
      "Zustand",
      "Jest",
      "React Testing Library",
      "React Hook Form",
      "Zod",
    ],
    liveUrl: "https://break-even-calculator-eta.vercel.app/",
    githubUrl: "https://github.com/ZawHlaingPhyoTsuki/Break-Even-Calculator",
  },
  // {
  //   title: "Project Management App",
  //   description:
  //     "A full-stack project management app that allows users to create and manage projects, tasks, and team members.",
  //   image: "/placeholder.svg",
  //   technologies: [
  //     "Next.js",
  //     "Prisma",
  //     "Shadcn UI",
  //     "TanStack Query",
  //     "Zustand",
  //     "React Hook Form",
  //     "Zod",
  //     "Vitest",
  //     "React Testing Library",
  //     "Docker",
  //     "PostgreSQL",
  //     "BetterAuth",
  //     "Bun",
  //   ],
  //   liveUrl: "https://project-management-app-orcin-five.vercel.app/",
  //   githubUrl: "https://github.com/ZawHlaingPhyoTsuki/project-management-app",
  // },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, Shadcn UI, and Motion.",
    image: "/projects/portfolio.png",
    technologies: [
      "Next.js",
      "Shadcn UI",
      "Motion",
      "Zod",
      "React Hook Form",
      "Pnpm",
    ],
    liveUrl: "https://zaw-hlaing-phyo-portfolio.vercel.app/",
    githubUrl: "https://github.com/ZawHlaingPhyoTsuki/portfolio",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description:
      "Have a question or need help? Drop me an email, and I'll respond within 24 hours.",
    value: "tro2233zhp@gmail.com",
    // href: "mailto:tro2233zhp@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Prefer to chat? Give me a call Monday–Friday, 9 AM–5 PM.",
    value: "+66 99 397 0485",
    // href: "tel:+661234567890",
  },
  {
    icon: MapPin,
    title: "Location",
    description:
      "Based in Bangkok, Thailand. Open to remote opportunities worldwide.",
    value: "Bangkok, Thailand",
    // href: "#",
  },
];
