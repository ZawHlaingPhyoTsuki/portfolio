import { education } from '@/data';
import { SectionHeading } from '@/components/section-heading';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <SectionHeading className="mb-6 sm:mb-8">Education</SectionHeading>
      <div className="space-y-7 sm:space-y-8">
        {education.map((edu) => (
          <div key={`${edu.school}-${edu.period}`} className="sm:flex sm:gap-6">
            <p className="mb-1 shrink-0 whitespace-nowrap text-xs font-medium text-subtle-foreground sm:mb-0 sm:w-36 sm:pt-1">
              {edu.period}
            </p>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{edu.school}</p>
              {edu.campus && <p className="text-sm text-muted-foreground">{edu.campus}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
