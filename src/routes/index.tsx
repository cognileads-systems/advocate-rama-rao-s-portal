import { createFileRoute, Link } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, FileWarning, ShieldAlert, Upload } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { YOUTUBE_URL } from "@/components/site/constants";

export const Route = createFileRoute("/")({ component: HomePage });

const matterCategories = [
  "Property Dispute / Land Litigation",
  "High Court Writ Petition",
  "Guardianship / Family Court Matter",
  "Consumer Rights / Fraud Matter",
  "Loan App Harassment / Cyber Fraud",
  "Other",
];

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
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy)] py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, #d4af37 0%, transparent 42%), radial-gradient(circle at 75% 70%, #d4af37 0%, transparent 45%)" }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">TLEGAL</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">STOP DIGITAL LOAN TERROR</h1>
        <p className="mt-6 font-serif text-xl text-[color:var(--gold-soft)] sm:text-3xl">TLEGAL&apos;s National Campaign Against Illegal Loan Apps</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">Fight extortion. Expose data theft. End illegal recovery harassment.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/report" className="inline-flex items-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition hover:bg-[color:var(--gold-soft)]">
            Join the Campaign <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]">
            Watch & Subscribe <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CampaignSections() {
  return (
    <main>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>Digital Safety</SectionEyebrow>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">YOUR MOBILE SHOULD NOT BECOME A WEAPON AGAINST YOU</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--slate-dark)]/80">Illegal loan apps are stealing personal data, threatening families, and extorting innocent borrowers. Together, we can stop them.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[color:var(--navy)]">
            <Link to="/report" className="border-b border-[color:var(--gold)] pb-1 hover:text-[color:var(--gold)]">Report</Link>
            <Link to="/report" className="border-b border-[color:var(--gold)] pb-1 hover:text-[color:var(--gold)]">Participate</Link>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="border-b border-[color:var(--gold)] pb-1 hover:text-[color:var(--gold)]">Support</a>
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--navy)]/10 bg-[color:var(--navy-deep)]/[0.03] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>Recognise the Pattern</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">FROM LOAN TO BLACKMAIL</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--slate-dark)]/80">Fake Loan Apps. Data Theft. Cyber Extortion. Illegal Recovery Agents.<br />Justice begins when victims speak up.</p>
        </div>
      </section>

      <section className="bg-[color:var(--navy)] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>Public Participation</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl">ENOUGH IS ENOUGH</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Stand against illegal digital lending networks operating through fake loan apps and unlawful recovery practices.</p>
          <Link to="/report" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition hover:bg-[color:var(--gold-soft)]">Join TLEGAL&apos;s National Movement <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>Report Safely</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">Have You Been Harassed by a Loan App?</h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-[color:var(--slate-dark)]/80">
            <p>You are not alone.</p>
            <p>Thousands of citizens have been subjected to unlawful digital surveillance, privacy violations, threats, blackmail, public humiliation, and illegal recovery practices.</p>
            <p>TLEGAL is leading a nationwide legal awareness campaign to expose illegal loan app operators, coercive recovery networks, and cyber-financial exploitation. Advocate Rama Rao Immaneni serves as TLEGAL&apos;s Founder and Legal Advisor.</p>
            <p>Your participation can help protect thousands of families.</p>
          </div>
          <Link to="/report" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--navy)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--navy-deep)]">Join the Campaign <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="border-y border-[color:var(--gold)]/40 bg-[color:var(--gold)]/[0.08] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>Know Your Rights</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--navy)] sm:text-5xl">Your Data. Your Identity. Your Right.</h2>
          <p className="mt-3 text-lg font-medium text-[color:var(--navy)]">Digital Personal Data Protection Act (DPDP Act) - Know Your Rights</p>
          <div className="mt-7 max-w-4xl space-y-4 leading-relaxed text-[color:var(--slate-dark)]/85">
            <p>Is your personal data being misused? The Digital Personal Data Protection Act empowers every citizen to demand accountability from organisations that collect and process personal data.</p>
            <p>Your mobile number, Aadhaar, PAN, bank details, photographs, contacts, and location data belong to you - not to companies or loan apps.</p>
            <p>No organisation has the right to collect, retain, share, or misuse your personal data without lawful authority or valid consent, except as permitted by law.</p>
            <p>If your data is stolen, leaked, sold, or used for harassment, blackmail, or unlawful recovery, you have legal rights and remedies.</p>
            <p>The Act places legal obligations on companies, digital platforms, financial institutions, and data processors to safeguard your information.</p>
            <p>Every citizen has the right to know how their data is being used, to seek correction or erasure where applicable, and to seek grievance redressal under the law.</p>
            <p>Illegal loan apps and cyber fraudsters often exploit personal data to intimidate borrowers and their families - such practices may violate multiple Indian laws.</p>
            <p className="font-semibold text-[color:var(--navy)]">Privacy is a Fundamental Right. Data Protection is a Legal Right.</p>
            <p>Know your rights. Protect your identity. Report digital abuse.</p>
            <p>TLEGAL stands with every victim of data theft, cyber extortion, and illegal digital lending. Together, we can build a safer digital India.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionEyebrow>Why This Matters</SectionEyebrow>
          {/* Pending legal review — court-reference language rewritten from client's original draft; do not publish original unsourced version. See build-notes.md. */}
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-[color:var(--slate-dark)]/85">The unchecked menace of illegal digital loan applications has pushed thousands of vulnerable borrowers into a cycle of exploitation, humiliation, and fear. Victims seeking small financial assistance are instead trapped by exorbitant charges, unlawful data access, and relentless harassment by recovery agents. Such coercive practices strip individuals of their dignity and raise serious concerns under Article 21 of the Constitution, which guarantees the right to life and personal liberty. Indian courts have repeatedly held that coercive and unlawful recovery methods - including threats, intimidation, and unethical practices by recovery agents - have no place in a constitutional democracy, and the Reserve Bank of India and Union Government have separately acknowledged, through regulatory guidance, the serious harm such practices inflict on vulnerable borrowers. Digital lending must never become a license for extortion or a tool for violating privacy. Strong regulation, strict enforcement, and effective grievance redressal are essential to protect citizens from predatory lending practices. Every victim deserves access to justice and protection from unlawful recovery tactics. Financial hardship must never be exploited as an opportunity to intimidate borrowers. The rule of law must stand with victims and ensure that no lender profits through fear, coercion, or abuse of human dignity.</p>
        </div>
      </section>
    </main>
  );
}

