import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "../components/Eyebrow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PublicationItem from "../components/PublicationItem";
import { publicationGroups } from "../lib/publications";
import { focusRing, headerOffset } from "../lib/site";

export const metadata: Metadata = {
  title: "Research and publications | Deep-ICD",
  description:
    "Journal articles, conference abstracts and current work behind Deep-ICD's AI-assisted ICD screening research.",
};

export default function PublicationsPage() {
  return (
    <>
      <Navbar />

      {/* The header is fixed, so the top padding reserves its height -- the
          same allowance the homepage hero makes (see headerOffset). */}
      <main className={`mx-auto max-w-6xl px-6 pb-24 ${headerOffset}`}>
        <Link
          href="/#publications"
          className={`inline-flex items-center gap-2 rounded-sm text-sm font-medium text-body transition-colors hover:text-ink ${focusRing}`}
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <div className="mt-10 max-w-3xl">
          <Eyebrow>Research and publications</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            The research behind Deep-ICD
          </h1>
          <p className="mt-5 text-base leading-relaxed text-body">
            Explore the methods, clinical studies, and ongoing work behind
            prolonged ICD screening.
          </p>
        </div>

        <div className="mt-16 max-w-4xl space-y-16">
          {publicationGroups.map((group) => (
            <section key={group.heading} aria-labelledby={slug(group.heading)}>
              <h2
                id={slug(group.heading)}
                className="text-2xl font-bold tracking-tight text-ink"
              >
                {group.heading}
              </h2>

              <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
                {group.items.map((item) => (
                  <li key={item.title} className="py-7">
                    <PublicationItem item={item} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <details className="mt-16 max-w-4xl rounded-xl bg-raised px-6 py-5 ring-1 ring-hairline">
          <summary
            className={`cursor-pointer rounded-sm font-semibold text-ink ${focusRing}`}
          >
            What is the platform’s current status?
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-body">
            Deep-ICD is a research platform supporting investigation of
            prolonged device screening. Evidence and development stages differ
            between S-ICD and EV-ICD applications. Findings require clinical
            interpretation; improved patient outcomes remain a research goal.
          </p>
        </details>
      </main>

      <Footer />
    </>
  );
}

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
