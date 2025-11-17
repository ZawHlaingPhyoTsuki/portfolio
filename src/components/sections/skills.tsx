"use client";

import { Code2, Database, Library, Wrench } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { skillsData } from "@/lib/skill-icons";
import SkillCategory from "../skill-category";

const categoryIcons = {
  languages: Code2,
  frameworks: Library,
  databases: Database,
  tools: Wrench,
};

export default function Skills() {
  const { ref } = useSectionInView("skills", 0.5);

  return (
    <section ref={ref} id="skills" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical stack across different
            domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SkillCategory
              title={skillsData.languages.title}
              skills={skillsData.languages.skills}
              description={skillsData.languages.description}
              icon={categoryIcons.languages}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillCategory
              title={skillsData.frameworks.title}
              skills={skillsData.frameworks.skills}
              description={skillsData.frameworks.description}
              icon={categoryIcons.frameworks}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillCategory
              title={skillsData.databases.title}
              skills={skillsData.databases.skills}
              description={skillsData.databases.description}
              icon={categoryIcons.databases}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillCategory
              title={skillsData.tools.title}
              skills={skillsData.tools.skills}
              description={skillsData.tools.description}
              icon={categoryIcons.tools}
            />
          </motion.div>
        </div>

        {/* Fav Technology Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Favourite Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              skillsData.languages.skills[0], // TypeScript
              skillsData.frameworks.skills[0], // React
              skillsData.frameworks.skills[1], // Next.js
              skillsData.frameworks.skills[2], // NestJS
              skillsData.databases.skills[4], // Prisma
              skillsData.languages.skills[2], // Java
              skillsData.frameworks.skills[4], // Spring Boot
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                // whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 group"
              >
                <motion.div
                  whileHover={{ scale: 1.09 }}
                  transition={{ duration: 0 }}
                  className="p-3 bg-background border rounded-xl group-hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    width={48}
                    height={48}
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12"
                  />
                </motion.div>
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
