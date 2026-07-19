"use client";

import { Lang, SiteContent } from "@/lib/content";

interface HeaderProps {
  c: SiteContent;
  lang: Lang;
  onToggleLang: (l: Lang) => void;
}

export default function Header({ c, lang, onToggleLang }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl font-medium tracking-tight text-navy"
        >
          Journeymate
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {c.nav.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="eyebrow text-[11px] font-medium text-muted transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border p-0.5 text-xs">
            {(["ja", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onToggleLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                  lang === l ? "bg-navy text-white" : "text-muted hover:text-navy"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden items-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-deep sm:inline-flex"
          >
            {c.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
