import Image from "next/image";
import { LOGO, asset } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-raised">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-sm">
          <Image
            src={asset(LOGO)}
            alt="Deep-ICD"
            width={640}
            height={165}
            className="h-10 w-auto"
          />
          <p className="mt-5 text-sm leading-relaxed text-body">
            Advancing personalised ICD screening through research and clinical
            collaboration.
          </p>
        </div>

        <p className="text-xs text-body">
          &copy; {new Date().getFullYear()} Deep-ICD
        </p>
      </div>
    </footer>
  );
}
