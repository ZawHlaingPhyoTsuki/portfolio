"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { skillsData } from "@/lib/skill-icons";
import { GithubLogo } from "./icons";
import SkillBadge from "./skill-badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  // Function to find skill data by name
  const findSkillData = (techName: string) => {
    // Search through all categories for the skill
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
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Image src={image} alt={title} className="object-cover" fill />
        </motion.div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 min-h-0 bg-card text-card-foreground gap-6 border py-6 shadow-sm">
        {/* Title and Description */}
        <div className="shrink-0">
          <motion.h3
            className="text-xl font-semibold mb-2 line-clamp-1"
            whileHover={{ color: "hsl(var(--primary))" }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-muted-foreground mb-4 line-clamp-4 h-[92px]">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => {
            const skill = findSkillData(tech);

            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SkillBadge skill={skill} />
              </motion.div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-4 shrink-0">
          {liveUrl && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <Button variant="default" className="rounded-full" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </motion.div>
          )}
          {githubUrl && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <Button
                variant="outline"
                className="rounded-full shadow-none"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubLogo className="mr-1 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
