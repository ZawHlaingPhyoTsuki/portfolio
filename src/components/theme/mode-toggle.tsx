'use client';

import { useTheme } from 'next-themes';
import { HugeiconsIcon } from '@hugeicons/react';
import { Moon02Icon, Sun01Icon } from '@hugeicons/core-free-icons';

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      title={isDark ? 'Switch to light' : 'Switch to dark'}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <HugeiconsIcon
        icon={Sun01Icon}
        className="absolute h-4 w-4 rotate-0 scale-100 opacity-100 transition-all duration-500 dark:-rotate-90 dark:scale-50 dark:opacity-0"
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        className="absolute h-4 w-4 -rotate-90 scale-50 opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
