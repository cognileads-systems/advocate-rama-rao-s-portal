import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/i18n";

const LABELS: Record<SupportedLanguage, string> = {
  en: "EN",
  te: "తె",
  hi: "हि",
};

const STORAGE_KEY = "gc-lang";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
      if (saved && SUPPORTED_LANGUAGES.includes(saved) && saved !== i18n.language) {
        i18n.changeLanguage(saved);
      }
    } catch {}
  }, [i18n]);

  const current = (hydrated ? i18n.language : "en") as SupportedLanguage;

  const change = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem(STORAGE_KEY, lng);
    } catch {}
  };

  return (
    <div
      className="inline-flex items-center rounded-md border border-white/15 bg-white/[0.04] p-0.5 text-[11px] font-medium"
      role="group"
      aria-label="Language"
    >
      {SUPPORTED_LANGUAGES.map((lng) => {
        const active = current === lng;
        return (
          <button
            key={lng}
            type="button"
            onClick={() => change(lng)}
            aria-pressed={active}
            className={
              "px-2 py-1 rounded transition " +
              (active
                ? "bg-[color:var(--gold)] text-[color:var(--navy)]"
                : "text-white/70 hover:text-white")
            }
          >
            {LABELS[lng]}
          </button>
        );
      })}
    </div>
  );
}
