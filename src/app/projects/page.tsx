import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Projects } from '@/components/sections/projects';
import { FadeUp } from '@/components/motion/fade-up';

export const metadata: Metadata = {
  title: 'Projects | Zaw Hlaing Phyo',
  description: 'Client work, open-source builds, and experiments by Zaw Hlaing Phyo.',
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <FadeUp>
        <PageHeader
          title="Projects"
          subtitle="Client work, open-source builds, and experiments — the full list."
        />
      </FadeUp>
      <FadeUp delay={0.1}>
        <Projects showHeading={false} />
      </FadeUp>
    </main>
  );
}
