import { SiteContent } from "@/lib/content";

export default function Footer({ c }: { c: SiteContent }) {
  return (
    <footer className="mt-auto bg-navy-deep text-white/80">
      <div className="container-page py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-serif text-xl font-medium text-white">Journeymate</div>
            <p className="mt-1 text-sm text-white/70">{c.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {c.nav.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          {c.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
