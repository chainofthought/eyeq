import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white"
        >
          EyeQ
        </Link>

        <div className="flex gap-6 text-sm text-neutral-400">
          <Link href="/articles" className="transition hover:text-white">
            Articles
          </Link>

          <Link href="/cases" className="transition hover:text-white">
            Cases
          </Link>

          <Link href="/detectives" className="transition hover:text-white">
            Detectives
          </Link>

          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}