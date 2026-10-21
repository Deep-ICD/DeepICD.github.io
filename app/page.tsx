import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./components/Eyebrow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ToolCarousel, { type ToolView } from "./components/ToolCarousel";
import PublicationItem from "./components/PublicationItem";
import {
  featuredPublications,
  totalPublications,
} from "./lib/publications";
import {
  CONTACT_EMAIL,
  LOGIN_URL,
  headerOffset,
  primaryButton,
  secondaryButton,
} from "./lib/site";

const benefits = [
  {
    title: "See changes over time",
    body: "Explore the recording across 24 hours, including periods that may warrant closer review.",
  },
  {
    title: "Make insights easier to review",
    body: "Bring lengthy recordings into clear visual summaries, with detail available for further examination.",
  },
  {
    title: "Support personalised assessment",
    body: "Use the patient's individual recording to inform clinical discussion and screening decisions.",
  },
];

/* How the tool is used, in the order a clinician moves through it: each view
   opens the next, which is what the step numbering encodes. Descriptions
   follow the platform team's own account of each screen.

   Shown as a carousel (ToolCarousel). All four are light-themed platform
   output, so each sits on its own white plate rather than straight on the
   dark surface. */
const toolViews: ToolView[] = [
  {
    step: "Overview",
    title: "The 24-hour timeline",
    caption:
      "After submitting a recording for analysis, the clinician sees an overview of the whole day across each recorded vector.",
    src: "/images/tool/24-hour-timeline.webp",
    width: 2128,
    height: 1258,
    alt: "Deep-ICD's 24-hour overview for a test S-ICD recording: predicted T:R ratios in 10-second windows across the day for vectors A, B and C, with windows above the ratio of concern in red and noisy windows in orange.",
  },
  {
    step: "Zoom in",
    title: "A closer look at a chosen time",
    caption:
      "Choosing a time on the overview opens a second timeline, showing that period in more detail.",
    src: "/images/tool/timeline-zoomed-in.webp",
    width: 1000,
    height: 536,
    alt: "The 24-hour overview with a second timeline beneath it, showing the chosen period from 04:45 to 05:00 in more detail.",
  },
  {
    step: "ECG sample",
    title: "The ECG behind a prediction",
    caption:
      "Selecting a specific example on the second timeline shows the 10-second ECG sample it came from.",
    src: "/images/tool/ecg-sample.webp",
    width: 1000,
    height: 545,
    alt: "A 10-second ECG sample for vectors A, B and C, from 04:55:21 to 04:55:30.",
  },
  {
    step: "Report",
    title: "Predicted T:R or P:R ratio distribution",
    caption:
      "Clinicians can generate a PDF report, including how the predicted T:R or P:R ratios are distributed for each vector.",
    src: "/images/tool/Example T_R ratio distributions.png",
    width: 1559,
    height: 1225,
    alt: "Example output from a test recording: predicted T:R ratios across 24 hours for vectors A, B and C, above histograms of their distribution with the 1:2 ratio of concern marked. Noisy windows: 0.11% for vector A, 0.068% for B and 0.056% for C.",
  },
];

const steps = [
  {
    label: "Record",
    title: "Capture the 24-hour picture",
    body: "A Holter recording captures how the patient's heart signals vary across the day.",
  },
  {
    label: "Explore",
    title: "Review clear visual insights",
    body: "Deep-ICD analyses the recording and presents patterns for closer review.",
  },
  {
    label: "Inform",
    title: "Support clinical judgement",
    body: "Clinicians interpret the findings, using them to inform the shared decision-making process with the patient.",
  },
];

const partners = [
  {
    name: "University of Southampton School of Mathematical Sciences",
    href: "https://www.southampton.ac.uk/about/faculties-schools-departments/school-of-mathematical-sciences",
    src: "/images/partners/southampton.webp",
    width: 452,
    height: 96,
  },

  {
    name: "NHS University Hospital Southampton",
    href: "https://www.uhs.nhs.uk/",
    src: "/images/partners/nhs.webp",
    width: 238,
    height: 96,
  },
  {
    name: "Research Software Group Southampton",
    href: "https://rsgsoton.net/",
    src: "/images/partners/rsg.webp",
    width: 324,
    height: 96,
  },
  {
    name: "Decision Analysis Services",
    href: "https://www.das-int.com/",
    src: "/images/partners/das.webp",
    width: 432,
    height: 96,
  },
];

