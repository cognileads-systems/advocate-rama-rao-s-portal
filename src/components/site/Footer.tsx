import React from "react";
import { WHATSAPP_URL, YOUTUBE_URL, INSTAGRAM_URL } from "./constants";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <div className="text-xl font-bold text-white tracking-wider">TLEGAL</div>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            National Campaign Against Illegal Loan Apps & Cyber Extortion. Led by Advocate Immaneni Rama Rao, High Court Advocate.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-[color:var(--signal)] uppercase tracking-wider mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[color:var(--signal)] transition-colors">Home</a></li>
            <li><a href="/report" className="hover:text-[color:var(--alert)] transition-colors">Report Illegal App</a></li>
            <li><a href="/knowledge" className="hover:text-[color:var(--signal)] transition-colors">Knowledge Hub</a></li>
            <li><a href="/practice" className="hover:text-[color:var(--signal)] transition-colors">Practice Areas</a></li>
          </ul>
        </div>

        {/* Column 3: Social & Emergency Channels */}
        <div>
          <h4 className="text-sm font-semibold text-[color:var(--signal)] uppercase tracking-wider mb-3">
            Official Channels
          </h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              📺 Official YouTube Channel
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors"
            >
              📸 Instagram Updates (@ramaraoimmaneni)
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 transition-all"
            >
              💬 WhatsApp Emergency Helpline
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TLEGAL — Pro Bono Publico Campaign. Bar Council Rule 36 Compliant.
      </div>
    </footer>
  );
};

export default Footer;