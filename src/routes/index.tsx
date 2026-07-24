import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scale,
  Shield,
  FileCheck,
  Gavel,
  Building2,
  Users,
  MessageCircle,
  Upload,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/919666698551";

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />
      <Hero />
      <TierCatalog />
      <IntakeForm />
      <PracticeAreas />
      <Footer />
    </div>
  );
}

function DisclaimerBar() {
  return (
    <div className="bg-[color:var(--navy-deep)] text-white/90 text-xs sm:text-[13px] leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-start gap-3">
        <Shield className="h-4 w-4 shrink-0 text-[color:var(--gold)] mt-0.5" />
        <p>
          <span className="font-semibold text-[color:var(--gold)]">Bar Council of India · Rule 36 Disclaimer:</span>{" "}
          This portal is strictly for informational purposes. No solicitation, advertisement, or binding legal advice is offered prior to formal executed consultation.
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[color:var(--navy)] text-white border-b border-white/10 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--navy-deep)]">
            <Scale className="h-5 w-5 text-[color:var(--gold)]" />
          </div>
          <div className="min-w-0">
            <h2 className="font-serif text-lg sm:text-xl leading-tight truncate">
              Rama Rao Immaneni
            </h2>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
              Advocate · High Court
            </p>
          </div>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-md border border-[color:var(--gold)]/60 px-4 py-2 text-sm font-medium text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Intake
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy)] text-white">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #d4af37 0%, transparent 40%), radial-gradient(circle at 80% 60%, #d4af37 0%, transparent 45%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            Chambers of Advocate Rama Rao Immaneni
          </div>

          <h1 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight">
            High Court Litigation &<br className="hidden sm:block" />{" "}
            <span className="text-[color:var(--gold-soft)]">Strategic Legal Counsel</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            Senior legal representation for complex property disputes, writ petitions, and guardianship matters before the High Court.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CredibilityBadge icon={<Gavel className="h-3.5 w-3.5" />} label="15+ Years Practice" />
            <CredibilityBadge icon={<Scale className="h-3.5 w-3.5" />} label="High Court Advocate" />
            <CredibilityBadge icon={<Shield className="h-3.5 w-3.5" />} label="Conflict-Free Screening Engine" />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--gold-soft)] transition shadow-lg shadow-black/20"
            >
              Book Document Screening
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)] transition"
            >
              <MessageCircle className="h-4 w-4" />
              Direct WhatsApp Intake
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />
    </section>
  );
}

function CredibilityBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs sm:text-sm text-white/85">
      <span className="text-[color:var(--gold)]">{icon}</span>
      {label}
    </span>
  );
}

