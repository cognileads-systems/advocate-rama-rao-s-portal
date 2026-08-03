import { createFileRoute, Link } from "@tanstack/react-router";
import { type FormEvent, useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Upload, ShieldCheck, Scale, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WHATSAPP_URL, YOUTUBE_URL } from "@/components/site/constants";

export const Route = createFileRoute("/")({ component: HomePage });

const inputClass =
  "w-full rounded-md border border-white/15 bg-[color:var(--navy-deep)]/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[color:var(--gold)] focus:outline-none focus:ring-1 focus:ring-[color:var(--gold)]";

// Canonical English values — these MUST match the backend's matterCategories
// Set in intake.ts exactly, and MUST be in the SAME ORDER as the
// "matterCategories" array in every locale file (en.json / te.json / hi.json),
// since we zip the English value together with the translated label by index.
// If you ever reorder the list in one locale file, reorder it here too.
const MATTER_CATEGORY_VALUES = [
  "Property Dispute / Land Litigation",
  "High Court Writ Petition",
  "Guardianship / Family Court Matter",
  "Consumer Rights / Fraud Matter",
  "Loan App Harassment / Cyber Fraud",
  "Other",
];

function HomePage() {
  // Inject SEO, Open Graph & Schema.org Metadata dynamically
  useEffect(() => {
    document.title = "TLEGAL — National Campaign Against Illegal Loan Apps | Advocate Immaneni Rama Rao";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Free legal literacy campaign against illegal digital loan apps, cyber extortion & data theft under Article 21 and the DPDP Act. Led by Advocate Immaneni Rama Rao.");

    // Open Graph Meta Tags
    const ogTags = [
      { property: "og:title", content: "TLEGAL — National Campaign Against Illegal Loan Apps" },
      { property: "og:description", content: "Fight extortion. Expose data theft. Free public legal literacy & pro bono case review." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://advocate-rama-rao-s-portal.vercel.app/" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Schema.org JSON-LD for AEO
    const schemaId = "tlegal-jsonld-schema";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "TLEGAL — National Campaign Against Illegal Loan Apps",
        "founder": "Advocate Immaneni Rama Rao",
        "url": "https://advocate-rama-rao-s-portal.vercel.app",
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
          "latitude": "17.446480822221826",
          "longitude": "78.50109706691273"
        },
        "areaServed": "India",
        "knowsAbout": [
          "Digital Personal Data Protection Act (DPDP Act)",
          "Article 21 Constitutional Rights",
          "Cyber Extortion Defense",
          "High Court Writ Petitions"
        ]
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />
      <Hero />
      <TrustStrip />
      <CampaignSections />
      <PaidConsultation />
      <Footer />
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_#1e293b,_#0b0c10_65%)] py-24 text-white sm:py-32">
      {/* Background glow blobs — matches the reference dark cyber-legal look */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-96 w-96 rounded-full bg-[color:var(--alert)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[color:var(--signal)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12 lg:items-center">
        {/* Left column — existing translated copy, unchanged text/links */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--alert)]/50 bg-[color:var(--alert)]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--alert-soft)]">
            <span className="h-2 w-2 animate-ping rounded-full bg-[color:var(--alert)]" />
            {t("hero.eyebrow")}
          </div>

          <h1 className="mt-6 max-w-2xl font-sans text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 font-serif text-xl text-[color:var(--signal-soft)] sm:text-2xl">{t("hero.subtitle")}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{t("hero.description")}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/report" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[color:var(--alert)] to-[color:var(--alert-soft)] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[color:var(--alert)]/30 transition hover:opacity-90">
              {t("hero.ctaCampaign")} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[color:var(--signal)] hover:text-[color:var(--signal-soft)]">
              {t("hero.ctaWatch")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right column — floating warning + helpline panel, matches the reference visual */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/40 p-6 shadow-2xl backdrop-blur-sm">
            <div className="rounded-xl border border-[color:var(--alert)]/30 bg-[color:var(--alert)]/[0.08] p-4">
              <p className="text-sm font-bold uppercase tracking-wide text-[color:var(--alert-soft)]">Illegal Tactics to Watch For</p>
              <ul className="mt-3 space-y-1.5 text-sm text-white/75">
                <li>Unauthorized contact-list access</li>
                <li>Morphed photos used for extortion</li>
                <li>Threats and harassment calls</li>
              </ul>
            </div>

            <div className="mt-5 rounded-xl border border-[color:var(--signal)]/30 bg-[color:var(--signal)]/[0.08] p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wide text-[color:var(--signal-soft)]">Need Help Right Now?</p>
              <p className="mt-1 text-base font-bold text-white">Reach the TLEGAL Team</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--signal)] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[color:var(--signal-soft)]">
                WhatsApp Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CampaignSections() {
  const { t } = useTranslation();
  return (
    <main>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>{t("campaign.digitalSafetyEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">{t("campaign.digitalSafetyTitle")}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--slate-dark)]/80">{t("campaign.digitalSafetyDesc")}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[color:var(--navy)]">
            <Link to="/report" className="border-b border-[color:var(--alert)] pb-1 hover:text-[color:var(--alert)]">{t("campaign.linkReport")}</Link>
            <Link to="/report" className="border-b border-[color:var(--alert)] pb-1 hover:text-[color:var(--alert)]">{t("campaign.linkParticipate")}</Link>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="border-b border-[color:var(--signal)] pb-1 hover:text-[color:var(--signal)]">{t("campaign.linkSupport")}</a>
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--navy)]/10 bg-[color:var(--navy-deep)]/[0.03] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>{t("campaign.patternEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">{t("campaign.patternTitle")}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--slate-dark)]/80">{t("campaign.patternDesc")}</p>
        </div>
      </section>

      <section className="bg-[color:var(--navy)] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>{t("campaign.participationEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl">{t("campaign.participationTitle")}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">{t("campaign.participationDesc")}</p>
          <Link to="/report" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--alert)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--alert-soft)]">
            {t("campaign.participationCta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>{t("campaign.reportSafelyEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">{t("campaign.reportSafelyTitle")}</h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-[color:var(--slate-dark)]/80">
            <p>{t("campaign.reportSafelyP1")}</p>
            <p>{t("campaign.reportSafelyP2")}</p>
            <p>{t("campaign.reportSafelyP3")}</p>
            <p>{t("campaign.reportSafelyP4")}</p>
          </div>
          <Link to="/report" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--navy)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--navy-deep)]">
            {t("campaign.reportSafelyCta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-[color:var(--signal)]/30 bg-[color:var(--signal)]/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>{t("campaign.rightsEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">{t("campaign.rightsTitle")}</h2>
          <p className="mt-3 text-lg font-medium text-[color:var(--navy)]">{t("campaign.rightsSubtitle")}</p>
          <div className="mt-7 max-w-4xl space-y-4 leading-relaxed text-[color:var(--slate-dark)]/85">
            <p>{t("campaign.rightsP1")}</p>
            <p>{t("campaign.rightsP2")}</p>
            <p>{t("campaign.rightsP3")}</p>
            <p>{t("campaign.rightsP4")}</p>
            <p>{t("campaign.rightsP5")}</p>
            <p>{t("campaign.rightsP6")}</p>
            <p>{t("campaign.rightsP7")}</p>
            <p className="font-semibold text-[color:var(--navy)]">{t("campaign.rightsBold")}</p>
            <p>{t("campaign.rightsP8")}</p>
            <p>{t("campaign.rightsP9")}</p>
          </div>
        </div>
      </section>

      {/* Scannable "Why This Matters" Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>{t("campaign.whyEyebrow")}</SectionEyebrow>
          <p className="mt-3 max-w-3xl text-lg font-serif text-[color:var(--navy)] sm:text-2xl">
            Key Pillars Governing Digital Debt Recovery & Data Privacy
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-[color:var(--alert)] font-bold text-base mb-3">
                <ShieldCheck className="h-5 w-5" /> 01. Article 21 Rights
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Coercive recovery tactics strip individuals of human dignity and violate the fundamental right to life and personal liberty guaranteed under Article 21 of the Constitution.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-[color:var(--signal)] font-bold text-base mb-3">
                <FileText className="h-5 w-5" /> 02. RBI Directives
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                The Reserve Bank of India strictly prohibits illegal contact harvesting, harassment, and unauthorized recovery intermediaries operating without NBFC backing.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-[color:var(--alert)] font-bold text-base mb-3">
                <Scale className="h-5 w-5" /> 03. Judicial Precedents
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                High Courts have consistently ruled that financial disputes must never be exploited for extortion, morphed photo blackmail, or cyber intimidation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PaidConsultation() {
  const { t } = useTranslation();
  return (
    <section id="intake-form" className="border-t border-[color:var(--navy)]/15 bg-[color:var(--slate-dark)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionEyebrow>{t("intake.eyebrow")}</SectionEyebrow>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl">{t("intake.title")}</h2>
        <p className="mt-5 max-w-3xl text-white/75">{t("intake.description")}</p>
        <a href="#case-review-form" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition hover:bg-[color:var(--gold-soft)]">
          {t("intake.cta")} <ArrowRight className="h-4 w-4" />
        </a>
        <PaidIntakeForm />
      </div>
    </section>
  );
}

function PaidIntakeForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [matterCategory, setMatterCategory] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  // Translated labels shown to the user — order must match MATTER_CATEGORY_VALUES above.
  const categoryLabels = t("matterCategories", { returnObjects: true }) as string[];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.delete("attachments");
    attachments.forEach((file) => formData.append("attachments", file));
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/intake", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(t("intake.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-12 rounded-md border border-[color:var(--gold)]/40 bg-white/[0.05] p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[color:var(--gold)]" />
        <h3 className="mt-4 font-serif text-2xl">{t("intake.successTitle")}</h3>
        <p className="mt-2 text-sm text-white/75">{t("intake.successMessage")}</p>
      </div>
    );
  }

  return (
    <form id="case-review-form" onSubmit={handleSubmit} className="mt-12 grid gap-5 rounded-md border border-white/15 bg-white/[0.04] p-6 sm:p-10">
      <input name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <input type="hidden" name="entry_type" value="Paid Consultation Intake" />
      <input type="hidden" name="source_page" value="/" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("intake.fullName")} required>
          <input required name="full_name" className={inputClass} />
        </Field>
        <Field label={t("intake.whatsappNumber")} required>
          <input required name="phone" type="tel" className={inputClass} />
        </Field>
        <Field label={t("intake.matterCategory")} required>
          {/*
            FIX (was silently breaking non-English submissions): the <option value>
            must always be the canonical English string the backend accepts —
            only the visible label changes with the language.
          */}
          <select required name="matter_category" value={matterCategory} onChange={(e) => setMatterCategory(e.target.value)} className={inputClass}>
            <option value="">{t("intake.matterCategory")}</option>
            {MATTER_CATEGORY_VALUES.map((value, i) => (
              <option key={value} value={value}>{categoryLabels[i] ?? value}</option>
            ))}
          </select>
        </Field>
        <Field label={t("intake.opposingParty")}>
          <input name="opposing_party" className={inputClass} />
        </Field>
      </div>
      <Field label={t("intake.caseDescription")} required>
        <textarea required name="description" rows={5} className={inputClass + " resize-none"} />
      </Field>
      <Field label={t("intake.reviewType")} required>
        <select required name="consultation_tier" className={inputClass}>
          <option value="Tier 1 — Junior Advocate Case Review">{t("intake.reviewTypeProBono")}</option>
          <option value="Tier 2 — High Court Strategic Consultation">{t("intake.reviewTypeGeneral")}</option>
        </select>
      </Field>

      <Field label={t("intake.preferredDateTime")}>
        <input name="preferred_datetime" type="datetime-local" className={inputClass} />
      </Field>
      <Field label={t("intake.documents")} hint={t("intake.documentsHint")}>
        <label
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); setAttachments(Array.from(e.dataTransfer.files)); }}
          className="flex cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-white/20 px-6 py-8 text-center transition hover:border-[color:var(--gold)]"
        >
          <Upload className="h-6 w-6 text-[color:var(--gold)]" />
          <span className="mt-2 text-sm text-white/80">{t("intake.documentsPlaceholder")}</span>
          <span className="mt-1 text-xs text-white/50">{attachments.length ? `${attachments.length} file(s) selected` : t("intake.documentsTypes")}</span>
          <input name="attachments" type="file" multiple className="hidden" onChange={(e) => setAttachments(Array.from(e.target.files ?? []))} />
        </label>
      </Field>
      {error && <p role="alert" className="rounded border border-red-300/40 bg-red-950/30 px-3 py-2 text-sm text-red-100">{error}</p>}
      <button disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-4 text-sm font-semibold text-[color:var(--navy)] disabled:opacity-60">
        {isSubmitting ? t("intake.submitting") : t("intake.submit")} <ArrowRight className="h-4 w-4" />
      </button>
      <p className="text-[11px] leading-relaxed text-white/55">{t("intake.disclaimer")}</p>
    </form>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex justify-between gap-3 text-xs uppercase tracking-[0.15em] text-white/70">
        {label}
        {required && <b className="text-[color:var(--gold)]">*</b>}
        {hint && <em className="normal-case tracking-normal text-white/45">{hint}</em>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}