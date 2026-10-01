import { ChevronRightIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { experiences } from '@/data';
import { SectionHeading } from '@/components/section-heading';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 space-y-6">
      <div className="flex items-center justify-between">
        <SectionHeading>Experience</SectionHeading>
        <Link
          href="/experience"
          className="group inline-flex items-center gap-1 text-sm text-subtle-foreground transition-colors hover:text-foreground"
        >
          <span>View Details</span>
          <HugeiconsIcon
            icon={ChevronRightIcon}
            aria-hidden
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
      <div className="space-y-7 sm:space-y-8">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.period}`} className="sm:flex sm:gap-6">
            <p className="mb-1 shrink-0 whitespace-nowrap text-xs font-medium text-subtle-foreground sm:mb-0 sm:w-40 sm:pt-1">
              {exp.period}
            </p>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg">
                {exp.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground/80">{exp.company}</p>
              {exp.location && (
                <p className="mt-0.5 text-sm text-muted-foreground">{exp.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceTimeline() {
  const last = experiences.length - 1;

  return (
    <div>
      {experiences.map((exp, index) => (
        <div key={`${exp.company}-${exp.period}`} className="relative flex gap-5 sm:gap-6">
          <div className="relative flex flex-col items-center">
            <span className="z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full bg-foreground ring-4 ring-background" />
            {index !== last && <span className="w-px flex-1 bg-border" />}
          </div>
          <div className={`flex-1 ${index === last ? 'pb-0' : 'pb-10'}`}>
            <p className="text-xs font-medium text-subtle-foreground">{exp.period}</p>
            <h3 className="mt-1 text-base font-semibold leading-tight text-foreground sm:text-lg">
              {exp.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-foreground/80">{exp.company}</p>
            {exp.location && <p className="mt-0.5 text-sm text-muted-foreground">{exp.location}</p>}
            <ul className="mt-3 max-w-xl list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
              {exp.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
