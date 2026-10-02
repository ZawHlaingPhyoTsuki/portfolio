import type { Metadata } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { cn } from 'cn';
import { TooltipProvider } from '@/components/ui/tooltip';
import { profile } from '@/data/profile';
import { pageMeta, SITE_URL } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  ...pageMeta(
    'Zaw Hlaing Phyo | Full-Stack Developer',
    'Full-stack developer in Bangkok, Thailand. Building web apps with Next.js, TypeScript, React, and PostgreSQL.',
    '/',
  ),
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/pf.png`,
  jobTitle: 'Full-Stack Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangkok',
    addressCountry: 'TH',
  },
  sameAs: profile.socials.map((social) => social.url),
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Node.js'],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('h-full', 'antialiased', geistMono.variable, 'font-sans', inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            <div className="grow w-full">{children}</div>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
