"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FacebookLogo, GithubLogo } from "../icons";
import Logo from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed z-100 top-6 inset-x-4 h-14 bg-background/80 backdrop-blur-sm border dark:border-slate-700/70 max-w-3xl mx-auto rounded-full shadow-lg shadow-black/3"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="h-full flex items-center justify-between mx-auto px-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(var(--accent), 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-1 py-1 rounded-full border hover:bg-accent/30 cursor-pointer transition-all duration-200"
        >
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          {/* GitHub Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            // transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              variant="outline"
              className="rounded-full shadow-none hover:bg-gray-900/10 hover:border-gray-900/20 hover:text-gray-900 dark:hover:bg-gray-100/10 dark:hover:border-gray-100/20 dark:hover:text-gray-100 transition-all duration-200 flex items-center justify-center group"
              size="icon"
              asChild
            >
              <a
                href="https://github.com/ZawHlaingPhyoTsuki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <GithubLogo className="h-5 w-5" />
                </motion.div>
              </a>
            </Button>
          </motion.div>

          {/* Facebook Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            // transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              variant="outline"
              className="rounded-full shadow-none hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center justify-center group"
              size="icon"
              asChild
            >
              <a
                href="https://www.facebook.com/ZawHlaingPhyo.23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FacebookLogo className="h-5 w-5" />
                </motion.div>
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1, y: -1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavigationSheet />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
