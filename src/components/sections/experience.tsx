"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { experiences } from "@/lib/data";
import ExperienceItem from "../experience-item";

export default function Experience() {
  const { ref } = useSectionInView("experience", 0.5);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="relative py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Experience
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional Journey
          </motion.h2>

          <motion.p
            className="text-muted-foreground mt-2 sm:mt-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A timeline of my professional growth and key achievements
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.description}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <ExperienceItem {...experience} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