function TierCatalog() {
  return (
    <section id="consultation" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionEyebrow>Engagement</SectionEyebrow>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">
          Structured Intake & Consultation Options
        </h2>
        <p className="mt-4 text-[color:var(--slate-dark)]/75 max-w-2xl">
          Two tiers of engagement, each with a defined scope. All matters begin with a formal conflict-of-interest screening.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <TierCard
            tag="Tier 01"
            title="Junior Advocate Document Screening"
            fee="₹2,500"
            bestFor="Preliminary case review, legal notice analysis, and document verification."
            bullets={[
              "Structured review of notices and orders",
              "Written summary of legal position",
              "Escalation pathway to senior counsel",
            ]}
            ctaLabel="Book Document Screening"
            ctaHref="#intake"
            variant="light"
          />
          <TierCard
            tag="Tier 02 · Senior"
            title="Senior High Court Strategy Retainer"
            fee="₹10,000"
            bestFor="Senior consultation directly with Advocate Rama Rao Immaneni for active High Court matters & urgent stay orders."
            bullets={[
              "Direct strategic session with senior counsel",
              "Drafting review for writs & stay applications",
              "Priority scheduling for urgent listings",
            ]}
            ctaLabel="Reserve Senior Consultation"
            ctaHref="#intake"
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}

function TierCard({
  tag, title, fee, bestFor, bullets, ctaLabel, ctaHref, variant,
}: {
  tag: string; title: string; fee: string; bestFor: string; bullets: string[];
  ctaLabel: string; ctaHref: string; variant: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <div
      className={
        "relative rounded-xl border p-8 sm:p-10 transition " +
        (dark
          ? "bg-[color:var(--navy)] border-[color:var(--gold)]/30 text-white shadow-xl shadow-black/10"
          : "bg-white border-[color:var(--navy)]/10 text-[color:var(--navy)] hover:border-[color:var(--gold)]/60")
      }
    >
      {dark && (
        <span className="absolute -top-3 left-8 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--navy)]">
          Senior Counsel
        </span>
      )}
      <p className={"text-[11px] uppercase tracking-[0.22em] " + (dark ? "text-[color:var(--gold-soft)]" : "text-[color:var(--gold)]")}>
        {tag}
      </p>
      <h3 className={"mt-3 font-serif text-2xl sm:text-3xl leading-snug " + (dark ? "text-white" : "text-[color:var(--navy)]")}>
        {title}
      </h3>
      <div className="mt-6 flex items-baseline gap-2">
        <span className={"font-serif text-5xl " + (dark ? "text-white" : "text-[color:var(--navy)]")}>{fee}</span>
        <span className={"text-sm " + (dark ? "text-white/60" : "text-[color:var(--slate-dark)]/60")}>/ session</span>
      </div>
      <p className={"mt-4 text-sm leading-relaxed " + (dark ? "text-white/75" : "text-[color:var(--slate-dark)]/75")}>
        <span className={"font-semibold " + (dark ? "text-white" : "text-[color:var(--navy)]")}>Best for: </span>
        {bestFor}
      </p>

      <ul className="mt-6 space-y-3">
        {bullets.map((b) => (
          <li key={b} className={"flex items-start gap-3 text-sm " + (dark ? "text-white/85" : "text-[color:var(--slate-dark)]")}>
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={
          "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition " +
          (dark
            ? "bg-[color:var(--gold)] text-[color:var(--navy)] hover:bg-[color:var(--gold-soft)]"
            : "bg-[color:var(--navy)] text-white hover:bg-[color:var(--navy-deep)]")
        }
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--gold)]">
      <span className="h-px w-8 bg-[color:var(--gold)]" />
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-white/15 bg-[color:var(--navy-deep)]/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[color:var(--gold)] focus:ring-1 focus:ring-[color:var(--gold)] transition";

function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  return (
    <section id="intake" className="py-20 sm:py-28 bg-[color:var(--navy)] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionEyebrow>Conflict Screening</SectionEyebrow>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl max-w-3xl">
          Conflict-of-Interest Digital Intake
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          Every matter is screened against existing client engagements before consultation. All information is treated as privileged.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-xl border border-[color:var(--gold)]/40 bg-white/[0.04] p-10 text-center">
            <CheckCircle2 className="h-10 w-10 text-[color:var(--gold)] mx-auto" />
            <h3 className="mt-4 font-serif text-2xl">Submission Received</h3>
            <p className="mt-2 text-white/70 text-sm max-w-lg mx-auto">
              Your matter has been queued for conflict screening. A member of chambers will contact you on the WhatsApp number provided within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-12 grid gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input required type="text" className={inputClass} placeholder="As per official records" />
              </Field>
              <Field label="WhatsApp Phone Number" required>
                <input required type="tel" className={inputClass} placeholder="+91 · 10-digit number" />
              </Field>
              <Field label="Opposite Party Name" required hint="Mandatory for conflict check">
                <input required type="text" className={inputClass} placeholder="Individual / Entity name" />
              </Field>
              <Field label="Matter Jurisdiction" required>
                <select required className={inputClass + " appearance-none"} defaultValue="">
                  <option value="" disabled>Select jurisdiction</option>
                  <option>High Court</option>
                  <option>District Court</option>
                  <option>Tribunal</option>
                </select>
              </Field>
            </div>

            <Field label="Brief Case Description" required>
              <textarea required rows={5} className={inputClass + " resize-none"} placeholder="Nature of dispute, current stage, and relief sought." />
            </Field>

            <Field label="Document Attachment" hint="Upload notices, orders, or filings (PDF, DOC, JPG)">
              <label
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  const f = e.dataTransfer.files?.[0];
                  if (f) setFileName(f.name);
                }}
                className={
                  "flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed px-6 py-10 cursor-pointer transition " +
                  (dragOver
                    ? "border-[color:var(--gold)] bg-[color:var(--gold)]/5"
                    : "border-white/20 hover:border-[color:var(--gold)]/50 bg-white/[0.02]")
                }
              >
                <Upload className="h-6 w-6 text-[color:var(--gold)]" />
                <p className="text-sm text-white/80">
                  {fileName ? <span className="text-[color:var(--gold-soft)] font-medium">{fileName}</span> : "Drag and drop, or click to browse"}
                </p>
                <p className="text-xs text-white/50">Confidential · encrypted transit</p>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setFileName(f.name);
                  }}
                />
              </label>
            </Field>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-4 text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--gold-soft)] transition"
            >
              Submit Case for Conflict Screening
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label, required, hint, children,
}: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-white/70">
          {label} {required && <span className="text-[color:var(--gold)]">*</span>}
        </span>
        {hint && <span className="text-[11px] text-white/45">{hint}</span>}
      </div>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function PracticeAreas() {
  const areas = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Property Litigation & Title Disputes",
      desc: "Adverse possession, partition suits, injunctions, and specific performance actions across trial and appellate forums.",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "High Court Writ Petitions & Constitutional Remedies",
      desc: "Article 226 & 227 petitions, service matters, and challenges to statutory action before the High Court.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Family, Guardianship & Estate Matters",
      desc: "Guardianship applications, succession certificates, probate, and contested testamentary disputes.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionEyebrow>Practice</SectionEyebrow>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">
          Focused Areas of Practice
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {areas.map((a) => (
            <div
              key={a.title}
              className="group relative rounded-xl border border-[color:var(--navy)]/10 bg-white p-8 transition hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--navy)]/5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-md bg-[color:var(--navy)] text-[color:var(--gold)] transition group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--navy)]">
                {a.icon}
              </div>
              <h3 className="mt-6 font-serif text-xl text-[color:var(--navy)] leading-snug">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--slate-dark)]/75">
                {a.desc}
              </p>
              <div className="mt-6 h-px w-10 bg-[color:var(--gold)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md border border-[color:var(--gold)]/40">
              <Scale className="h-5 w-5 text-[color:var(--gold)]" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white">Rama Rao Immaneni</h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">Advocate · High Court</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
            Chambers of Advocate Rama Rao Immaneni — dedicated to litigation of complex property, constitutional, and family matters.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">Chambers</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <span>Advocate's Chambers, High Court Complex,<br />Hyderabad, Telangana</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <span>chambers@immaneni.legal</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">Immediate Action</h4>
          <p className="mt-5 text-sm text-white/60">
            Reach chambers directly for time-sensitive matters and urgent stay applications.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-[color:var(--gold)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Chambers
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Chambers of Advocate Rama Rao Immaneni. All rights reserved.</p>
          <p className="text-white/35">System Architecture Powered by <span className="text-[color:var(--gold-soft)]">VectraSyn AI Systems</span></p>
        </div>
      </div>
    </footer>
  );
}
