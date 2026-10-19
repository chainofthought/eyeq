
import Image from "next/image";
import Link from "next/link";

const linkClass =
  "transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="border-b border-neutral-800 bg-[#0a0a0a]"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-5">
        <Link
          href="/"
          aria-label="EyeQ home"
          className="flex h-12 w-32 shrink-0 items-center justify-center rounded-md bg-neutral-200"
        >
          <Image
            src="/brand/logo.png"
            alt="EyeQ"
            width={600}
            height={200}
            className="h-15 w-auto object-contain"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-400">
          <Link href="/training" className={linkClass}>
            Training
          </Link>

          <Link href="/culture" className={linkClass}>
            Culture
          </Link>

          <Link href="/about" className={linkClass}>
            About
          </Link>

          <Link
            href="/cases"
            className="rounded-full border border-neutral-700 px-4 py-2 text-white transition hover:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
          >
            Try a case →
          </Link>
        </div>
      </div>
    </nav>
  );
}
