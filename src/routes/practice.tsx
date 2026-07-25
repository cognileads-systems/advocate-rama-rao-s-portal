import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DisclaimerBar } from "@/components/site/DisclaimerBar";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Areas of Practice | Guardian & Co (Advocate & Solicitors)" },
      { name: "description", content: "Detailed practice areas of Advocate Rama Rao Immaneni: property litigation, High Court writs, family and guardianship, and commercial disputes. Chambers address and appointment intake." },
      { property: "og:title", content: "Areas of Practice | Guardian & Co" },
      { property: "og:description", content: "Property litigation, High Court writs, guardianship and estate, and commercial dispute practice — Advocate Rama Rao Immaneni." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticePage,
});

const DEEP_DIVES = [
  {
    heading: "Property Litigation & Title Disputes",
    body: [
      "The chamber represents individuals, families, and closely held entities across the full arc of immovable-property disputes: partition suits, adverse possession claims, specific performance, permanent and temporary injunctions, and revenue-side mutation and record-of-rights challenges.",
      "A typical property matter proceeds on two tracks simultaneously — civil suit pleadings and evidence in one court, and parallel action before revenue authorities to preserve possession and record. Coordination between the two is often the difference between a paper victory and a possessory one, and it is the aspect most commonly under-managed by generalists.",
      "Instructions are accepted after a formal title-and-conflict review of the underlying documents. Chambers do not undertake matters where a prior engagement with an opposite party, common vendor, or overlapping revenue survey number would compromise independence.",
    ],
  },
  {
    heading: "High Court Writ Petitions & Constitutional Remedies",
    body: [
      "Practice before the High Court under Articles 226 and 227 of the Constitution covers challenges to statutory action, service and disciplinary matters, and quasi-judicial orders where an efficacious alternate remedy is either unavailable or has been effectively foreclosed.",
      "Writ practice is rewarding but unforgiving: relief turns on the correctness of the forum, the sharpness of the constitutional infirmity pleaded, and the speed with which interim protection is secured. A writ filed reflexively where a statutory appeal would have sufficed is routinely dismissed with observations that damage the underlying merits.",
      "The chamber accepts writ instructions after a considered view on maintainability, limitation, and the strength of the record. Urgent stay applications are prioritised on the senior counsel schedule where the case for interim protection is genuine.",
    ],
  },
  {
    heading: "Family, Guardianship & Estate Matters",
    body: [
      "This vertical includes guardianship applications under the Guardians and Wards Act, succession certificates, probate and letters of administration, testamentary and intestate disputes, and contested partitions within joint family property.",
      "Family-side litigation is procedurally distinct from ordinary civil work — evidentiary standards, in-camera protocols, and the treatment of minors and vulnerable adults require particular care. The chamber approaches these matters with the discretion the subject demands and, where possible, seeks negotiated closure before contested trial.",
      "Estate matters are frequently entangled with property litigation and taxation exposure. Where relevant, coordinated advice is offered so that one filing does not prejudice a parallel proceeding.",
    ],
  },
  {
    heading: "Commercial & Contractual Disputes",
    body: [
      "Representation in contract enforcement, recovery, injunctive relief against breach, and pre-arbitration strategy for closely held businesses and professional firms. The chamber has a working preference for early scoping of exposure and clear go/no-go advice, rather than defensive litigation for its own sake.",
      "Commercial matters are taken on where the underlying documents, counterparty conduct, and quantum justify the cost of contested proceedings. Where they do not, that view is communicated candidly at the consultation stage.",
      "Cheque-dishonour actions under Section 138 of the Negotiable Instruments Act, applications under the Commercial Courts Act, and interim measures before arbitration are handled as part of this practice line.",
    ],
  },
];

const MEDIA = [
  { programme: "[To be confirmed]", broadcaster: "[To be confirmed]", topic: "[To be confirmed]", description: "[To be confirmed]" },
  { programme: "[To be confirmed]", broadcaster: "[To be confirmed]", topic: "[To be confirmed]", description: "[To be confirmed]" },
  { programme: "[To be confirmed]", broadcaster: "[To be confirmed]", topic: "[To be confirmed]", description: "[To be confirmed]" },
];

