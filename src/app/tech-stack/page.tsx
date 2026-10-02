import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { TechStackCategories } from '@/components/sections/tech-stack';
import { FadeUp } from '@/components/motion/fade-up';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta(
  'Tech Stack | Zaw Hlaing Phyo',
  'Languages, frameworks, databases, and tools I build with.',
  '/tech-stack',
);

export default function TechStackPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <FadeUp>
        <PageHeader
          title="Tech Stack"
          subtitle="Languages, frameworks, databases, and tools I build with."
        />
      </FadeUp>
      <FadeUp delay={0.1}>
        <TechStackCategories />
      </FadeUp>
    </main>
  );
}
