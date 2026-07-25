import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Public Legal Education | Guardian & Co (Advocate & Solicitors)" },
      { name: "description", content: "Public legal education videos, a scam-awareness checklist, and practical guides published in the public interest by Advocate Rama Rao Immaneni and T Legal (@tlegal8550)." },
      { property: "og:title", content: "Public Legal Education | Guardian & Co" },
      { property: "og:description", content: "Legal education videos, scam awareness, and citizen guides from Advocate Rama Rao Immaneni." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KnowledgePage,
});

const VIDEOS = [
  {
    id: "xVBErjt4mIY",
    title: "Understanding Property Title Verification in Telangana",
    desc: "A practical walkthrough of encumbrance certificates, mutation records, and the checks that precede any land transaction.",
  },
  {
    id: "Obf_GytHiUA",
    title: "How Writ Petitions Work Before the High Court",
    desc: "An accessible explanation of Article 226 remedies, timelines, and what citizens can realistically expect from constitutional litigation.",
  },
  {
    id: "j1dWhdU_zao",
    title: "Guardianship Applications: The Statutory Process",
    desc: "The formal court procedure for appointment of guardians, common evidentiary requirements, and typical procedural pitfalls.",
  },
];

const CHECKLIST_FALLBACK = [
  { title: "No advocate guarantees a case outcome.", body: "Any person promising a specific verdict, a fixed timeline for judgment, or a 'settled' result before hearing is misrepresenting the judicial process. Litigation outcomes cannot be contracted for." },
  { title: "Fees are documented, not whispered.", body: "Legitimate legal engagement is preceded by a written fee note or vakalatnama. Refuse cash-only arrangements with no receipt and no scope of work in writing." },
  { title: "Court filing fees are paid to the court, not to a person.", body: "Statutory filing fees, process fees, and stamp duty are payable via challan or e-payment to the treasury. A demand to hand these amounts in cash to an intermediary is a red flag." },
  { title: "'Judge contacts' and 'settings' do not exist.", body: "Any claim of a private channel to a sitting judge, registrar, or bench clerk is either a fraud or an attempt at criminal conduct. Walk away and report it." },
  { title: "Original documents stay with you.", body: "Advocates work from certified copies and scans. There is no legitimate reason to surrender original title deeds, wills, or identity documents to a lawyer's custody without a signed acknowledgment and a clear return protocol." },
  { title: "Every hearing produces a docket entry.", body: "Case status, next hearing date, and orders passed are publicly verifiable on the eCourts / High Court portal. If your matter is 'ongoing' but shows no listings, ask directly." },
  { title: "Conflict-of-interest screening happens before, not after.", body: "A serious chamber verifies that it does not already act for the opposite party before accepting instructions. Skipping this step is a professional lapse and, occasionally, a strategic trap." },
];

const GUIDES = [
  {
    title: "Property Disputes: A Citizen's First Response",
    body: "What to preserve, whom to notify, and how to sequence civil and revenue-side action in the first fourteen days of a boundary or title challenge.",
  },
  {
    title: "Legal Notices: Reading What They Actually Say",
    body: "How to decode the reliefs claimed, the limitation implications, and the strategic options available before drafting a reply.",
  },
  {
    title: "High Court Writs: When They Are the Right Instrument",
    body: "The narrow set of circumstances in which a writ petition — rather than a civil suit — is the appropriate remedy against statutory or administrative action.",
  },
];

function KnowledgePage() {
  const { t } = useTranslation();
  const checklist = t("knowledge.checklist", { returnObjects: true }) as Array<{ title: string; body: string }>;
  const checklistItems = Array.isArray(checklist) && checklist.length ? checklist : CHECKLIST_FALLBACK;
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />

      {/* Section 1 — Header */}
      <section className="bg-[color:var(--navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <SectionEyebrow>Public Interest</SectionEyebrow>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight max-w-4xl">
            Public Legal Education Initiative
          </h1>
          <p className="mt-6 font-serif text-xl sm:text-2xl text-[color:var(--gold-soft)] max-w-3xl leading-snug">
            Published in the public interest through T Legal (@tlegal8550) and the practice of Advocate Rama Rao Immaneni.
          </p>
          <p className="mt-6 text-base text-white/70 max-w-3xl leading-relaxed">
            The material below is offered as citizen-facing legal literacy — not as advice on any specific matter. It exists so that ordinary litigants can recognise procedural reality, identify predatory conduct, and approach counsel with informed questions rather than manufactured expectations.
          </p>
        </div>
      </section>

      {/* Section 2 — Video Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>Video Library</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">
            Recorded Explainers
          </h2>
          <p className="mt-4 text-[color:var(--slate-dark)]/75 max-w-2xl">
            Short-form legal explainers on procedure, rights, and common civil disputes.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {VIDEOS.map((v) => (
              <article key={v.title}>
                <div className="relative w-full overflow-hidden rounded-md border border-[color:var(--navy)]/10 bg-[color:var(--navy)]" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&autoplay=0&modestbranding=1`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <h3 className="mt-5 font-serif text-lg text-[color:var(--navy)] leading-snug">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--slate-dark)]/75 leading-relaxed">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Scam Awareness Checklist */}
      <section className="py-20 sm:py-28 bg-[color:var(--navy-deep)]/[0.03] border-y border-[color:var(--navy)]/10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionEyebrow>Scam Awareness</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)]">
            Seven-Point Litigant Protection Checklist
          </h2>
          <p className="mt-4 text-[color:var(--slate-dark)]/75 max-w-2xl">
            A formal advisory. Read once, and refer back before entrusting any matter to counsel.
          </p>

          <ol className="mt-12 space-y-8">
            {CHECKLIST.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-serif text-2xl text-[color:var(--gold)] leading-none pt-1 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-[color:var(--navy)] text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[color:var(--slate-dark)]/80 leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-md border border-[color:var(--navy)]/15 bg-white p-5 sm:p-6">
            <p className="text-sm italic text-[color:var(--slate-dark)]/70 leading-relaxed">
              This checklist is issued as general public guidance and does not constitute legal advice on any specific matter. Nothing herein establishes an attorney-client relationship with Guardian & Co (Advocate & Solicitors) or Advocate Rama Rao Immaneni.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Guide Teaser Cards */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>Guides</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">
            Practical Reading for Litigants
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GUIDES.map((g) => (
              <article
                key={g.title}
                className="relative flex flex-col rounded-md border border-white/10 bg-[color:var(--navy)] p-8 text-white"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[color:var(--gold)] rounded-t-md" />
                <h3 className="font-serif text-xl leading-snug text-white">
                  {g.title}
                </h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed flex-1">
                  {g.body}
                </p>
                <Link
                  to="/"
                  hash="intake-form"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--gold-soft)] hover:text-[color:var(--gold)] transition"
                >
                  Submit a Conflict-Check Intake
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Conversion CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-md border border-[color:var(--gold)]/30 bg-[color:var(--slate-dark)] text-white p-10 sm:p-14 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
              From Public Reading to Considered Counsel
            </h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
              If any of the material above touches on a matter you are actually facing, the appropriate next step is a paid, conflict-screened consultation — not further self-directed research.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                hash="intake-form"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-7 py-4 text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--gold-soft)] transition"
              >
                Request a Paid Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 text-[12px] italic text-white/50 max-w-xl mx-auto">
              Consultations are extended only after conflict-of-interest screening and confirmation of scope by chambers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
