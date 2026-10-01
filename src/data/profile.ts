import { Github01Icon, Linkedin01Icon, TwitterIcon } from '@hugeicons/core-free-icons';

export const profile = {
  name: 'Zaw Hlaing Phyo',
  initials: 'ZHP',
  headline: 'Full-Stack Developer — Next.js, TypeScript & React',
  bio: 'I build full-stack web apps with Next.js, React, TypeScript, and PostgreSQL. Currently a student pursuing a degree in digital technology innovation at Kasem Bundit University in Bangkok.',
  bioSkills: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'] as const,
  location: 'Bangkok, Thailand',
  email: 'tro2233zhp@gmail.com',
  github: 'ZawHlaingPhyoTsuki',
  avatar: '/pf.png',
  resumeUrl: '/resume.pdf',
  availableForWork: true,
  verified: true,
  socials: [
    { name: 'GitHub', url: 'https://github.com/ZawHlaingPhyoTsuki', icon: Github01Icon },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zaw-hlaing-phyo-0b0b0b/',
      icon: Linkedin01Icon,
    },
    { name: 'Twitter', url: 'https://twitter.com/ZawHlaingPhyo', icon: TwitterIcon },
  ],
} as const;
