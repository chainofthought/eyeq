import Link from "next/link";

type ContentCardProps = {
  href: string;
  label: string;
  title: string;
  description: string;
  action: string;
  meta?: string;
};

export default function ContentCard({
  href,
  label,
  title,
  description,
  action,
  meta,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-neutral-800 p-8 transition hover:border-neutral-600"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          {label}
        </p>

        {meta && (
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            {meta}
          </p>
        )}
      </div>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-neutral-400">
        {description}
      </p>

      <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
        {action} →
      </p>
    </Link>
  );
}