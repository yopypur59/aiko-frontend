import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { headers } from 'next/headers';
import { ThemeProvider } from '@/components/app/theme-provider';
import { ThemeToggle } from '@/components/app/theme-toggle';
import { cn } from '@/lib/shadcn/utils';
import { getAppConfig, getStyles } from '@/lib/utils';
import '@/styles/globals.css';

const inter = Inter({
  variable: '--font-public-sans',
  subsets: ['latin'],
  display: 'swap',
});

const commitMono = localFont({
  display: 'swap',
  variable: '--font-commit-mono',
  src: [
    {
      path: '../fonts/CommitMono-400-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/CommitMono-700-Regular.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/CommitMono-400-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/CommitMono-700-Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const hdrs = await headers();
  const appConfig = await getAppConfig(hdrs);
  const styles = getStyles(appConfig);
  const { pageTitle, pageDescription } = appConfig;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, commitMono.variable, 'scroll-smooth font-sans antialiased')}
    >
      <head>
        {styles && <style>{styles}</style>}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* AIKO top bar — minimal, always visible */}
          <header className="fixed top-0 left-0 z-50 flex w-full flex-row items-center justify-between px-6 py-4">
            {/* AIKO wordmark */}
            <span
              className="text-foreground/70 text-sm font-bold tracking-[0.25em] uppercase transition-opacity select-none hover:opacity-100"
              aria-label="AIKO AI Voice Assistant"
            >
              AIKO
            </span>

            {/* Theme toggle */}
            <ThemeToggle />
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
