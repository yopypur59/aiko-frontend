'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { type AgentState } from '@livekit/components-react';

/* ────────────────────────────────────────────────────────────
   Maps AgentState to human-readable display strings
───────────────────────────────────────────────────────────── */
const STATE_LABELS: Record<string, string> = {
  connecting: 'Connecting...',
  initializing: 'Initializing...',
  listening: 'Listening...',
  thinking: 'Thinking...',
  speaking: 'Speaking...',
  disconnected: 'Disconnected',
};

/* ────────────────────────────────────────────────────────────
   Dot indicator colors by state
───────────────────────────────────────────────────────────── */
const STATE_DOT_STYLES: Record<string, string> = {
  connecting: 'bg-yellow-400',
  initializing: 'bg-yellow-400',
  listening: 'bg-green-400',
  thinking: 'bg-blue-400 animate-pulse',
  speaking: 'bg-primary',
  disconnected: 'bg-muted-foreground/40',
};

interface AikoStatusProps {
  state?: AgentState;
  className?: string;
}

/**
 * Displays the current agent state as a human-readable status label
 * with a small color-coded dot indicator. Animates on state change.
 */
export function AikoStatus({ state = 'connecting', className }: AikoStatusProps) {
  const label = STATE_LABELS[state] ?? state;
  const dotClass = STATE_DOT_STYLES[state] ?? 'bg-muted-foreground/40';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={state}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`flex items-center justify-center gap-2 ${className ?? ''}`}
        role="status"
        aria-live="polite"
        aria-label={`Agent status: ${label}`}
      >
        {/* Status dot */}
        <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotClass}`} aria-hidden="true" />

        {/* Status label */}
        <span className="text-muted-foreground text-sm font-medium tabular-nums">{label}</span>
      </motion.div>
    </AnimatePresence>
  );
}
