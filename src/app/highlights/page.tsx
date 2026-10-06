import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Highlights } from '@/components/sections/highlights';
import { FadeUp } from '@/components/motion/fade-up';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta(
  'Highlights | Zaw Hlaing Phyo',
  'Selected work, builds, and community moments from my journey in tech.',
  '/highlights',
);

export default function HighlightsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <FadeUp>
        <PageHeader
          title="Highlights"
          subtitle="Selected work, builds, and community moments from my journey in tech."
        />
      </FadeUp>
      <FadeUp delay={0.1}>
        <Highlights />
      </FadeUp>
    </main>
  );
}
