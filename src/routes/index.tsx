import { createFileRoute, Link } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { YOUTUBE_URL } from "@/components/site/constants";

export const Route = createFileRoute("/")({ component: HomePage });

const inputClass =
  "w-full rounded-md border border-white/15 bg-[color:var(--navy-deep)]/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[color:var(--gold)] focus:outline-none focus:ring-1 focus:ring-[color:var(--gold)]";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />
      <Hero />
      <CampaignSections />
      <PaidConsultation />
      <Footer />
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy)] py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, #d4af37 0%, transparent 42%), radial-gradient(circle at 75% 70%, #d4af37 0%, transparent 45%)" }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">{t("hero.eyebrow")}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">{t("hero.title")}</h1>
        <p className="mt-6 font-serif text-xl text-[color:var(--gold-soft)] sm:text-3xl">{t("hero.subtitle")}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{t("hero.description")}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/report" className="inline-flex items-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition hover:bg-[color:var(--gold-soft)]">
            {t("hero.ctaCampaign")} <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]">
            {t("hero.ctaWatch")} <ArrowRight className="h-4 w-4" />
          </a>
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
            <Link to="/report" className="border-b border-[color:var(--gold)] pb-1 hover:text-[color:var(--gold)]">{t("campaign.linkReport")}</Link>
            <Link to="/report" className="border-b border-[color:var(--gold)] pb-1 hover:text-[color:var(--gold)]">{t("campaign.linkParticipate")}</Link>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="border-b border-[color:var(--gold)] pb-1 hover:text-[color:var(--gold)]">{t("campaign.linkSupport")}</a>
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
          <Link to="/report" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition hover:bg-[color:var(--gold-soft)]">
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

      <section className="border-y border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.08] py-20 sm:py-28">
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

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>{t("campaign.whyEyebrow")}</SectionEyebrow>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-[color:var(--slate-dark)]/85">{t("campaign.whyDesc")}</p>
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

  const categories = t("matterCategories", { returnObjects: true }) as string[];

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
          <select required name="matter_category" value={matterCategory} onChange={(e) => setMatterCategory(e.target.value)} className={inputClass}>
            <option value="">{t("intake.matterCategory")}</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </Field>
        <Field label={matterCategory === t("matterCategories.4") ? t("intake.opposingParty") : t("intake.opposingParty")}>
          <input name="opposing_party" className={inputClass} />
        </Field>
      </div>
      <Field label={t("intake.caseDescription")} required>
        <textarea required name="description" rows={5} className={inputClass + " resize-none"} />
      </Field>
      <Field label={t("intake.reviewType")} required>
        <select required name="review_type" className={inputClass}>
          <option value="pro_bono">{t("intake.reviewTypeProBono")}</option>
          <option value="general_guidance">{t("intake.reviewTypeGeneral")}</option>
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