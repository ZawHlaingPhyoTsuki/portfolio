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
        {links.map((link) => (
          <NavigationMenuItem
            key={link.title}
            className="flex items-center justify-center relative"
          >
            {/* Use a regular div instead of NavigationMenuLink to avoid focus issues */}
            <div className="relative">
              <Link
                href={link.href}
                className={cn(
                  "flex w-full items-center justify-center px-3 py-2 rounded-full text-sm font-medium transition-colors relative z-10",
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
                {link.title}

                {activeSection === link.title && (
                  <motion.span
                    className="bg-accent rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </div>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
