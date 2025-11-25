"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubLogo } from "./icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SkillBadge from "./skill-badge";
import { skillsData } from "@/lib/skill-icons";

interface ProjectModalProps {
  children: React.ReactNode;
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

export function ProjectModal({ children, project }: ProjectModalProps) {
  // Function to find skill data by name (reused from ProjectCard)
  const findSkillData = (techName: string) => {
    const allSkills = [
      ...skillsData.languages.skills,
      ...skillsData.frameworks.skills,
      ...skillsData.databases.skills,
      ...skillsData.tools.skills,
    ];

    const foundSkill = allSkills.find(
      (skill) => skill.name.toLowerCase() === techName.toLowerCase(),
    );

    return foundSkill || { name: techName, icon: "" };
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden sm:rounded-xl z-101">
        <div className="flex flex-col max-h-[90vh]">
          {/* Image Header */}
          <div className="relative h-48 sm:h-64 w-full shrink-0 bg-accent">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {project.title}
              </DialogTitle>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <DialogHeader className="hidden">
              <DialogTitle>{project.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  About Project
                </h4>
                <DialogDescription className="text-base text-foreground leading-relaxed">
                  {project.description}
                </DialogDescription>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <SkillBadge key={tech} skill={findSkillData(tech)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t bg-muted/20 shrink-0 flex flex-col sm:flex-row gap-3 justify-end">
            {project.githubUrl && (
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
            {project.liveUrl ? (
              <Button asChild className="w-full sm:w-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            ) : (
              <Button disabled className="w-full sm:w-auto">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
