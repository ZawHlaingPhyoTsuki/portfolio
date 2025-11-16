"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";
import { GithubLogo } from "../icons";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <section ref={ref} id="about" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <ProfileImage className="shrink-0" />

          {/* Content */}
          <div className="flex-1">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              Passionate about creating impactful web experiences
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I'm a passionate full-stack developer currently studying Digital
                Technologies Innovation at Kasem Bundit University, Bangkok. I
                specialize in modern web technologies including{" "}
                <span className="text-foreground font-medium">
                  TypeScript, React, Next.js, NestJS, and PostgreSQL
                </span>
                .
              </p>

              <p className="leading-relaxed">
                I'm actively contributing to community-driven projects through{" "}
                <span className="text-foreground font-medium">
                  "One Project One Month"
                </span>
                , where I develop backend systems for a Utility Management
                System and collaborate on a social-style platform for developers
                to showcase portfolios and form teams.
              </p>

              <p className="leading-relaxed">
                I'm passionate about building{" "}
                <span className="text-foreground font-medium">
                  scalable and efficient full-stack applications
                </span>
                using modern tools like{" "}
                <span className="text-foreground font-medium">
                  Prisma, Docker, and Shadcn-ui
                </span>
                . Currently expanding my expertise in{" "}
                <span className="text-foreground font-medium">
                  Java, Spring Boot, and containerization
                </span>
                to enhance my backend development skills.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="rounded-full gap-2">
                <GithubLogo className="w-4 h-4" />
                View GitHub
              </Button>
              <Button variant="outline" className="rounded-full gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileImage({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-48 h-48 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-accent border-4 border-background shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="relative w-full h-full">
        <Image
          src="/placeholder.svg"
          alt="Profile photo of Zaw Hlaing Phyo"
          className="object-cover"
          fill
          priority
        />
      </div>
    </div>
  );
}
