'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import type { Project } from '@/types';
import { SectionHeading } from '@/components/section-heading';

export type FeaturedItem = Project & { imageSrc: string | null };

export function Featured({ items }: { items: FeaturedItem[] }) {
  const [active, setActive] = useState(0);

  if (items.length === 0) return null;

  return (
    <section id="highlights" className="scroll-mt-20">
      <SectionHeading className="mb-5 sm:mb-6">Featured Work</SectionHeading>
      <ul aria-label="Featured projects" className="flex h-72 w-full gap-2.5 sm:h-80">
        {items.map((project, index) => {
          const isActive = index === active;
          const image = project.imageSrc;

          return (
            <li
              key={project.title}
              className="relative min-w-0 flex-1 overflow-hidden rounded-xl transition-all duration-500 ease-out"
              style={{ flexGrow: isActive ? 3 : 1 }}
            >
              {image ? (
                <Image
                  src={image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 640px) 60vw, 100vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted">
                  <span className="text-xs text-muted-foreground">[screenshot placeholder]</span>
                </div>
              )}

              {!isActive && <div aria-hidden="true" className="absolute inset-0 bg-black/40" />}

              <button
                type="button"
                aria-label={`Show ${project.title}`}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className="absolute inset-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/50"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 sm:p-5">
                {isActive ? (
                  <div className="flex flex-col gap-1 text-white">
                    <p className="text-xs font-medium text-white/75">{project.role}</p>
                    <p className="text-lg font-semibold leading-tight sm:text-xl">
                      {project.title}
                    </p>
                    <p className="line-clamp-2 hidden text-sm text-white/75 sm:block">
                      {project.description}
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto mt-1.5 inline-flex w-fit items-center gap-1 rounded-sm text-xs font-medium text-white outline-none hover:underline focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      Visit site
                      <HugeiconsIcon icon={ArrowUpRight01Icon} className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col text-white">
                    <p className="line-clamp-2 text-sm font-medium leading-tight">
                      {project.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-white/75">{project.role}</p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
