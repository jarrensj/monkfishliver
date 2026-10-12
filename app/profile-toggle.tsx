import Link from "next/link";

const profiles = [
  { href: "/", label: "Frontend" },
  { href: "/crypto", label: "Crypto" },
] as const;

export function ProfileToggle({
  current,
}: {
  current: (typeof profiles)[number]["href"];
}) {
  return (
    <nav className="vbg-document-meta vbg-custom-toggle" aria-label="Profile">
      {profiles.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="vbg-button"
          data-selected={href === current ? "true" : undefined}
          aria-current={href === current ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
