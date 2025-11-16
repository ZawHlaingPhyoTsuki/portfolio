"use client";

import { Building2, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export default function ExperienceItem({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <motion.div
      className="relative pl-8 not-last:pb-12 group mt-10"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-0.5 bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <motion.div
          className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.2, backgroundColor: "hsl(var(--primary))" }}
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Company & Icon */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="shrink-0 size-9 bg-accent rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Building2 className="size-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
          <motion.span
            className="text-lg font-semibold group-hover:text-primary transition-colors duration-300"
            whileHover={{ x: 2 }}
          >
            {company}
          </motion.span>
        </motion.div>

        {/* Title & Period */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-medium group-hover:text-foreground/90 transition-colors duration-300">
            {title}
          </h3>
          <motion.div
            className="flex items-center gap-2 mt-1 text-sm text-muted-foreground"
            whileHover={{ x: 2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="size-4" />
            </motion.div>
            <span>{period}</span>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -1 }}
            >
              <Badge
                variant="secondary"
                className="rounded-full cursor-default group-hover:bg-accent/80 transition-colors duration-300"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
