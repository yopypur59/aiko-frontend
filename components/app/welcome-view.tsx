'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

/* ────────────────────────────────────────────────────────────
   AIKO Idle Orb — animated breathing orb with concentric rings
───────────────────────────────────────────────────────────── */
function AikoOrb() {
  return (
    <div className="relative flex items-center justify-center" aria-hidden="true">
      {/* Outermost ping ring */}
      <span
        className="aiko-ring-ping absolute inline-flex h-52 w-52 rounded-full"
        style={{ backgroundColor: 'var(--aiko-accent-glow)' }}
      />
      {/* Middle ring */}
      <span
        className="aiko-ring-ping absolute inline-flex h-44 w-44 rounded-full [animation-delay:0.8s]"
        style={{ backgroundColor: 'var(--aiko-accent-glow)' }}
      />
      {/* Core orb */}
      <div
        className="aiko-pulse relative flex h-36 w-36 items-center justify-center rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, color-mix(in srgb, var(--aiko-accent) 40%, white), color-mix(in srgb, var(--aiko-accent) 80%, transparent))',
          boxShadow:
            '0 0 60px var(--aiko-accent-glow), 0 0 120px var(--aiko-accent-glow), inset 0 1px 1px rgba(255,255,255,0.3)',
        }}
      >
        {/* Mic icon — voice identity */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white drop-shadow-sm"
          aria-hidden="true"
        >
          <rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor" opacity="0.95" />
          <path
            d="M5 10a7 7 0 0 0 14 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="21"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <line
            x1="9"
            y1="21"
            x2="15"
            y2="21"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   WelcomeView — Idle landing state
───────────────────────────────────────────────────────────── */
interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="flex h-svh w-full items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-0 px-6 text-center">
        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <AikoOrb />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="text-foreground mb-2 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          AIKO
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="text-muted-foreground mb-1 text-base font-medium"
        >
          Your AI Voice Assistant
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="text-muted-foreground/70 mb-10 text-sm"
        >
          I&apos;m ready whenever you are.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
        >
          <Button
            id="start-conversation-btn"
            size="lg"
            onClick={onStartCall}
            className="h-12 w-56 rounded-full text-sm font-semibold tracking-wide shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-100"
            style={{
              background:
                'linear-gradient(135deg, var(--aiko-accent), color-mix(in srgb, var(--aiko-accent) 80%, #4060c0))',
              color: '#fff',
              border: 'none',
            }}
          >
            {startButtonText}
          </Button>
        </motion.div>
      </section>
    </div>
  );
};
