"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Overview() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about">
      {/* Same container as every other section, so the left edges line up;
          the paragraph keeps its own max width for a readable line length. */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Overview
        </span>

        <motion.p
          className="mt-8 max-w-4xl text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl sm:leading-relaxed"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          The Deep-ICD algorithm uses Convolutional Neural Networks (CNNs)
          trained on cardiologist-labelled ECG data to predict amplitude ratios
          from 24-hour Holter recordings. These measurements support more robust
          eligibility screening for subcutaneous (S-ICD) and extravascular
          (EV-ICD) implantable cardioverter-defibrillators, helping to reduce
          inappropriate device shocks caused by device oversensing.
        </motion.p>
      </div>
    </section>
  );
}
