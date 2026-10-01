import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          className="h-4 w-4 transition-transform group-hover:-translate-x-1"
        />
        <span>Back to Home</span>
      </Link>
      <h1 className="mt-7 text-2xl font-light tracking-tight text-foreground sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
