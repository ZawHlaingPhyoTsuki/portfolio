import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { TechStackCategories } from '@/components/sections/tech-stack';
import { FadeUp } from '@/components/motion/fade-up';

export const metadata: Metadata = {
  title: 'Tech Stack | Zaw Hlaing Phyo',
  description: 'Languages, frameworks, databases, and tools I build with.',
};

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
