import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ShieldAlert, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();
  const navigation = [
    { to: "/", label: t("nav.home") },
    { to: "/practice", label: t("nav.practice") },
    { to: "/knowledge", label: t("nav.knowledge") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--navy)] text-white backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--navy-deep)]">
            <ShieldAlert className="h-5 w-5 text-[color:var(--gold)]" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate font-serif text-lg leading-tight sm:text-xl">TLEGAL</h2>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
              National Campaign Against Illegal Loan Apps
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="mr-2 hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "border-[color:var(--gold)]/60 bg-white/[0.04] text-[color:var(--gold-soft)]" }}
                inactiveProps={{ className: "border-transparent text-white/75 hover:text-white" }}
                className="rounded-md border px-3 py-2 text-sm transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md border border-[color:var(--gold)]/60 px-4 py-2 text-sm font-medium text-[color:var(--gold-soft)] transition hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Report via WhatsApp
          </a>
        </div>
      </div>
      <nav className="border-t border-white/10 bg-[color:var(--navy-deep)] md:hidden">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-white/[0.05] text-[color:var(--gold-soft)]" }}
              inactiveProps={{ className: "text-white/70" }}
              className="rounded px-3 py-2 text-xs uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
