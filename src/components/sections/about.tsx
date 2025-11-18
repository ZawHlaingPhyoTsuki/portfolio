"use client";

import { Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";
import { GithubLogo } from "../icons";

export default function About() {
  const { ref } = useSectionInView("about", 1);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProfileImage className="shrink-0" />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                About Me
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Passionate about creating impactful web experiences
            </motion.h2>

            {/* Content Paragraphs */}
            <motion.div
              className="space-y-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I'm a passionate full-stack developer currently studying Digital
                Technologies Innovation at Kasem Bundit University, Bangkok. I
                specialize in modern web technologies including{" "}
                <motion.span
                  className="text-foreground font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  TypeScript, React, Next.js, NestJS, and PostgreSQL
                </motion.span>
                .
              </motion.p>

              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                I'm actively contributing to community-driven projects through{" "}
                <motion.span
                  className="text-foreground font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  "One Project One Month"
                </motion.span>
                , where I develop backend systems for a Utility Management
                System and collaborate on a social-style platform for developers
                to showcase portfolios and form teams.
              </motion.p>

              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                I'm passionate about building{" "}
                <motion.span
                  className="text-foreground font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  scalable and efficient full-stack applications
                </motion.span>
                using modern tools like{" "}
                <motion.span
                  className="text-foreground font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  Prisma, Docker, and Shadcn-ui
                </motion.span>
                . Currently expanding my expertise in{" "}
                <motion.span
                  className="text-foreground font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Java, Spring Boot, and CI/CD{" "}
                </motion.span>
                to enhance my backend development skills.
              </motion.p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {/* GitHub */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="https://github.com/ZawHlaingPhyoTsuki"
                  target="_blank"
                  className={cn(
                    buttonVariants(),
                    "rounded-full gap-2 group relative overflow-hidden",
                  )}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GithubLogo className="w-4 h-4" />
                  </motion.div>
                  View GitHub
                </Link>
              </motion.div>

              {/* CV */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/resume.pdf"
                  download
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full gap-2 group",
                  )}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Download className="w-4 h-4" />
                  </motion.div>
                  Download Resume
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ProfileImage({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      className={cn(
        "w-48 h-48 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-accent border-4 border-background shadow-lg",
        className,
      )}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src="/pf.png"
          alt="Profile photo of Zaw Hlaing Phyo"
          className="object-cover"
          fill
          priority
        />
      </div>
    </motion.div>
  );
}
