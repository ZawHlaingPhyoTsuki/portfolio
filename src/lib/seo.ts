import type { Metadata } from 'next';

export const SITE_URL = 'https://www.zawhlaingphyo.dev';
export const SITE_NAME = 'Zaw Hlaing Phyo';

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: path,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
