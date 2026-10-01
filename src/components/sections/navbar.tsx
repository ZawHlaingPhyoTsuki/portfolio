'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from 'cn';
import { navLinks, profile } from '@/data';
import { ModeToggle } from '@/components/theme/mode-toggle';

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 motion-safe:duration-500"
      >
        <Link
          href="/"
          className="rounded-sm text-sm font-bold text-foreground outline-none transition-colors hover:text-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          {profile.initials}
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-3 sm:gap-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative whitespace-nowrap rounded-sm text-xs outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 sm:text-sm',
                    active ? 'text-foreground' : 'text-subtle-foreground',
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-foreground"
                      layoutId={reduceMotion ? undefined : 'nav-underline'}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="h-5 w-px bg-border" aria-hidden="true" />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