const MAP_SRC =
  "https://maps.google.com/maps?q=Guardian%20%26%20Co%2C%20AKRC%20Class%2C%20Plot%20No.%202%2FP%2C%20Sarvasukhi%20Colony%2C%20West%20Marredpally%2C%20Secunderabad&t=&z=15&ie=UTF8&iwloc=&output=embed";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Guardian+%26+Co,+Sarvasukhi+Colony,+West+Marredpally,+Secunderabad";

function PracticePage() {
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBar />
      <Header />

      {/* Header band */}
      <section className="bg-[color:var(--navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <SectionEyebrow>Practice</SectionEyebrow>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight max-w-4xl">
            Areas of Practice
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed">
            A considered view of the matters chambers accept, the terms on which they are accepted, and the disciplines that inform each engagement.
          </p>
        </div>
      </section>

      {/* Section 1 — Deep Dives */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-16 sm:space-y-20">
            {DEEP_DIVES.map((section, i) => {
              const alt = i % 2 === 1;
              return (
                <article
                  key={section.heading}
                  className={
                    "max-w-[720px] " +
                    (alt ? "border-l-2 border-[color:var(--gold)]/70 pl-6 sm:pl-8" : "")
                  }
                >
                  <h2 className="font-serif text-2xl sm:text-4xl text-[color:var(--navy)] leading-tight">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {section.body.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-[color:var(--slate-dark)]/85 text-base leading-[1.7]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2 — Media & Press */}
      <section className="py-20 sm:py-28 bg-[color:var(--navy-deep)]/[0.03] border-y border-[color:var(--navy)]/10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>Media & Press</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">
            Public Commentary & Broadcast Appearances
          </h2>
          <p className="mt-4 text-[color:var(--slate-dark)]/75 max-w-2xl">
            Selected appearances where the chamber has offered legal commentary in the public interest. Full details are added as broadcast confirmations are received.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {MEDIA.map((m, i) => (
              <div
                key={i}
                className="rounded-md border border-[color:var(--navy)]/15 bg-white p-6"
              >
                <div className="grid h-32 w-full place-items-center rounded-md border border-[color:var(--navy)]/20 bg-[color:var(--navy)] text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Logo Placeholder
                </div>
                <dl className="mt-5 space-y-3 text-sm">
                  <MediaField label="Programme" value={m.programme} />
                  <MediaField label="Broadcaster" value={m.broadcaster} />
                  <MediaField label="Topic" value={m.topic} />
                  <MediaField label="Description" value={m.description} />
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Chambers / Map */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionEyebrow>Chambers</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[color:var(--navy)] max-w-3xl">
            Location & Visits
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-[color:var(--gold)]">
                Chambers
              </p>
              <address className="mt-4 not-italic text-[color:var(--slate-dark)] text-base leading-[1.7]">
                Guardian & Co (Advocate & Solicitors)<br />
                AKRC Class, Plot No. 2/P,<br />
                Sarvasukhi Colony, West Marredpally,<br />
                Secunderabad — 500 026,<br />
                Telangana, India.
              </address>

              <div className="mt-6 text-sm text-[color:var(--slate-dark)]/80 space-y-1">
                <p><span className="text-[color:var(--navy)] font-semibold">Telephone:</span> +91 96666 98551 / +91 98482 38969</p>
                <p><span className="text-[color:var(--navy)] font-semibold">Email:</span> tlegal2020@gmail.com</p>
              </div>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-[color:var(--navy)]/30 px-5 py-3 text-sm font-semibold text-[color:var(--navy)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            <div>
              <div className="border border-[color:var(--navy)]/20 overflow-hidden">
                <iframe
                  title="Guardian & Co chambers location"
                  src={MAP_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                  style={{ height: 400, border: 0 }}
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-xs italic text-[color:var(--slate-dark)]/65 leading-relaxed">
                Chambers visits are by confirmed appointment only, subject to the intake and conflict-check process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Page-Level Intake CTA */}
      <section className="py-16 sm:py-24 bg-[color:var(--navy)] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            If the practice areas above align with a matter you are considering, the appropriate next step is a conflict-screened intake. Chambers respond within one business day.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              hash="intake-form"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--gold)] px-7 py-4 text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--gold-soft)] transition"
            >
              Proceed to Conflict-Check Intake
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function MediaField({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3">
      <dt className="text-[11px] uppercase tracking-[0.15em] text-[color:var(--slate-dark)]/60">{label}</dt>
      <dd className="text-[color:var(--slate-dark)]">{value}</dd>
    </div>
  );
}
