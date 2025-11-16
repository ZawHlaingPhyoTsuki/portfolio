"use client";

import { Badge } from "@/components/ui/badge";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { projects } from "@/lib/data";
import { ProjectCard } from "../project-card";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 1);

  return (
    <section ref={ref} id="projects" className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.githubUrl} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
