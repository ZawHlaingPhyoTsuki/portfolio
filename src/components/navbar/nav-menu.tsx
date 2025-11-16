"use client";

import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { motion } from "motion/react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";

export function NavMenu({ className, ...props }: NavigationMenuProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <NavigationMenu
      className={cn("data-[orientation=vertical]:items-start", className)}
      {...props}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {links.map((link, index) => (
          <NavigationMenuItem
            key={link.title}
            className="flex items-center justify-center relative"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex w-full items-center justify-center px-3 py-2 rounded-full text-sm font-medium transition-colors relative z-10 group",
                  "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  activeSection === link.title
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
                onClick={() => {
                  setActiveSection(link.title);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {link.title}
                </motion.span>

                {activeSection === link.title && (
                  <motion.span
                    className="bg-accent rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    whileHover={{ scale: 1.02 }}
                  />
                )}
              </Link>
            </motion.div>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
