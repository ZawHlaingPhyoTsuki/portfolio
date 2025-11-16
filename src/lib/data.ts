import type { Experience, Project, SectionName } from "@/types";

export const links: { title: SectionName; href: string }[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const experiences: Experience[] = [
  {
    title: "Backend Developer",
    company: "One Project, One Month",
    period: "2025 Nov - Present",
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
    period: "2024 - Present",
    description:
      "Pursuing a bachelor's degree with a focus on digital technology innovation, building foundational skills in software development, digital systems, and technology trends.",
    technologies: [],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    title: "AI Task Manager",
    description:
      "Smart task management app that uses AI to categorize, prioritize, and suggest optimal task scheduling.",
    image: "/placeholder.svg",
    technologies: ["React", "Python", "TensorFlow", "FastAPI", "MongoDB"],
    liveUrl: "https://ai-taskmanager.com",
    githubUrl: "https://github.com/username/ai-taskmanager",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Feature-rich chat application with real-time messaging, file sharing, and video calls.",
    image: "/placeholder.svg",
    technologies: ["React", "Socket.io", "WebRTC", "Node.js", "Redis"],
    liveUrl: "https://chatapp-demo.com",
    githubUrl: "https://github.com/username/chat-app",
  },
  {
    title: "AI Image Generator",
    description:
      "An AI image generator that uses a model to generate images based on a prompt.",
    image: "/placeholder.svg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://ai-image-generator.com",
    githubUrl: "https://github.com/username/ai-image-generator",
  },
];

// export const projectsData = [
//   {
//     title: "Ecommerce Website",
//     description:
//       "A full-stack e-commerce platform where users can browse products, manage their accounts, and make secure payments using Stripe. Features include user authentication with JWT, product management, and a responsive UI built with React and Tailwind.",
//     tags: [
//       "React",
//       "MongoDB",
//       "Tailwind",
//       "Node.js",
//       "Express",
//       "JWT",
//       "Stripe",
//     ],
//     imageUrl: Ecommerce1,
//   },
//   {
//     title: "Food Delivery App",
//     description:
//       "A food delivery platform developed with a robust front-end and back-end integration. It includes user authentication, payment processing with Stripe, real-time order tracking, and a responsive design using React and Tailwind.",
//     tags: [
//       "React",
//       "Tailwind",
//       "Stripe",
//       "JWT",
//       "MongoDB",
//       "Node.js",
//       "Express",
//     ],
//     imageUrl: FoodDel,
//   },
//   {
//     title: "Portfolio",
//     description:
//       "A personal portfolio website built with Next.js, Framer Motion, Resend, and React.Email for seamless email integration. It supports both dark mode and light mode, offering a modern and dynamic user experience.",
//     tags: [
//       "React",
//       "Next.js",
//       "Tailwind",
//       "Framer-motion",
//       "Resend",
//       "React.Email",
//     ],
//     imageUrl: Portfolio,
//   },
// ] as const;
