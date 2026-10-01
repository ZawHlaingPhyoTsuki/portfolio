import { unstable_cache } from 'next/cache';

import type { Activity } from '@/components/github/contribution-graph';

type GitHubContributionsResponse = {
  contributions?: Activity[];
};

async function fetchContributions(username: string): Promise<Activity[]> {
  const apiUrl = process.env.GITHUB_CONTRIBUTIONS_API_URL;

  if (!apiUrl) {
    console.error('GITHUB_CONTRIBUTIONS_API_URL is not set');
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/${encodeURIComponent(username)}?y=last`, {
      next: {
        revalidate: 86400,
      },
    });

    if (!res.ok) {
      console.error(`GitHub contributions API failed: ${res.status}`);
      return [];
    }

    const data = (await res.json()) as GitHubContributionsResponse;

    return Array.isArray(data.contributions) ? data.contributions : [];
  } catch (error) {
    console.error('Failed to fetch GitHub contributions:', error);
    return [];
  }
}

export const getCachedContributions = unstable_cache(fetchContributions, ['github-contributions'], {
  revalidate: 86400,
});
