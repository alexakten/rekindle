import Link from "next/link";

export default function TextCard({
  tag,
  title,
  text,
  href,
}: {
  tag: string;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex text-sm tracking-wide flex-col font-helvetica w-full bg-[var(--color-gray)] hover:bg-[var(--color-gray-hover)] rounded-xl p-3"
    >
      <p className="opacity-60 flex justify-between">
        {tag} <span>Show More</span>
      </p>
      <h1 className="mt-2 font-medium">{title}</h1>
      <p className="opacity-60">{text}</p>
    </Link>
  );
}
