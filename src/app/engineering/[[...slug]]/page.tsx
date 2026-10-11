import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { source } from '@/lib/source';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const slug = params.slug ?? [];

  if (slug.length === 0) {
    const article = source.getPage(['tcl-guide']);
    const articleUrl = article?.url ?? '/engineering/tcl-guide';
    const articleTitle = article?.data.title ?? 'TCL Guide — Building a Local Discovery Platform';
    const articleDescription =
      article?.data.description ??
      'A full-stack case study of building a food-business discovery platform for Tachileik, Myanmar.';

    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-10 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Engineering
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Case studies and technical notes from real product work.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            This section documents the engineering decisions, product trade-offs, and implementation
            details behind the projects I build and ship.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <Link
            href={articleUrl}
            className="group rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-foreground/20 hover:bg-accent/30"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Featured case study
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {articleTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {articleDescription}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
              Read the case study
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </Link>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Current focus
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Product engineering and architecture documentation</li>
              <li>• Full-stack application design and deployment trade-offs</li>
              <li>• API and database patterns for real-world products</li>
              <li>• Lessons learned from shipping and iterating on local discovery tools</li>
            </ul>
          </div>
        </section>
      </main>
    );
  }

  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug ?? [];

  if (slug.length === 0) {
    return {
      title: 'Engineering',
      description: 'Engineering case studies and technical notes from my product work.',
    };
  }

  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
