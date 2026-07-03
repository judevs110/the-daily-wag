"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NAV = [
  { href: "/dog-walking", label: "Walking" },
  { href: "/dog-grooming", label: "Grooming" },
  { href: "/puppy-visits", label: "Puppy visits" },
  { href: "/areas", label: "Areas" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const MOBILE_EXTRA = [
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Field notes" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-display text-2xl font-semibold text-ink">
          The Daily<span className="text-clay italic"> Wag</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`link-underline text-[0.95rem] font-medium ${
                pathname?.startsWith(item.href) ? "text-clay" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Book a walk
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-cream transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-8">
          {[{ href: "/", label: "Home" }, ...NAV, ...MOBILE_EXTRA].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="font-display border-b border-ink/10 py-4 text-3xl text-ink"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={close} className="btn-primary mt-8 justify-center text-lg">
            Book a walk
          </Link>
          <p className="mt-6 text-sm text-ink/70">
            Mon–Sat, 7am–6pm · <a href="tel:+441753123456" className="underline">01753 123456</a>
          </p>
        </nav>
      </div>
    </header>
  );
}
