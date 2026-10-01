import Stack from '@/components/react-bits/stack';
import { hobby } from '@/data';
import { SectionHeading } from '@/components/section-heading';
import { OutlineDashedBadge } from '@/components/outline-dashed-badge';

export function OutsideIde() {
  return (
    <section id="outside" className="scroll-mt-20">
      <SectionHeading className="mb-5 sm:mb-6">Outside the IDE</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
        {/* Left: Bio  */}
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-muted-foreground">{hobby.content}</p>
          <div className="flex flex-wrap gap-2">
            {hobby.tags.map((tag) => (
              <OutlineDashedBadge
                key={tag}
                className="rounded-md px-2 py-1 text-xs sm:text-sm text-muted-foreground"
              >
                {tag}
              </OutlineDashedBadge>
            ))}
          </div>
        </div>

        {/* Right: Stack  */}
        <div className="relative mx-auto h-56 w-56">
          <Stack autoplay autoplayDelay={3000} pauseOnHover randomRotation />
        </div>
      </div>
    </section>
  );
}
