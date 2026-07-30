import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Areas of Practice | Advocate Immaneni Rama Rao & TLEGAL" },
      { name: "description", content: "High Court writ petitions, property litigation, cyber financial fraud defense, guardianship, and constitutional remedies by Advocate Immaneni Rama Rao." },
      { property: "og:title", content: "Areas of Practice | Advocate Immaneni Rama Rao & TLEGAL" },
      { property: "og:description", content: "Property litigation, High Court writs, guardianship and estate, and commercial dispute practice — Advocate Immaneni Rama Rao." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://advocate-rama-rao-s-portal.vercel.app/practice" },
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

// Exact-coordinate, no-API-key Google Maps embed. Coordinates verified directly
// against the ground-truth pin for the chambers building (17.4462612, 78.498487) —
// do NOT swap back to a text/address query (q=AKRC+Class...), since Google's
// fuzzy match on that query previously resolved to an unrelated business
// ("AKECA SCHOOL") instead of the exact address. Coordinate-based queries
// always drop a precise pin with no name-matching involved.
const MAP_SRC = "https://maps.google.com/maps?q=17.446480822221826,78.50109706691273&z=17&output=embed";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=17.446480822221826,78.50109706691273";

function PracticePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Areas of Practice | Advocate Immaneni Rama Rao & TLEGAL";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "High Court writ petitions, property litigation, cyber financial fraud defense, guardianship, and constitutional remedies by Advocate Immaneni Rama Rao."
    );

    const schemaId = "tlegal-practice-schema";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Chambers of Advocate Immaneni Rama Rao",
        "image": "https://advocate-rama-rao-s-portal.vercel.app/og-campaign.png",
        "telephone": "+919666698551",
        "email": "tlegal2020@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "AKRC Class, Plot No. 2/P, Sarvasukhi Colony, West Marredpally",
          "addressLocality": "Secunderabad",
          "addressRegion": "Telangana",
          "postalCode": "500026",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.4462612",
          "longitude": "78.498487"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Legal Practice Areas",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property & Title Litigation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High Court Writs & Constitutional Remedies" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family, Estates & Guardianship Matters" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Disputes & Cyber Fraud Defense" } }
          ]
        }
      });
      document.head.appendChild(script);
    }
  }, []);

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
              <div className="mb-6 flex items-center gap-4">
                <img
                  src="/assets/guardian-co-seal-400.png"
                  alt="Guardian & Co (Advocates & Solicitors) — official chambers seal, High Court in Telangana"
                  className="h-24 w-24 rounded-full border border-[color:var(--gold)]/40 object-contain bg-white p-1 shadow-sm sm:h-28 sm:w-28"
                />
                <div>
                  <p className="font-serif text-lg text-[color:var(--navy)]">Guardian &amp; Co</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-[color:var(--slate-dark)]/60">Advocates &amp; Solicitors</p>
                </div>
              </div>
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
              <div className="border border-[color:var(--navy)]/20 overflow-hidden rounded-md shadow-sm">
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