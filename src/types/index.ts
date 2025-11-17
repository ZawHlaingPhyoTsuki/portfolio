export type SectionName =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "contact";

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};
