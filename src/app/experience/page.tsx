import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { ExperienceTimeline } from '@/components/sections/experience';
import { FadeUp } from '@/components/motion/fade-up';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta(
  'Experience | Zaw Hlaing Phyo',
  "Where I've worked and what I did there.",
  '/experience',
);

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <FadeUp>
        <PageHeader title="Experience" subtitle="Where I've worked and what I did there." />
      </FadeUp>
      <FadeUp delay={0.1}>
        <ExperienceTimeline />
      </FadeUp>
    </main>
  );
}
