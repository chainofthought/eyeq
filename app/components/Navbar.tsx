
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex h-12 w-32 items-center justify-center rounded-md bg-neutral-200"
        >
          <Image
            src="/brand/logo.png"
            alt="EyeQ"
            width={600}
            height={200}
            className="h-15 w-auto object-contain"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
          <Link href="/culture" className="transition hover:text-white">
            Culture
          </Link>

          <Link href="/training" className="transition hover:text-white">
            Training
          </Link>

          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
