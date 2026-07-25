import { Link } from "@tanstack/react-router";
import { Scale, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/practice", label: "Practice" },
  { to: "/knowledge", label: "Knowledge" },
] as const;

export function Header() {
  return (
    <header className="bg-[color:var(--navy)] text-white border-b border-white/10 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--navy-deep)]">
            <Scale className="h-5 w-5 text-[color:var(--gold)]" />
          </div>
          <div className="min-w-0">
            <h2 className="font-serif text-lg sm:text-xl leading-tight truncate">
              Guardian & Co (Advocate & Solicitors)
            </h2>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
              Rama Rao Immaneni, B.A., LL.B. — Advocate, High Court
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{
                  className:
                    "text-[color:var(--gold-soft)] border-[color:var(--gold)]/60 bg-white/[0.04]",
                }}
                inactiveProps={{ className: "text-white/75 border-transparent hover:text-white" }}
                className="px-3 py-2 text-sm rounded-md border transition"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-[color:var(--gold)]/60 px-4 py-2 text-sm font-medium text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
      <nav className="md:hidden border-t border-white/10 bg-[color:var(--navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex gap-1 overflow-x-auto">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-[color:var(--gold-soft)] bg-white/[0.05]" }}
              inactiveProps={{ className: "text-white/70" }}
              className="px-3 py-2 text-xs uppercase tracking-widest rounded"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
