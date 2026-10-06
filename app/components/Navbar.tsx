"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LOGO, focusRing, navLinks } from "../lib/site";

/* Fixed to the top so the section links stay reachable down the whole page.
   Over the hero it is transparent, so the artwork shows through; once the
   page scrolls it compacts (smaller logo, tighter padding) and gains a
   blurred surface so it stays legible over whatever passes beneath. */
export default function Navbar() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    /* The observer reports the real state on its first callback, so a reload
       mid-page starts compact without any synchronous setState here. */
    const observer = new IntersectionObserver(([entry]) =>
      setCompact(!entry.isIntersecting),
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* The top 24px of the document: once it scrolls out, compact. */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-6"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
          compact
            ? "border-hairline bg-surface/85 shadow-lg shadow-black/20 backdrop-blur-md"
            : "border-transparent"
        }`}
      >
        {/* One row from md: logo left, section links on the right. Below md
            the links take a second row under the logo, kept
            to a single line that scrolls sideways rather than wrapping, so the
            bar never grows past two rows. */}
        <div
          className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 px-6 transition-[padding] duration-300 motion-reduce:transition-none ${
            compact ? "gap-y-2 py-3" : "gap-y-4 py-6"
          }`}
        >
          <Link
            href="/#top"
            className={`order-1 shrink-0 rounded-md ${focusRing}`}
          >
            <Image
              src={LOGO}
              alt="Deep-ICD"
              width={640}
              height={165}
              preload
              className={`w-auto transition-[height] duration-300 motion-reduce:transition-none ${
                compact ? "h-10" : "h-16 sm:h-20"
              }`}
            />
          </Link>

          <nav
            aria-label="Primary"
            className="order-3 w-full md:order-2 md:ml-auto md:w-auto"
          >
            {/* py-1 leaves room for focus outlines, which overflow-x-auto
                would otherwise clip at the row's top and bottom edges. */}
            <ul className="-mx-6 flex gap-x-7 overflow-x-auto whitespace-nowrap px-6 py-1 text-sm font-medium md:mx-0 md:overflow-visible md:px-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-sm text-body transition-colors hover:text-ink ${focusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
