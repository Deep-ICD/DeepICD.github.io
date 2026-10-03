/* Values shared by the server-rendered page and the client-side Navbar. */

export const LOGIN_URL = "https://deep-icd.soton.ac.uk/accounts/login/";
export const CONTACT_EMAIL = "deep-icd@soton.ac.uk";
export const LOGO = "/logo-deep-icd-light.png";

/* Root-relative, so the header works from /publications as well as the
   homepage: a same-page jump on "/", navigate-then-scroll elsewhere. */
export const navLinks = [
  { label: "The Tool", href: "/#tool" },
  { label: "Publications", href: "/#publications" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const buttonBase = `inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${focusRing}`;

/* brand-dark, not brand: white on #3b82f6 is 3.7:1, under the 4.5:1 that
   14px text needs. #2563eb clears it at 5.2:1. */
export const primaryButton = `${buttonBase} bg-brand-dark text-white hover:bg-blue-700`;

export const secondaryButton = `${buttonBase} border border-white/25 text-ink hover:border-white/50 hover:bg-white/5`;
