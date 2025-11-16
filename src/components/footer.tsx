"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { links } from "@/lib/data";
import { FacebookLogo, GithubLogo, LinkedInLogo, XLogo } from "./icons";
import Logo from "./navbar/logo";

const socialLinks = [
  {
    icon: GithubLogo,
    href: "https://github.com/ZawHlaingPhyoTsuki",
    label: "GitHub",
  },
  {
    icon: FacebookLogo,
    href: "https://www.facebook.com/ZawHlaingPhyo.23",
    label: "Facebook",
  },
  {
    icon: LinkedInLogo,
    href: "https://www.linkedin.com/in/zaw-hlaing-phyo-6734052a2/",
    label: "LinkedIn",
  },
  {
    icon: XLogo,
    href: "https://x.com/ZawHlaingPhyo",
    label: "X (Twitter)",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(var(--background), 0.8)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Logo />
            </motion.div>
            <span className="font-semibold text-foreground">
              Zaw Hlaing Phyo
            </span>
          </motion.div>

          {/* Navigation Links */}
          <motion.ul
            className="mt-6 flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {links.map(({ title, href }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Separator />

        {/* Bottom Section */}
        <motion.div
          className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.span
            className="text-muted-foreground"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Zaw Hlaing Phyo. All rights reserved.
          </motion.span>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-5 text-muted-foreground"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className="hover:text-foreground transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
