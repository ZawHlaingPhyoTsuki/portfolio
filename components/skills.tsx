"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  frameworkSkillsData,
  languageSkillsData,
  toolsAndLibrariesData,
} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      {/* Languages Section */}
      <div className="mb-12">
        <motion.h2
          className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          💻 Languages
        </motion.h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {languageSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-sm hover:shadow-md transition-shadow"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Frameworks Section */}
      <div className="mb-12">
        <motion.h2
          className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          ⚡ Frameworks & Runtimes
        </motion.h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {frameworkSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-sm hover:shadow-md transition-shadow"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tools & Libraries Section */}
      <div className="mb-12">
        <motion.h2
          className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          🛠️ Tools, Libraries & Packages
        </motion.h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {toolsAndLibrariesData.map((skill, index) => (
            <motion.li
              className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-sm hover:shadow-md transition-shadow"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
