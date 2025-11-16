"use client";

import { CircleArrowDown, Zap } from "lucide-react";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden"
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12",
        )}
      />
      <div className="relative z-1 text-center max-w-3xl">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Fullstack Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight">
          {/* Building Scalable & Engaging Web Experiences */}
          Bridging Design & Development with Modern Web Technologies
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Hey there! I&apos;m{" "}
          <span className="font-semibold">Zaw Hlaing Phyo</span>{" "}
          <span className="italic">(Zee)</span>, a{" "}
          <span className="font-semibold">Full Stack Developer</span>,
          enthusiastic about learning and growing in real-world projects. My
          focus is <span className="font-semibold">React (Next.js)</span> &{" "}
          <span className="font-semibold">Node.js</span> 🚀
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            onClick={() => {
              setActiveSection("Projects");
              setTimeOfLastClick(Date.now());
            }}
            size="lg"
            className="rounded-full text-base"
            asChild
          >
            <Link href="#projects">
              See What I Do <CircleArrowDown className="ml-2 h-5.5! w-5.5!" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
