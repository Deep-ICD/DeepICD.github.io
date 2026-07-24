import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import Overview from "./components/Overview";

const LOGIN_URL = "https://deep-icd.soton.ac.uk/accounts/login/";

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
    href: "https://www.linkedin.com/in/anthony-dunn-ab093a234/",
  },
];

function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#" className="shrink-0">
        <Image
          src="/logo.svg"
          alt="Deep-ICD Health Care"
          width={4532}
          height={1681}
          priority
          className="h-28 w-auto sm:h-36"
        />
      </a>

      <a
        href={LOGIN_URL}
        className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Log in
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky">
      <Image
        src="/samuel-scalzo-iqGtaQnk3VM-unsplash.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_75%]"
      />

      {/* Even scrim: the copy is centred now, so it can't rely on a heavier
          left side the way the previous left-aligned layout did. */}
      <div className="absolute inset-0 bg-white/75" />

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-8 text-center lg:pb-32">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
          What will your ECG traces reveal today?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black sm:text-xl">
          A research project using phase-space reconstruction (PSR) and machine
          learning to predict peak ratios in ECG traces.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Log in
            <ArrowRight className="size-4" strokeWidth={2} />
          </a>
        </div>
      </div>

    </section>
  );
}

function Partners() {
  return (
    <section className="border-y border-hairline bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
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

/* lucide v1 removed its brand icons, so the three social marks are inlined. */
const socialIcons = {
  facebook:
    "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

function SocialLink({
  network,
  name,
}: {
  network: keyof typeof socialIcons;
  name: string;
}) {
  return (
    <a
      href="#"
      aria-label={`${name} on ${network}`}
      className="text-white/75 transition-colors hover:text-white"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d={socialIcons[network]} />
      </svg>
    </a>
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


      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {team.map((member) => (
          <article
            key={member.name}
            className="relative aspect-[2/5] overflow-hidden rounded-xl bg-slate-100"
          >
            {/* Monogram sits underneath as a fallback, so a missing or failed
                photo leaves initials rather than an empty frame. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-sky"
            >
              <span className="text-3xl font-bold text-brand/70">
                {member.initials}
              </span>
            </div>

            <Image
              src={member.photo}
              alt={`${member.name}, ${member.role}`}
              fill
              sizes="(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw"
              className="object-cover object-top"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-2 pb-3 pt-12 text-center">
              <p className="text-sm font-semibold leading-tight text-white">
                {member.name}
              </p>
              <p className="mt-1 text-xs leading-tight text-white/70">
                {member.role}
              </p>
              <div className="mt-2.5 flex items-center justify-center gap-3">
                <SocialLink network="facebook" name={member.name} />
                <SocialLink network="github" name={member.name} />
                <SocialLink network="linkedin" name={member.name} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-xs">
          <Image
            src="/logo-deep-icd.png"
            alt="Deep-ICD Health Care"
            width={4532}
            height={1681}
            className="h-9 w-auto"
          />
          <p className="mt-6 text-sm leading-relaxed text-body">
            A research project using phase-space reconstruction and machine
            learning to predict peak ratios in ECG traces.
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
