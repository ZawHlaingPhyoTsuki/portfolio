import { HugeiconsIcon } from '@hugeicons/react';
import { ChevronRightIcon } from '@hugeicons/core-free-icons';
import { cn } from 'cn';
import { contactInfo } from '@/data';
import { SectionHeading } from '@/components/section-heading';

export function Contact() {
  return (
    <section id="contact" className="w-full space-y-5 scroll-mt-20">
      <SectionHeading className="mb-5 sm:mb-6">Let's work together.</SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Content */}
        <div className="space-y-4">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Available for freelance web development and full-stack projects, from new builds to
            existing websites. I also help improve SEO, Google Search visibility, and Google
            Business Profile presence.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {contactInfo.map((method) => {
            const content = (
              <>
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-muted/80">
                    <HugeiconsIcon icon={method.icon} className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                      {method.title}
                    </span>

                    <p className="truncate text-sm font-normal text-foreground">{method.value}</p>
                  </div>
                </div>

                {method.href && (
                  <HugeiconsIcon
                    icon={ChevronRightIcon}
                    className="h-4 w-4 shrink-0 text-border transition-all group-hover:translate-x-1 group-hover:text-foreground"
                  />
                )}
              </>
            );

            const rowClass = cn(
              'group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-4',
              'shadow-sm transition-all',
              'hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md',
            );

            return method.href ? (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  rowClass,
                  'outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
                )}
              >
                {content}
              </a>
            ) : (
              <div key={method.title} className={rowClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
