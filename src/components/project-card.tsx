"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubLogo } from "./icons";

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
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50"
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
      <div className="flex-1 flex flex-col p-6">
        <motion.h3
          className="text-xl font-semibold mb-2"
          whileHover={{ color: "hsl(var(--primary))" }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <Badge variant="secondary" className="rounded-full">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
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
