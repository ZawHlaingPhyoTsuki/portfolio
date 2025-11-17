"use client";

import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";
import { NavMenu } from "./nav-menu";

export function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <motion.div
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <Menu />
            </motion.div>
          </Button>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6 z-999">
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </motion.div>
          <SheetDescription className="hidden" />
          <motion.span
            className="font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Zaw Hlaing Phyo
          </motion.span>
        </motion.div>
        <NavMenu orientation="vertical" className="mt-4" />
      </SheetContent>
    </Sheet>
  );
}