/* `href` is each member's institutional or professional profile, and the only
   link we render: the earlier per-member Facebook/GitHub/LinkedIn row pointed
   every icon at "#" whether or not the account existed. Members without a
   public profile, or without a portrait yet, simply omit `href` / `photo`. */
type TeamMember = {
  name: string;
  initials: string;
  photo?: string;
  role: string;
  institution: string;
  href?: string;
  /* Overrides the default portrait crop when a source photo is not centred. */
  objectPosition?: string;
};

const team: TeamMember[] = [
  {
    name: "Prof Alain Zemkoho",
    initials: "AZ",
    photo: "/images/team/alain-zemkoho.webp",
    role: "Principal Investigator",
    institution: "University of Southampton",
    href: "https://www.southampton.ac.uk/people/5xd5hn/professor-alain-zemkoho",
  },
  {
    name: "Prof John Paisey",
    initials: "JP",
    photo: "/images/team/john-paisey.webp",
    role: "Clinical Lead",
    institution: "University Hospital Southampton",
    href: "https://www.uhs.nhs.uk/for-patients/find-your-consultant/dr-john-paisey",
  },
  {
    name: "Prof Paul Roberts",
    initials: "PR",
    photo: "/images/team/paul-roberts.webp",
    role: "Clinical Co-Lead",
    institution: "University Hospital Southampton",
    href: "https://www.uhs.nhs.uk/for-patients/find-your-consultant/prof-paul-roberts",
  },
  {
    name: "Dr Anthony Dunn",
    initials: "AD",
    photo: "/images/team/anthony-dunn.webp",
    role: "Research Collaborator",
    institution: "University of Southampton",
    href: "https://www.linkedin.com/in/anthony-dunn-ab093a234/",
  },
  {
    name: "Dr Mohamed ElRefai",
    initials: "ME",
    photo: "/images/team/mohamed-elrefai.webp",
    role: "Clinical Research Collaborator",
    institution: "University Hospital Southampton",
    href: "https://scholar.google.com/citations?user=wMl-xnUAAAAJ&hl=en",
  },
  {
    name: "Samuel Ward",
    initials: "SW",
    photo: "/images/team/samuel-ward.webp",
    role: "Doctoral Researcher",
    institution: "University of Southampton",
    href: "https://www.southampton.ac.uk/people/5zv8fk/mr-samuel-ward",
  },
  {
    name: "Dr Lin-Thiri Toon",
    initials: "LT",
    photo: "/images/team/lin-thiri-toon.webp",
    role: "Clinical Researcher",
    institution: "University Hospital Southampton",
    href: "https://www.linkedin.com/in/lin-thiri-toon-26b381149/",
  },
  {
    name: "Bartosz Morawski",
    initials: "BM",
    photo: "/images/team/bartosz-morawski.webp",
    role: "Doctoral Researcher",
    institution: "University of Southampton",
    href: "https://www.linkedin.com/in/bartosz-morawski-b21abb214",
  },
  {
    name: "Dr Alex Touze",
    initials: "AT",
    photo: "/images/team/Alex Headshot.jpg",
    role: "Clinical Researcher",
    institution: "University Hospital Southampton",
  },
  {
    name: "Dr Sam Mangham",
    initials: "SM",
    photo: "/images/team/sam-mangham.webp",
    role: "Research Software Engineer",
    institution: "University of Southampton",
    href: "https://www.southampton.ac.uk/people/5xm6qj/doctor-sam-mangham",
  },
];

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-body">{intro}</p>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      {/* The hero's height comes from the copy, so it is fixed at ~595px while
          `cover` scales the art to the box width. Past 1920px that magnifies
          the trace until its peak and trough fall outside the band -- so the
          box stops widening there and an ultrawide gets surface to the left of
          it instead. The trace sits in the right third of the source, so the
          box is anchored right: cropping eats the empty left side rather than
          the artwork. */}
      <div className="absolute inset-y-0 right-0 w-full max-w-[1920px]">
        <Image
          src="/images/hero-ecg.webp"
          alt=""
          fill
          preload
          sizes="(min-width: 1920px) 1920px, 100vw"
          className="object-cover object-right"
        />

        {/* Below lg the copy runs full-width across the trace, so it needs a
            flat scrim. From lg the copy is confined to the left column and the
            scrim becomes a gradient that clears the artwork entirely. Both sit
            inside the box so they stay registered to the art at any width; the
            gradient starts on opaque surface, so its left edge meets the
            section's own surface seamlessly. */}
        <div className="absolute inset-0 bg-surface/85 lg:hidden" />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-surface) 0%, var(--color-surface) 38%, color-mix(in oklab, var(--color-surface) 55%, transparent) 62%, transparent 88%)",
          }}
        />
      </div>

      {/* Seam into the section below. */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface" />

      {/* The header is fixed above this section rather than inside it, so the
          top padding reserves its height (see headerOffset); from lg the gap
          beneath it grows from 48px to 64px. */}
      <div
        className={`relative z-10 mx-auto max-w-6xl px-6 pb-24 lg:pt-48 ${headerOffset}`}
      >
        <div className="max-w-xl">
          <Eyebrow>AI-assisted ICD screening</Eyebrow>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            <span className="block">A fuller picture.</span>{" "}
            <span className="block">More informed ICD decisions.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
            Deep-ICD turns 24-hour heart recordings into clear, visual insights
            to help clinicians assess suitability for subcutaneous and
            extravascular ICDs, revealing changes that
            state-of-the-art screening practices may miss.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#tool" className={primaryButton}>
              Explore the tool
            </a>
            <a href="#contact" className={secondaryButton}>
              Interested in testing Deep-ICD?
            </a>
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-body">
            ICD means implantable cardioverter-defibrillator: a device that
            treats potentially life-threatening heart rhythms.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyItMatters() {
  return (
    <section className="border-y border-hairline bg-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Why a fuller picture matters"
          title="Heart signals change. Screening should capture that."
          intro="A short recording captures a moment in time. Deep-ICD is designed to help clinicians explore changes across the day and identify patterns relevant to device suitability and the risk of inappropriate shocks."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-surface p-7 ring-1 ring-hairline"
            >
              <h3 className="text-lg font-semibold leading-snug text-ink">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tool() {
  return (
    <section id="tool" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="See what Deep-ICD reveals"
          title="From a day of recordings to a clearer clinical picture."
          intro="Each view leads to the next, from the full recording down to the ECG behind a single prediction."
        />

        <ToolCarousel views={toolViews} />

        {/* These views look clinical, so state plainly what they are. Wording
            follows the disclaimer printed on the platform's own reports. */}
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-body">
          Example output from a test recording. Deep-ICD is research software,
          not a tested medical device, and is not for diagnostic use.
        </p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="border-y border-hairline bg-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="The screening approach"
          title="Record. Explore. Inform."
        />

        {/* An ordered list: the three stages are a genuine sequence, which is
            also what the visible 01 / 02 / 03 numbering encodes. */}
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.label}
              className="rounded-xl bg-surface p-7 ring-1 ring-hairline"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, "0")} · {step.label}
              </p>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Straight after the demo and the approach: the point where a
            clinician is most likely to want to try it. Leads to the contact
            section rather than a form. */}
        <div className="mt-12 flex flex-col gap-6 rounded-xl bg-surface p-7 ring-1 ring-hairline md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold leading-snug text-ink">
              Want to explore Deep-ICD in practice?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              If you are a clinician interested in testing the platform or
              contributing to the research, we&apos;d love to hear from you.
            </p>
          </div>
          <a href="#contact" className={`shrink-0 ${primaryButton}`}>
            Register your interest
          </a>
        </div>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Research and publications"
          title="The research behind Deep-ICD"
          intro="Explore the methods, clinical studies, and ongoing work behind prolonged ICD screening."
        />

        {/* The four most recent journal articles; abstracts and the current
            manuscript are on /publications, with full author lists. */}
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredPublications.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-xl bg-raised p-7 ring-1 ring-hairline"
            >
              <PublicationItem item={item} authors="short" variant="card" />
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link href="/publications" className={secondaryButton}>
            View all {totalPublications} research outputs
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const portrait = (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-surface ring-1 ring-hairline transition group-hover:ring-brand/60 group-focus-visible:ring-2 group-focus-visible:ring-brand">
      {/* Monogram sits underneath as a fallback, so a member without a
          portrait yet -- or a failed photo -- shows initials, not an empty
          frame. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="text-3xl font-bold text-brand/60">
          {member.initials}
        </span>
      </div>

      {member.photo && (
        <Image
          src={member.photo}
          alt=""
          fill
          sizes="(min-width: 1152px) 352px, (min-width: 640px) 33vw, 50vw"
          style={{ objectPosition: member.objectPosition ?? "50% 25%" }}
          className="object-cover"
        />
      )}
    </div>
  );

  const nameClass = "mt-4 text-base font-semibold leading-tight text-ink";

  return (
    <article>
      {member.href ? (
        <a
          href={member.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block focus-visible:outline-none"
        >
          {portrait}
          <p className={`${nameClass} group-hover:text-brand`}>
            {member.name}
            <span className="sr-only"> (opens in a new tab)</span>
          </p>
        </a>
      ) : (
        <div>
          {portrait}
          <p className={nameClass}>{member.name}</p>
        </div>
      )}
      <p className="mt-1.5 text-sm leading-tight text-body">{member.role}</p>
      <p className="mt-1 text-xs leading-tight text-body">
        {member.institution}
      </p>
    </article>
  );
}

function Team() {
  return (
    <section id="team" className="border-y border-hairline bg-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="The people behind the project"
          title="Clinical experience meets mathematical innovation."
          intro="Deep-ICD brings together cardiologists, mathematicians, AI experts, and software engineers at the University of Southampton and University Hospital Southampton."
        />

        {/* Square frames: most source portraits are already 1:1, so this crops
            almost nothing. Full section width, so the row's edges line up with
            every other section: three columns from sm, two on phones. */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    /* No tile behind the marks: all four sit straight on the band.

       That needs artwork that survives a dark ground, which two of them did
       not. partner-southampton-white.png and partner-das-white.png are
       REVERSED VARIANTS DERIVED IN HOUSE from the supplied files, pending
       official artwork from each partner:
         - Southampton is a single-colour mark, so the reverse is exact: the
           alpha channel is untouched and the teal is filled white.
         - DAS is multicolour. Only its neutral dark ink ("services", 1.22:1 on
           the surface) is flipped to white; the brand red and the grey link
           glyph are untouched, both of which already clear 3:1.
       Swap both for the partners' own reversed files when they arrive.

       NHS is unchanged: the mark is a solid blue lozenge with the letters
       reversed out, so it carries its own ground and needs no help. Note its
       identity guidelines are strict about the logo never being reversed and
       about dark backgrounds -- worth confirming this placement with UHS. */
    <section className="bg-deep">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-body">
          Our partners
        </h2>

        {/* One row of four from md, as in the layout reference; a 2x2 block
            below that. The marks are centred in their cells and the gutters
            carry the separation. */}
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 md:grid-cols-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-8 focus-visible:ring-offset-deep"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-10 w-auto max-w-full object-contain sm:h-12"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t-2 border-brand bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Eyebrow>Work with us</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Interested in testing Deep-ICD?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
          Are you a clinician interested in exploring Deep-ICD with your
          patients or contributing to the research? Register your interest to
          learn more and request access to the platform.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {/* The "Register your interest" buttons higher up lead here; this
              one emails the team. The subject line tells them why at a glance. */}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Registering interest in Deep-ICD")}`}
            className={primaryButton}
          >
            Contact us
          </a>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            Log in to Deep-ICD
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyItMatters />
        <Tool />
        <Approach />
        <Publications />
        <Team />
        <Contact />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
