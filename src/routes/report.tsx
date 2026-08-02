import { createFileRoute, Link } from "@tanstack/react-router";
import { type FormEvent, useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Report a Fake Loan App | TLEGAL Public Campaign" },
      { name: "description", content: "Report illegal loan app extortion, contact list harvesting, or cyber blackmail to TLEGAL's public campaign. File evidence safely." },
      { property: "og:title", content: "Report Illegal Loan Apps & Cyber Extortion | TLEGAL" },
      { property: "og:description", content: "Submit evidence of illegal lending practices, harassment, and contact harvesting securely." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://advocate-rama-rao-s-portal.vercel.app/report" },
    ],
  }),
  component: ReportPage,
});

function ReportPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  // Client-side metadata fallback injection
  useEffect(() => {
    document.title = "Report a Fake Loan App | TLEGAL Public Campaign";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Report illegal loan app extortion, contact list harvesting, or cyber blackmail to TLEGAL's public campaign. File evidence safely."
    );
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.delete("attachments");
    attachments.forEach((file) => formData.append("attachments", file));
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/intake", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Report failed");
      setSubmitted(true);
    } catch {
      setError(t("report.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-md border border-[color:var(--navy)]/20 bg-white px-4 py-3 text-sm text-[color:var(--navy)] focus:border-[color:var(--alert)] focus:outline-none focus:ring-1 focus:ring-[color:var(--alert)]";

  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[color:var(--navy)] py-20 text-white sm:py-28">
          <div className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, #DC2626 0%, transparent 40%)" }} />
          <div className="relative mx-auto max-w-4xl px-4">
            <SectionEyebrow>{t("report.eyebrow")}</SectionEyebrow>
            <h1 className="mt-4 font-serif text-4xl sm:text-6xl">{t("report.title")}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{t("report.subtitle")}</p>
          </div>
        </section>
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4">
            {submitted ? (
              <div className="rounded-md border border-[color:var(--signal)]/40 bg-[color:var(--signal)]/[0.06] p-10 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[color:var(--signal)]" />
                <h2 className="mt-4 font-serif text-3xl text-[color:var(--navy)]">{t("report.successTitle")}</h2>
                <p className="mt-3 text-[color:var(--slate-dark)]/75">{t("report.successMessage")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 rounded-md border border-[color:var(--navy)]/15 bg-white p-6 shadow-sm sm:p-10">
                <input name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <input type="hidden" name="entry_type" value="Free Campaign Report (Loan App / Cyber Fraud)" />
                <input type="hidden" name="matter_category" value="Loan App Harassment / Cyber Fraud" />
                <input type="hidden" name="source_page" value="/report" />
                <ReportField label={t("report.fullName")}>
                  <input required name="full_name" className={inputClass} placeholder={t("report.fullNamePlaceholder")} />
                </ReportField>
                <ReportField label={t("report.loanAppName")}>
                  <input required name="opposing_party" className={inputClass} placeholder={t("report.loanAppPlaceholder")} />
                </ReportField>
                <ReportField label={t("report.description")}>
                  <textarea required name="description" rows={6} className={inputClass + " resize-none"} placeholder={t("report.descriptionPlaceholder")} />
                </ReportField>
                <ReportField label={t("report.contact")}>
                  <input name="phone" type="tel" className={inputClass} placeholder={t("report.contactPlaceholder")} />
                </ReportField>
                <ReportField label={t("report.evidence")} hint={t("report.evidenceHint")}>
                  <label
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      setAttachments(Array.from(e.dataTransfer.files));
                    }}
                    className="flex cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-[color:var(--navy)]/20 px-6 py-8 text-center hover:border-[color:var(--alert)]"
                  >
                    <Upload className="h-6 w-6 text-[color:var(--alert)]" />
                    <span className="mt-2 text-sm text-[color:var(--navy)]">{t("report.evidencePlaceholder")}</span>
                    <span className="mt-1 text-xs text-[color:var(--slate-dark)]/60">
                      {attachments.length ? `${attachments.length} file(s) selected` : t("report.evidenceTypes")}
                    </span>
                    <input name="attachments" type="file" multiple className="hidden" onChange={(e) => setAttachments(Array.from(e.target.files ?? []))} />
                  </label>
                </ReportField>
                {error && <p role="alert" className="rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>}
                <button disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--alert)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[color:var(--alert-soft)] disabled:opacity-60">
                  {isSubmitting ? t("report.submitting") : t("report.submit")} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </section>
        <section className="border-y border-[color:var(--navy)]/10 bg-[color:var(--navy-deep)]/[0.03] py-16">
          <div className="mx-auto max-w-3xl px-4">
            <SectionEyebrow>{t("report.legalServicesEyebrow")}</SectionEyebrow>
            <h2 className="mt-3 font-serif text-3xl text-[color:var(--navy)]">{t("report.legalServicesTitle")}</h2>
            <p className="mt-4 text-[color:var(--slate-dark)]/75">{t("report.legalServicesDesc")}</p>
            <Link to="/" hash="intake-form" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--navy)] px-5 py-3 text-sm font-semibold text-white">
              {t("report.legalServicesCta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ReportField({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex justify-between gap-3 text-xs uppercase tracking-[0.15em] text-[color:var(--slate-dark)]/75">
        {label}
        {hint && <em className="normal-case tracking-normal text-[color:var(--slate-dark)]/55">{hint}</em>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}