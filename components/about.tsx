"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate{" "}
        <span className="font-bold">full-stack developer</span> currently
        studying{" "}
        <span className="font-bold">Digital Technologies Innovation</span> at{" "}
        <span className="font-bold">Kasem Bundit University, Bangkok</span>. I
        specialize in modern web technologies including{" "}
        <span className="font-bold">TypeScript, React, Next.js, NestJS,</span>{" "}
        and <span className="font-bold">PostgreSQL</span>.
      </p>

      <p className="mb-3">
        I'm actively contributing to{" "}
        <span className="font-bold">community-driven projects</span> through{" "}
        <span className="font-bold">"One Project One Month"</span>, where I
        develop backend systems for a{" "}
        <span className="underline">Utility Management System </span>
        and collaborate on a{" "}
        <span className="underline">social-style platform</span> for developers
        to showcase portfolios and form teams.
      </p>

      <p>
        I'm passionate about building{" "}
        <span className="underline">scalable</span> and{" "}
        <span className="underline">efficient</span> full-stack applications
        using modern tools like{" "}
        <span className="font-bold">Prisma, Docker,</span> and{" "}
        <span className="font-bold">Shadcn-ui</span>. Currently expanding my
        expertise in <span className="font-bold">Java, Spring Boot,</span> and{" "}
        <span className="font-bold">containerization</span> to enhance my
        backend development skills.
      </p>
    </motion.section>
  );
}
