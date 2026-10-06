"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { focusRing } from "../lib/site";

export type ToolView = {
  step: string;
  title: string;
  caption: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

/* The tool's views as a carousel that visitors move themselves -- swipe,
   drag, the arrow buttons, the step numbers, or the arrow keys. It does not
   advance on its own: the views are a sequence (each one opens the next), and
   the captions need to hold still while they are read. */
export default function ToolCarousel({ views }: { views: ToolView[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  /* Starts at the first slide, which is where Embla initialises. State only
     changes in Embla's own callbacks, never synchronously in the effect. */
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(views.length > 1);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", update).on("reInit", update);
    return () => {
      emblaApi.off("select", update).off("reInit", update);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="How the tool is used"
      onKeyDownCapture={onKeyDown}
      /* 90% of the section width from md, which shrinks every slide by the
         same 10% while keeping the 55% slide ratio (and its snap points). */
      className="mt-12 md:max-w-[90%]"
    >
      {/* Slides are 55% wide from md, so the next one shows nearly half its
          width -- the visible cue that there is more to swipe to. Not much
          narrower: under ~50%, Embla trims the last snap points together and
          the 01-04 step buttons would stop mapping one-to-one to slides. */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-6 flex touch-pan-y">
          {views.map((view, i) => (
            <div
              key={view.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${views.length}`}
              className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-[55%]"
            >
              <figure className="flex h-full flex-col rounded-xl bg-raised p-4 ring-1 ring-hairline sm:p-5">
                {/* A shared 16:10 plate, so slides of different aspect ratios
                    line up; each screenshot is fitted whole inside it. */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
                  <Image
                    src={view.src}
                    alt={view.alt}
                    fill
                    sizes="(min-width: 1152px) 550px, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-5 px-1 pb-1">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {String(i + 1).padStart(2, "0")} · {view.step}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">
                    {view.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {view.caption}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {views.map((view, i) => (
            <button
              key={view.src}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Step ${i + 1}: ${view.step}`}
              aria-current={i === selected ? "step" : undefined}
              className={`grid h-9 min-w-9 place-items-center rounded-full px-2.5 font-mono text-xs font-semibold transition-colors ${focusRing} ${
                i === selected
                  ? "bg-brand-dark text-white"
                  : "text-body ring-1 ring-hairline hover:text-ink hover:ring-white/30"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous step"
            className={`grid size-10 place-items-center rounded-full border border-white/25 text-ink transition-colors hover:border-white/50 hover:bg-white/5 disabled:pointer-events-none disabled:opacity-35 ${focusRing}`}
          >
            <ArrowLeft className="size-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next step"
            className={`grid size-10 place-items-center rounded-full border border-white/25 text-ink transition-colors hover:border-white/50 hover:bg-white/5 disabled:pointer-events-none disabled:opacity-35 ${focusRing}`}
          >
            <ArrowRight className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Announces the new slide when it changes, for screen readers. */}
      <p className="sr-only" aria-live="polite">
        Step {selected + 1} of {views.length}: {views[selected]?.title}
      </p>
    </div>
  );
}
