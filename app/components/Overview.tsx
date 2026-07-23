"use client";

import { motion, useReducedMotion } from "motion/react";

const INK = "#16202c";

/** The statement, split so highlighted phrases can animate independently. */
const segments: { text: string; color?: string }[] = [
  {
    text: "The Deep-ICD algorithm reduces ECG traces from Holter devices to simpler forms through ",
  },
  { text: "phase-space reconstruction", color: "#1668e3" },
  { text: ". These reconstructions, paired with " },
  { text: "peak ratios", color: "#f97316" },
  {
    text: " identified by cardiologists, train machine-learning models to predict them ",
  },
  { text: "on their own.", color: "#16a34a" },
];

/* Each highlight is inline-block so it can be transformed — CSS transforms are
   ignored on plain inline elements. It still wraps internally on narrow
   screens, so a long phrase grows the box rather than overflowing the line. */
const HIGHLIGHT_CLASS =
  "mx-0.5 inline-block rounded-lg border-2 border-dotted px-2 py-0.5 align-baseline";

/* Stagger order is derived once at module scope. Counting up during render
   would mutate state after render completes, which React Compiler rejects. */
const highlightOrder = new Map(
  segments.filter((s) => s.color).map((s, i) => [s, i] as const),
);

export default function Overview() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Overview
        </span>

        <p className="mt-8 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl lg:text-[2.6rem] lg:leading-[1.3]">
          {segments.map((segment, i) => {
            if (!segment.color) {
              return <span key={i}>{segment.text}</span>;
            }

            const order = highlightOrder.get(segment) ?? 0;

            // Reduced motion: render the finished state, no animation.
            if (reduceMotion) {
              return (
                <span
                  key={i}
                  className={HIGHLIGHT_CLASS}
                  style={{
                    color: segment.color,
                    borderColor: `${segment.color}80`,
                  }}
                >
                  {segment.text}
                </span>
              );
            }

            return (
              <motion.span
                key={i}
                className={HIGHLIGHT_CLASS}
                initial={{ color: INK, borderColor: "rgba(22,32,44,0)" }}
                whileInView={{
                  color: segment.color,
                  borderColor: `${segment.color}80`,
                  scale: [1, 1.05, 1],
                }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: 0.2 + order * 0.45,
                  ease: "easeOut",
                }}
              >
                {segment.text}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
