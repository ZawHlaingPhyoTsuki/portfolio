import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { projects } from '@/data';
import type { Project } from '@/types';
import { findSkill } from '@/data/lib/skill-icons';
import { SectionHeading } from '@/components/section-heading';
import SpotlightCard from '@/components/react-bits/spotlight-card';
import { OutlineDashedBadge } from '@/components/outline-dashed-badge';
import { SkillIcon } from '@/components/skill-icon';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full">
      <SpotlightCard className="group flex h-full w-full flex-col gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.title}
          className="block overflow-hidden rounded-lg border border-border"
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={800}
            height={400}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-40 w-full object-cover object-top transition-transform duration-500 ease-out group-hover/image:scale-105"
          />
        </a>

        <div className="mt-1 flex flex-1 flex-col px-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-lg font-semibold leading-none tracking-tight text-foreground outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {project.title}
          </a>
          <p className="mt-1.5 text-xs font-semibold text-foreground/80">{project.role}</p>
          <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>

          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-3">
            {project.technologies.map((tech) =>
              findSkill(tech) ? (
                <Tooltip key={tech}>
                  <TooltipTrigger>
                    <SkillIcon key={tech} name={tech} alt={tech} className="h-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech}</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <OutlineDashedBadge key={tech} title={tech} className="px-2 py-1 text-xs">
                  {tech}
                </OutlineDashedBadge>
              ),
            )}
          </div>
        </div>

        <div className="mt-auto">
          <div className="mb-1 mt-1.5 h-px w-full bg-border" />
          <div className="flex min-h-9 items-center justify-end gap-3 px-2 pb-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-sm font-mono text-2xs uppercase tracking-widest text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <span>Visit Site</span>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-sm font-mono text-2xs uppercase tracking-widest text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <span>Source</span>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </SpotlightCard>
    </article>
  );
}

export function Projects({
  limit,
  showExplore = false,
  showHeading = true,
}: {
  limit?: number;
  showExplore?: boolean;
  showHeading?: boolean;
}) {
  const items = limit ? projects.slice(0, limit) : projects;
  const remaining = projects.length - items.length;

  return (
    <section id="projects" className="scroll-mt-20">
      {showHeading && <SectionHeading className="mb-5 sm:mb-6">Projects</SectionHeading>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {showExplore && remaining > 0 && (
        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/projects"
            className={buttonVariants({
              className: 'group h-auto rounded-full px-4 py-2 text-sm font-medium',
            })}
          >
            Explore +{remaining} projects
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              data-icon="inline-end"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      )}
    </section>
  );
}
