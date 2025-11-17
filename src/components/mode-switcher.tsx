"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function FloatingModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          className="size-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg"
          aria-label="Toggle theme"
        >
          <div className="size-5" />
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        delay: 0.1,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative"
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="group size-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 flex items-center justify-center relative overflow-hidden"
          onClick={toggleTheme}
          title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-secondary/20"
            initial={false}
            animate={{
              opacity: resolvedTheme === "dark" ? 0.3 : 0.1,
              scale: resolvedTheme === "dark" ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Icon container */}
          <motion.div
            key={resolvedTheme}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.4,
            }}
            className="relative z-10"
          >
            <AnimatePresence mode="wait">
              {resolvedTheme === "dark" ? (
                <motion.svg
                  key="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <title>Sun</title>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <title>Moon</title>
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Pulsing ring effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </Button>

        {/* Tooltip */}
        <motion.div
          className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-md whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
