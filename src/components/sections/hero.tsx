import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkBadge01Icon, ChevronRightIcon } from '@hugeicons/core-free-icons';
import { profile } from '@/data';
import PixelTransition from '@/components/react-bits/pixel-transition';
import { OutlineDashedBadge } from '@/components/outline-dashed-badge';
import { SkillIcon } from '@/components/skill-icon';
import Image from 'next/image';

const [headlineMain, headlineRest] = profile.headline.split(' — ');

function renderBio(text: string) {
  const matches = profile.bioSkills
    .map((name) => ({ name, index: text.indexOf(name) }))
    .filter((m) => m.index !== -1)
    .sort((a, b) => a.index - b.index);

  const nodes: React.ReactNode[] = [];
  let pos = 0;
  for (const { name, index } of matches) {
    if (index < pos) continue;
    if (index > pos) nodes.push(text.slice(pos, index));
    nodes.push(
      <OutlineDashedBadge key={name} className="gap-2 px-3 py-1.5 text-sm text-muted-foreground">
        <SkillIcon name={name} />
        {name}
      </OutlineDashedBadge>,
    );
    pos = index + name.length;
  }
  if (pos < text.length) nodes.push(text.slice(pos));
  return nodes;
}

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 pt-6 pb-2 sm:pt-16">
      <div className="space-y-6 sm:space-y-10 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">
        <div className="mb-4 flex items-center gap-4 sm:gap-6">
          <PixelTransition
            className="h-32 w-32 shrink-0 rounded-full border-2 border-border bg-card text-foreground shadow-sm sm:h-40 sm:w-40"
            firstContent={
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={160}
                height={160}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            }
            secondContent={
              <Image
                src="/placeholder.svg"
                alt={profile.name}
                width={160}
                height={160}
                className="h-full w-full bg-muted object-cover"
              />
            }
            pixelColor="#ffffff"
            gridSize={12}
          />

          <div className="flex flex-col justify-center gap-2.5 sm:gap-3">
            <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {profile.name}
              {profile.verified && (
                <HugeiconsIcon
                  icon={CheckmarkBadge01Icon}
                  aria-label="Verified"
                  className="h-6 w-6 shrink-0 text-brand"
                />
              )}
            </h1>
            <div className="flex items-start gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  aria-label={social.name}
                  className="rounded-sm text-xl text-muted-foreground opacity-70 outline-none transition-all hover:-translate-y-0.5 hover:text-foreground hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                  <HugeiconsIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-foreground md:text-4xl">
            {headlineMain}{' '}
            {headlineRest && (
              <span className="font-light text-muted-foreground">— {headlineRest}</span>
            )}
          </h2>

          <p className="max-full text-base font-light leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {renderBio(profile.bio)}
          </p>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            View Resume
            <HugeiconsIcon
              icon={ChevronRightIcon}
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
