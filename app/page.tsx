import Image from "next/image";
import Overview from "./components/Overview";

const LOGIN_URL = "https://deep-icd.soton.ac.uk/accounts/login/";
const LOGO = "/logo-deep-icd-light.png";

const partners = [
  {
    name: "University of Southampton School of Mathematical Sciences",
    href: "https://www.southampton.ac.uk/about/faculties-schools-departments/school-of-mathematical-sciences",
    src: "/partner-southampton.png",
    width: 1767,
    height: 375,
  },

  {
    name: "NHS University Hospital Southampton",
    href: "https://www.uhs.nhs.uk/",
    src: "/partner-nhs.jpg",
    width: 293,
    height: 118,
  },
  {
    name: "Research Software Group Southampton",
    href: "https://rsgsoton.net/",
    src: "/partner-rsg.png",
    width: 446,
    height: 132,
  },
  {
    name: "Decision Analysis Services",
    href: "https://www.das-int.com/",
    src: "/partner-das.png",
    width: 1090,
    height: 242,
  },
];

/* `href` is each member's institutional or professional profile. It is the only
   link we render: the previous per-member Facebook/GitHub/LinkedIn row pointed
   every icon at "#" regardless of whether the account existed. */
const team = [
  {
    name: "Prof Alain Zemkoho",
    initials: "AZ",
    photo: "/team-Alain.webp",
    role: "Primary investigator",
    institution: "University of Southampton",
    href: "https://www.southampton.ac.uk/people/5xd5hn/professor-alain-zemkoho",
  },
  {
    name: "Samuel Ward",
    initials: "SW",
    photo: "/team-Samuel.webp",
    role: "Doctoral researcher",
    institution: "University of Southampton",
    href: "https://www.southampton.ac.uk/people/5zv8fk/mr-samuel-ward",
  },
  {
    name: "Dr Sam Mangham",
    initials: "SM",
    photo: "/team-Sam.webp",
    role: "Research software engineer",
    institution: "University of Southampton",
    href: "https://www.southampton.ac.uk/people/5xm6qj/doctor-sam-mangham",
  },
  {
    name: "Dr John Paisey",
    initials: "JP",
    photo: "/Paisey-Dr-John-cardiology-photo.xbbff1846.jpg",
    role: "Clinical lead",
    institution: "University Hospital Southampton",
    href: "https://www.uhs.nhs.uk/for-patients/find-your-consultant/dr-john-paisey",
  },
  {
    name: "Prof Paul Roberts",
    initials: "PR",
    photo: "/Paul Roberts.jpg",
    role: "Clinical lead (outgoing)",
    institution: "University Hospital Southampton",
    href: "https://www.uhs.nhs.uk/for-patients/find-your-consultant/prof-paul-roberts",
  },
  {
    name: "Dr Lin-Thiri Toon",
    initials: "LT",
    photo: "/Thiri-Lin.avif",
    role: "Clinical researcher",
    institution: "University Hospital Southampton",
    href: "https://www.linkedin.com/in/lin-thiri-toon-26b381149/",
  },
  {
    name: "Dr Anthony Dunn",
    initials: "AD",
    photo: "/dunn_anthony_2.jpg.webp",
    role: "Industrial partner",
    institution: "Decision Analysis Services",
    // Portrait source is 2:3 rather than square, so it needs a higher crop.
    objectPosition: "50% 15%",
    href: "https://www.linkedin.com/in/anthony-dunn-ab093a234/",
  },
];

function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#" className="shrink-0">
        <Image
          src={LOGO}
          alt="Deep-ICD"
          width={2929}
          height={756}
          priority
          className="h-16 w-auto sm:h-20"
        />
      </a>

      <a
        href={LOGIN_URL}
        className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Log in
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* The trace sits in the right third of the source image, so it is
          anchored right: cropping then eats the empty left side rather than
          the artwork. */}
      <Image
        src="/ecg_right_side.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Below lg the copy runs full-width across the trace, so it needs a flat
          scrim. From lg the copy is confined to the left column and the scrim
          becomes a gradient that clears the artwork entirely. */}
      <div className="absolute inset-0 bg-surface/85 lg:hidden" />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-surface) 0%, var(--color-surface) 38%, color-mix(in oklab, var(--color-surface) 55%, transparent) 62%, transparent 88%)",
        }}
      />

      {/* Seam into the section below. */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface" />

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-12 lg:pb-40 lg:pt-20">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            AI-assisted ICD eligibility screening
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body sm:text-xl">
            A research project using AI to improve ICD eligibility screening
            through ECG analysis.
          </p>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    /* Light band: the partner marks are dark-ink PNGs plus one opaque JPG, so
       they cannot sit on the dark ground and are not ours to recolour. */
    <section className="bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-9 w-auto max-w-full object-contain sm:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        A cross-disciplinary collaboration
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-body">
        Deep-ICD brings together the University of Southampton&apos;s School of
        Mathematical Sciences, University Hospital Southampton&apos;s cardiology
        department and Decision Analysis Services.
      </p>

      {/* Square frames: six of the seven source portraits are already 1:1, so
          this crops almost nothing. The previous 2:5 frame zoomed them ~2.5x. */}
      <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
        {team.map((member) => (
          <article key={member.name}>
            <a
              href={member.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-none"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-raised ring-1 ring-hairline transition group-hover:ring-brand/60 group-focus-visible:ring-2 group-focus-visible:ring-brand">
                {/* Monogram sits underneath as a fallback, so a missing or
                    failed photo leaves initials rather than an empty frame. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-3xl font-bold text-brand/60">
                    {member.initials}
                  </span>
                </div>

                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw"
                  style={{ objectPosition: member.objectPosition ?? "50% 25%" }}
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-sm font-semibold leading-tight text-ink group-hover:text-brand">
                {member.name}
              </p>
            </a>
            <p className="mt-1 text-xs leading-tight text-body">{member.role}</p>
            <p className="mt-0.5 text-xs leading-tight text-body/70">
              {member.institution}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-raised">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-sm">
          <Image
            src={LOGO}
            alt="Deep-ICD"
            width={2929}
            height={756}
            className="h-10 w-auto"
          />
          <p className="mt-6 text-sm leading-relaxed text-body">
            A research project using AI to improve ICD eligibility screening
            through ECG analysis.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-hairline pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-body">
            &copy; {new Date().getFullYear()} Deep-ICD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Overview />
      <Team />
      <Footer />
    </>
  );
}