function PaidConsultation() {
  return (
    <section id="intake-form" className="border-t border-[color:var(--navy)]/15 bg-[color:var(--slate-dark)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionEyebrow>Legal Services</SectionEyebrow>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Need Legal Representation?</h2>
        <p className="mt-5 max-w-3xl text-white/75">Tier 1 is a ₹2,500 case review for preliminary document screening and legal position assessment. Tier 2 is a ₹10,000 strategy session for active High Court matters, drafting review, and urgent listings. Paid consultations are separate from TLEGAL&apos;s free public campaign.</p>
        <a href="#case-review-form" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition hover:bg-[color:var(--gold-soft)]">Book a Case Review <ArrowRight className="h-4 w-4" /></a>
        <PaidIntakeForm />
      </div>
    </section>
  );
}

function PaidIntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [matterCategory, setMatterCategory] = useState(matterCategories[0]);
  const [attachments, setAttachments] = useState<File[]>([]);

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
      setError("Something went wrong. Please try again or contact chambers via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return <div className="mt-12 rounded-md border border-[color:var(--gold)]/40 bg-white/[0.05] p-8 text-center"><CheckCircle2 className="mx-auto h-10 w-10 text-[color:var(--gold)]" /><h3 className="mt-4 font-serif text-2xl">Case Review Requested</h3><p className="mt-2 text-sm text-white/75">Your request has been received for conflict screening. Chambers will contact you using the details provided.</p></div>;
  }

  return (
    <form id="case-review-form" onSubmit={handleSubmit} className="mt-12 grid gap-5 rounded-md border border-white/15 bg-white/[0.04] p-6 sm:p-10">
      <input name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <input type="hidden" name="entry_type" value="Paid Consultation Intake" />
      <input type="hidden" name="source_page" value="/" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required><input required name="full_name" className={inputClass} /></Field>
        <Field label="WhatsApp Number" required><input required name="phone" type="tel" className={inputClass} /></Field>
        <Field label="Matter Category" required><select required name="matter_category" value={matterCategory} onChange={(event) => setMatterCategory(event.target.value)} className={inputClass}>{matterCategories.map((category) => <option key={category}>{category}</option>)}</select></Field>
        <Field label={matterCategory === "Loan App Harassment / Cyber Fraud" ? "Loan App / Lender Name (if applicable)" : "Opposing Party"}><input name="opposing_party" className={inputClass} /></Field>
      </div>
      <Field label="Brief Case Description" required><textarea required name="description" rows={5} className={inputClass + " resize-none"} /></Field>
      <Field label="Consultation Tier Requested" required><select required name="consultation_tier" className={inputClass}><option>Tier 1 — Junior Advocate Case Review (₹2,500)</option><option>Tier 2 — High Court Strategic Consultation (₹10,000)</option></select></Field>
      <Field label="Preferred Date / Time"><input name="preferred_datetime" type="datetime-local" className={inputClass} /></Field>
      <Field label="Documents and Evidence" hint="You may select multiple files, up to 5 MB each."><label onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); setAttachments(Array.from(event.dataTransfer.files)); }} className="flex cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-white/20 px-6 py-8 text-center transition hover:border-[color:var(--gold)]"><Upload className="h-6 w-6 text-[color:var(--gold)]" /><span className="mt-2 text-sm text-white/80">Drop files here or browse</span><span className="mt-1 text-xs text-white/50">{attachments.length ? `${attachments.length} file(s) selected` : "PDF, DOC, JPG, or PNG"}</span><input name="attachments" type="file" multiple className="hidden" onChange={(event) => setAttachments(Array.from(event.target.files ?? []))} /></label></Field>
      {error && <p role="alert" className="rounded border border-red-300/40 bg-red-950/30 px-3 py-2 text-sm text-red-100">{error}</p>}
      <button disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-6 py-4 text-sm font-semibold text-[color:var(--navy)] disabled:opacity-60">{isSubmitting ? "Submitting..." : "Book a Case Review"}<ArrowRight className="h-4 w-4" /></button>
      <p className="text-[11px] leading-relaxed text-white/55">Submitting this form does not create an advocate-client relationship. Engagement begins only after conflict screening and written confirmation.</p>
    </form>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return <label className="block"><span className="flex justify-between gap-3 text-xs uppercase tracking-[0.15em] text-white/70">{label}{required && <b className="text-[color:var(--gold)]">*</b>}{hint && <em className="normal-case tracking-normal text-white/45">{hint}</em>}</span><div className="mt-2">{children}</div></label>;
}
