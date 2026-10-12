"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const paths = [
  { href: "/", label: "~/jarren", description: "Frontend" },
  { href: "/crypto", label: "~/jarren/crypto", description: "Crypto" },
] as const;

export function PathSwitcher({
  current,
}: {
  current: (typeof paths)[number]["href"];
}) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const active = paths.find((path) => path.href === current) ?? paths[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="vbg-identity vbg-custom-switcher"
      aria-label="Profile"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="vbg-custom-switcher-trigger"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        <span className="vbg-mono vbg-heading-24">{active.label}</span>
        <svg
          className="vbg-custom-switcher-chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul id={menuId} className="vbg-custom-switcher-menu" hidden={!open}>
        {paths.map(({ href, label, description }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={href === current ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="vbg-mono">{label}</span>
              <span>{description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
