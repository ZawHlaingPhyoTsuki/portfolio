interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  description: string[];
  technologies: string[];
  image?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Kasem Bundit University Hackathon',
    companyUrl: 'https://github.com/kbu-portal-init/kbu-hackathons',
    location: 'Bangkok, Thailand',
    period: '2026 Sep - Present',
    description: [
      'Developed a full-stack hackathon event platform for Kasem Bundit University.',
      'Built event discovery, team management, participant registration, project submission, and announcement features.',
      'Implemented role-based authentication and protected workspaces for teams, organizers, and administrators.',
      'Designed backend architecture using server actions, service layers, Prisma, and PostgreSQL.',
      'Implemented student email verification, audit logging, Cloudflare R2 file uploads, and SMTP notifications.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Better Auth',
      'Docker',
      'Zod',
      'Cloudflare R2',
    ],
    image: '/experiences/kbu-hackathon.png',
  },
  // {
  //   title: 'Freelance Developer',
  //   company: 'Banana Coder',
  //   companyUrl: 'https://github.com/Banana-Coder',
  //   location: 'Bangkok (Remote)',
  //   period: '2025 Dec - 2026 Jan',
  //   description: [
  //     'Built a production-ready car dealership management system for a real client.',
  //     'Developed admin workflows for vehicle inventory, employee records, expenses, and profit analytics.',
  //     'Designed PostgreSQL database models with Prisma.',
  //     'Collaborated on system architecture and deployed the application to Vercel.',
  //   ],
  //   technologies: ['Next.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma', 'Docker', 'Zod'],
  //   image: '/experiences/banana-coder.png',
  // },
  {
    title: 'Backend Developer',
    company: 'One Project, One Month Community',
    companyUrl: 'https://github.com/One-Project-One-Month',
    location: 'Remote',
    period: '2025 Nov - 2025 Dec',
    description: [
      'Developed backend services for a utility management system using Express.js and Prisma.',
      'Built the authentication module with validation and secure authentication flows.',
      'Documented REST APIs with Swagger/OpenAPI.',
      'Participated in code reviews and collaborated on backend architecture.',
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Zod'],
    image: '/experiences/one.png',
  },
];
