import React, { Suspense } from 'react';
import { SectionHeading } from '../section-heading';
import { GitHubContributions, GitHubContributionsFallback } from '../github/github-contributions';
import { getCachedContributions } from '@/data/lib/get-cached-contributions';
import { profile } from '@/data';

export default function GithubActivity() {
  return (
    <section id="github" className="scroll-mt-20">
      <SectionHeading className="mb-8">GitHub Activity</SectionHeading>

      <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions
          contributions={getCachedContributions(profile.github)}
          githubProfileUrl={`https://github.com/${profile.github}`}
        />
      </Suspense>
    </section>
  );
}
