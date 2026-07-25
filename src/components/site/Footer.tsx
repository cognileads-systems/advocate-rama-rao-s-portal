import { Scale, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md border border-[color:var(--gold)]/40">
              <Scale className="h-5 w-5 text-[color:var(--gold)]" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white">Guardian & Co</h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">Advocate & Solicitors</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
            Principal Advocate: Rama Rao Immaneni (B.A., LL.B.).<br />
            Dedicated to litigation of complex property, constitutional, and family matters.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">Chambers</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <span>AKRC Class, Plot No. 2/P, Sarvasukhi Colony,<br />Marredpally, Secunderabad - 500 026,<br />Telangana, India.</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <span>+91 96666 98551 / +91 98482 38969</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <span>tlegal2020@gmail.com</span>
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
            Chat on WhatsApp
          </a>

          <div className="mt-6 flex items-center gap-5 text-xs uppercase tracking-[0.18em]">
            <a
              href="https://www.youtube.com/@tlegal8550"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--gold-soft)] hover:text-[color:var(--gold)] transition border-b border-transparent hover:border-[color:var(--gold)]/60 pb-0.5"
            >
              YouTube Channel
            </a>
            <span className="text-white/25">|</span>
            <a
              href="https://www.instagram.com/ramaraoimmaneni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--gold-soft)] hover:text-[color:var(--gold)] transition border-b border-transparent hover:border-[color:var(--gold)]/60 pb-0.5"
            >
              Instagram Handle
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Guardian & Co (Advocate & Solicitors). All rights reserved.</p>
          <p className="text-white/35">System Architecture Powered by <span className="text-[color:var(--gold-soft)]">VectraSyn AI Systems</span></p>
        </div>
      </div>
    </footer>
  );
}
