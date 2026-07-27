import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Public Legal Education & DPDP Rights | TLEGAL Knowledge Hub" },
      { name: "description", content: "Citizen-facing legal explainers, scam awareness checklists, and DPDP Act rights published in public interest by Advocate Immaneni Rama Rao." },
      { property: "og:title", content: "Public Legal Education & DPDP Rights | TLEGAL Knowledge Hub" },
      { property: "og:description", content: "Legal education videos, scam awareness checklists, and citizen rights guides from Advocate Immaneni Rama Rao." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://advocate-rama-rao-s-portal.vercel.app/knowledge" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KnowledgePage,
});

const VIDEOS = [
  { id: "xVBErjt4mIY", titleKey: "knowledge.video1Title", descKey: "knowledge.video1Desc" },
  { id: "Obf_GytHiUA", titleKey: "knowledge.video2Title", descKey: "knowledge.video2Desc" },
  { id: "j1dWhdU_zao", titleKey: "knowledge.video3Title", descKey: "knowledge.video3Desc" },
];

const CHECKLIST_KEYS = [
  { title: "knowledge.checklistItem1Title", body: "knowledge.checklistItem1Body" },
  { title: "knowledge.checklistItem2Title", body: "knowledge.checklistItem2Body" },
  { title: "knowledge.checklistItem3Title", body: "knowledge.checklistItem3Body" },
  { title: "knowledge.checklistItem4Title", body: "knowledge.checklistItem4Body" },
  { title: "knowledge.checklistItem5Title", body: "knowledge.checklistItem5Body" },
  { title: "knowledge.checklistItem6Title", body: "knowledge.checklistItem6Body" },
  { title: "knowledge.checklistItem7Title", body: "knowledge.checklistItem7Body" },
];

const GUIDE_KEYS = [
  { title: "knowledge.guide1Title", body: "knowledge.guide1Body" },
  { title: "knowledge.guide2Title", body: "knowledge.guide2Body" },
  { title: "knowledge.guide3Title", body: "knowledge.guide3Body" },
];

function KnowledgePage() {
  const { t } = useTranslation();

  // Dynamic Metadata & Video Object JSON-LD Injection
  useEffect(() => {
    document.title = "Public Legal Education & DPDP Rights | TLEGAL Knowledge Hub";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Citizen-facing legal explainers, scam awareness checklists, and DPDP Act rights published in public interest by Advocate Immaneni Rama Rao."
    );

    // Schema.org VideoObject Markup
    const schemaId = "tlegal-video-schema";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": VIDEOS.map((v, index) => ({
          "@type": "VideoObject",
          "position": index + 1,
          "name": t(v.titleKey),
          "description": t(v.descKey),
          "thumbnailUrl": `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
          "embedUrl": `https://www.youtube-nocookie.com/embed/${v.id}`
        }))
      });
      document.head.appendChild(script);
    }
  }, [t]);

  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />

      <section className="bg-[color:var(--navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <SectionEyebrow>{t("knowledge.eyebrow")}</SectionEyebrow>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight max-w-4xl">{t("knowledge.title")}</h1>
          <p className="mt-6 font-serif text-xl sm:text-2xl text-[color:var(--gold-soft)] max-w-3xl leading-snug">{t("knowledge.subtitle")}</p>
          <p className="mt-6 text-base text-white/70 max-w-3xl leading-relaxed">{t("knowledge.intro")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>{t("knowledge.videoEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">{t("knowledge.videoTitle")}</h2>
          <p className="mt-4 text-[color:var(--slate-dark)]/75 max-w-2xl">{t("knowledge.videoDesc")}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {VIDEOS.map((v) => (
              <article key={v.id}>
                <div className="relative w-full overflow-hidden rounded-md border border-[color:var(--navy)]/10 bg-[color:var(--navy)]" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&autoplay=0&modestbranding=1`}
                    title={t(v.titleKey)}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <h3 className="mt-5 font-serif text-lg text-[color:var(--navy)] leading-snug">{t(v.titleKey)}</h3>
                <p className="mt-2 text-sm text-[color:var(--slate-dark)]/75 leading-relaxed">{t(v.descKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[color:var(--navy-deep)]/[0.03] border-y border-[color:var(--navy)]/10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionEyebrow>{t("knowledge.checklistEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)]">{t("knowledge.checklistTitle")}</h2>
          <p className="mt-4 text-[color:var(--slate-dark)]/75 max-w-2xl">{t("knowledge.checklistIntro")}</p>
          <ol className="mt-12 space-y-8">
            {CHECKLIST_KEYS.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-serif text-2xl text-[color:var(--gold)] leading-none pt-1 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold text-[color:var(--navy)] text-base sm:text-lg">{t(item.title)}</h3>
                  <p className="mt-2 text-[color:var(--slate-dark)]/80 leading-[1.7]">{t(item.body)}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-md border border-[color:var(--navy)]/15 bg-white p-5 sm:p-6">
            <p className="text-sm italic text-[color:var(--slate-dark)]/70 leading-relaxed">{t("knowledge.checklistCaveat")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>{t("knowledge.guidesEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">{t("knowledge.guidesTitle")}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GUIDE_KEYS.map((g) => (
              <article key={g.title} className="relative flex flex-col rounded-md border border-white/10 bg-[color:var(--navy)] p-8 text-white">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[color:var(--gold)] rounded-t-md" />
                <h3 className="font-serif text-xl leading-snug text-white">{t(g.title)}</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed flex-1">{t(g.body)}</p>
                <Link to="/" hash="intake-form" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--gold-soft)] hover:text-[color:var(--gold)] transition">
                  {t("knowledge.guideCta")} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-md border border-[color:var(--gold)]/30 bg-[color:var(--slate-dark)] text-white p-10 sm:p-14 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">{t("knowledge.ctaTitle")}</h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">{t("knowledge.ctaDesc")}</p>
            <div className="mt-8">
              <Link to="/" hash="intake-form" className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-7 py-4 text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--gold-soft)] transition">
                {t("knowledge.ctaButton")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 text-[12px] italic text-white/50 max-w-xl mx-auto">{t("knowledge.ctaDisclaimer")}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}