import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Areas of Practice | TLEGAL — National Campaign Against Illegal Loan Apps" },
      { name: "description", content: "Detailed practice areas of Advocate Rama Rao Immaneni: property litigation, High Court writs, family and guardianship, and commercial disputes." },
      { property: "og:title", content: "Areas of Practice | TLEGAL" },
      { property: "og:description", content: "Property litigation, High Court writs, guardianship and estate, and commercial dispute practice — Advocate Rama Rao Immaneni." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticePage,
});

const PRACTICE_SECTIONS = [
  { titleKey: "practice.propertyTitle", bodyKeys: ["practice.propertyP1", "practice.propertyP2", "practice.propertyP3"] },
  { titleKey: "practice.writTitle", bodyKeys: ["practice.writP1", "practice.writP2", "practice.writP3"] },
  { titleKey: "practice.familyTitle", bodyKeys: ["practice.familyP1", "practice.familyP2", "practice.familyP3"] },
  { titleKey: "practice.commercialTitle", bodyKeys: ["practice.commercialP1", "practice.commercialP2", "practice.commercialP3"] },
];

const MAP_SRC = "https://maps.google.com/maps?q=Guardian%20%26%20Co%2C%20AKRC%20Class%2C%20Plot%20No.%202%2FP%2C%20Sarvasukhi%20Colony%2C%20West%20Marredpally%2C%20Secunderabad&t=&z=15&ie=UTF8&iwloc=&output=embed";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Guardian+%26+Co,+Sarvasukhi+Colony,+West+Marredpally,+Secunderabad";

function PracticePage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />

      <section className="bg-[color:var(--navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <SectionEyebrow>{t("practice.eyebrow")}</SectionEyebrow>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight max-w-4xl">{t("practice.title")}</h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed">{t("practice.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-16 sm:space-y-20">
            {PRACTICE_SECTIONS.map((section, i) => {
              const alt = i % 2 === 1;
              return (
                <article key={section.titleKey} className={alt ? "border-l-2 border-[color:var(--gold)]/70 pl-6 sm:pl-8 max-w-[720px]" : "max-w-[720px]"}>
                  <h2 className="font-serif text-2xl sm:text-4xl text-[color:var(--navy)] leading-tight">{t(section.titleKey)}</h2>
                  <div className="mt-6 space-y-5">
                    {section.bodyKeys.map((key) => (
                      <p key={key} className="text-[color:var(--slate-dark)]/85 text-base leading-[1.7]">{t(key)}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[color:var(--navy-deep)]/[0.03] border-y border-[color:var(--navy)]/10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>{t("practice.mediaEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">{t("practice.mediaTitle")}</h2>
          <p className="mt-4 text-[color:var(--slate-dark)]/75 max-w-2xl">{t("practice.mediaDesc")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>{t("practice.chambersEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">{t("practice.chambersTitle")}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-[color:var(--gold)]">{t("practice.chambersLabel")}</p>
              <address className="mt-4 not-italic text-[color:var(--slate-dark)] text-base leading-[1.7] whitespace-pre-line">{t("practice.chambersAddress")}</address>
              <div className="mt-6 text-sm text-[color:var(--slate-dark)]/80 space-y-1">
                <p><span className="text-[color:var(--navy)] font-semibold">{t("practice.telephone")}:</span> +91 96666 98551 / +91 98482 38969</p>
                <p><span className="text-[color:var(--navy)] font-semibold">{t("practice.email")}:</span> tlegal2020@gmail.com</p>
              </div>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md border border-[color:var(--navy)]/30 px-5 py-3 text-sm font-semibold text-[color:var(--navy)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition">
                <MapPin className="h-4 w-4" /> {t("practice.directions")}
              </a>
            </div>
            <div>
              <div className="border border-[color:var(--navy)]/20 overflow-hidden">
                <iframe title="Chambers location" src={MAP_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full" style={{ height: 400, border: 0 }} allowFullScreen />
              </div>
              <p className="mt-4 text-xs italic text-[color:var(--slate-dark)]/65 leading-relaxed">{t("practice.visitNote")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[color:var(--navy)] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">{t("practice.pageCta")}</p>
          <div className="mt-8">
            <Link to="/" hash="intake-form" className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-7 py-4 text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--gold-soft)] transition">
              {t("practice.pageCtaButton")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}