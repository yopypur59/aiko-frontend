'use client';

import { useTheme } from 'next-themes';
import { MonitorIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/shadcn/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        'text-foreground/60 bg-background/80 border-border/60 flex flex-row items-center divide-x overflow-hidden rounded-full border shadow-sm backdrop-blur-sm',
        className
      )}
    >
      <span className="sr-only">Color scheme toggle</span>
      <button
        type="button"
        onClick={() => setTheme('light')}
        title="Light mode"
        className={cn(
          'hover:text-foreground cursor-pointer px-2 py-1.5 transition-colors duration-150',
          theme === 'light' && 'text-foreground'
        )}
      >
        <span className="sr-only">Enable light color scheme</span>
        <SunIcon
          suppressHydrationWarning
          size={14}
          weight={theme === 'light' ? 'fill' : 'regular'}
        />
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        title="Dark mode"
        className={cn(
          'hover:text-foreground cursor-pointer px-2 py-1.5 transition-colors duration-150',
          theme === 'dark' && 'text-foreground'
        )}
      >
        <span className="sr-only">Enable dark color scheme</span>
        <MoonIcon
          suppressHydrationWarning
          size={14}
          weight={theme === 'dark' ? 'fill' : 'regular'}
        />
      </button>
      <button
        type="button"
        onClick={() => setTheme('system')}
        title="System theme"
        className={cn(
          'hover:text-foreground cursor-pointer px-2 py-1.5 transition-colors duration-150',
          theme === 'system' && 'text-foreground'
        )}
      >
        <span className="sr-only">Enable system color scheme</span>
        <MonitorIcon
          suppressHydrationWarning
          size={14}
          weight={theme === 'system' ? 'fill' : 'regular'}
        />
      </button>
    </div>
  );
}
