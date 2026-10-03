import type { Publication } from "../lib/publications";
import { focusRing } from "../lib/site";

/* One publication's meta line, title, authors and link. Callers supply the
   wrapper (a card on the homepage, a list row on /publications).

   `authors="short"` gives the first three then "et al." -- enough to show who
   led the work without nine names crowding a homepage card. The full page
   lists everyone. */
export default function PublicationItem({
  item,
  authors = "full",
  variant = "list",
}: {
  item: Publication;
  authors?: "short" | "full";
  variant?: "card" | "list";
}) {
  const names = item.authors ?? [];
  const authorLine =
    authors === "short" && names.length > 3
      ? `${names.slice(0, 3).join(", ")}, et al.`
      : names.join(", ");

  return (
    <>
      <p className="text-xs leading-relaxed text-body">{item.meta}</p>
      <h3 className="mt-2 text-base font-semibold leading-snug text-ink">
        {item.title}
      </h3>
      {authorLine && (
        <p className="mt-2 text-sm leading-relaxed text-body">{authorLine}</p>
      )}
      {item.summary && (
        <p className="mt-2 text-sm leading-relaxed text-body">{item.summary}</p>
      )}
      {item.href && (
        /* In a card the link sits on the card's floor, so a row of cards with
           titles of different lengths keeps its links aligned. */
        <div className={variant === "card" ? "mt-auto pt-5" : "mt-3"}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-brand underline-offset-4 hover:underline ${focusRing}`}
          >
            {item.linkLabel}
            {/* Several links share each label, so the title rides along for
                screen readers listing links. */}
            <span className="sr-only">
              : {item.title} (opens in a new tab)
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </>
  );
}
