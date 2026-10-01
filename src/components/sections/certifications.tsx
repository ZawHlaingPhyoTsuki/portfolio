import { certifications } from '@/data';
import { SectionHeading } from '@/components/section-heading';

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20">
      <SectionHeading className="mb-8">Certifications &amp; Training</SectionHeading>
      <ul className="border-b border-border">
        {certifications.map((cert, index) => (
          <li
            key={`${cert.date}-${index}`}
            className="flex flex-col gap-1 border-t border-border py-4 sm:flex-row sm:gap-8"
          >
            <span className="shrink-0 text-sm text-muted-foreground sm:w-28 sm:pt-0.5">
              {cert.date}
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-semibold text-foreground">{cert.name}</p>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="text-xs text-muted-foreground/80">
                  Credential ID: {cert.credentialId}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
