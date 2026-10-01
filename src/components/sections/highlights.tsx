'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { cn } from 'cn';
import { highlights } from '@/data';
import type { HighlightCategory } from '@/types';

type Filter = 'all' | HighlightCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'work', label: 'Work' },
  { value: 'builds', label: 'Builds' },
  { value: 'community', label: 'Community' },
];

const CATEGORY_LABELS: Record<HighlightCategory, string> = {
  work: 'Work',
  builds: 'Builds',
  community: 'Community',
};

export function Highlights() {
  const [filter, setFilter] = useState<Filter>('all');
  const items =
    filter === 'all' ? highlights : highlights.filter((item) => item.category === filter);

  return (
    <>
      <fieldset
        aria-label="Filter highlights"
        className="m-0 mb-6 flex flex-wrap gap-2 border-b border-dashed border-border px-0 py-3"
      >
        {FILTERS.map((option) => {
          const active = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option.value)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
                active
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground',
              )}
            >
              {option.label}
            </button>
          );
        })}
      </fieldset>

      <section aria-label="Highlights 2025–2026">
        <div className="space-y-6 sm:space-y-7">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-5 border-b border-dashed border-border pb-6 last:border-b-0 last:pb-0 sm:flex-row sm:gap-7 sm:pb-7"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-muted sm:w-2/5">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  width={640}
                  height={360}
                  className="block h-auto w-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center sm:w-3/5">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <span>{CATEGORY_LABELS[item.category]}</span>
                  <span aria-hidden="true" className="text-border">
                    ·
                  </span>
                  <span>{item.period}</span>
                </div>
                <h2 className="text-xl font-light leading-tight tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                {item.href && item.hrefLabel && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex w-fit items-center gap-1.5 rounded-sm font-mono text-xs uppercase tracking-widest text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    <span>{item.hrefLabel}</span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
