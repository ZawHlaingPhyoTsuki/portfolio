import { Building2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-0.5 bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
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

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.description} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
