'use client';

import React from 'react';
import { Mic } from 'lucide-react';
import { motion } from 'motion/react';
import { AgentAudioVisualizerAura } from '@/components/agents-ui/agent-audio-visualizer-aura';
import { Button } from '@/components/ui/button';

interface WelcomeViewProps {
  startButtonText?: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText = 'Start Speaking',
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="flex min-h-svh w-full flex-col items-center justify-center">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[380px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-[100px] dark:bg-indigo-500/20"
        aria-hidden="true"
      />
      <section className="flex flex-col items-center justify-center px-6 text-center">
        {/* Orb Aura Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-0 flex items-center justify-center"
        >
          <AgentAudioVisualizerAura
            size="lg"
            state="connecting"
            color="#4F46E5"
            className="h-[280px] w-[280px]"
          />
        </motion.div>

        {/* Teks Deskripsi */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="text-foreground z-10 mb-2 text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Hi, I&apos;m Aiko. Your Advanced AI Voice Agent.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="text-foreground z-10 mb-6 text-xl font-normal sm:text-2xl"
        >
          Talk, interact, simplify.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          className="z-10"
        >
          <Button
            id="start-conversation-btn"
            size="lg"
            onClick={onStartCall}
            className="flex h-11 items-center gap-2 rounded-full bg-slate-200/80 px-6 py-2 text-sm font-medium tracking-wide text-indigo-600 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-200 active:scale-100 dark:bg-slate-800 dark:text-indigo-400"
          >
            <Mic className="h-4 w-4" />
            {startButtonText}
          </Button>
        </motion.div>
      </section>
    </div>
  );
};
