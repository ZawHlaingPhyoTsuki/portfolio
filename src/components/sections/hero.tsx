"use client";

import { CircleArrowDown, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className="rounded-full border-none">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Zap className="fill-current" />
            </motion.div>
            Fullstack Developer
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bridging Design & Development with Modern Web Technologies
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 text-[17px] md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Hey there! I&apos;m{" "}
          <motion.span
            className="font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Zaw Hlaing Phyo
          </motion.span>{" "}
          <motion.span
            className="italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            (Zee)
          </motion.span>
          , a{" "}
          <motion.span
            className="font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Full Stack Developer
          </motion.span>
          , enthusiastic about learning and growing in real-world projects. My
          focus is{" "}
          <motion.span
            className="font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            React (Next.js)
          </motion.span>{" "}
          &{" "}
          <motion.span
            className="font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Node.js
          </motion.span>{" "}
          <motion.span
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            🚀
          </motion.span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              onClick={() => {
                setActiveSection("projects");
                setTimeOfLastClick(Date.now());
              }}
              size="lg"
              className="rounded-full text-base group relative overflow-hidden"
              asChild
            >
              <Link href="#projects">
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.6 }}
                  className="flex items-center"
                >
                  See What I Do
                  <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.7 }}
                    className="ml-2"
                  >
                    <CircleArrowDown className="h-5.5! w-5.5!" />
                  </motion.div>
                </motion.span>

                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              />
            </div>
            <span className="text-sm">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
