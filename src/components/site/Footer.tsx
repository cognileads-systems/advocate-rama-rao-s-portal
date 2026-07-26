import { ShieldAlert, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, YOUTUBE_URL } from "./constants";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md border border-[color:var(--gold)]/40">
              <ShieldAlert className="h-5 w-5 text-[color:var(--gold)]" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white">TLEGAL</h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
                National Campaign Against Illegal Loan Apps
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Founded by Advocate Rama Rao Immaneni.<br />
            Working for consumer rights, cyber safety, financial justice, and human dignity through legal awareness, public participation, and lawful advocacy.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">Take Action</h4>
          <p className="mt-5 text-sm text-white/60">
            Report Illegal Loan Apps • Fight Data Theft • End Digital Extortion • Seek Justice
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[color:var(--gold)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--gold-soft)] transition hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]"
            >
              <MessageCircle className="h-4 w-4" />
              Report via WhatsApp
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)]"
            >
              Watch & Subscribe
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-[11px] text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TLEGAL. All rights reserved.</p>
          <p className="text-white/35">Legal awareness, public participation, and lawful advocacy.</p>
        </div>
      </div>
    </footer>
  );
}
