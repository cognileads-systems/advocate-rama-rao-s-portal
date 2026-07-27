import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { WHATSAPP_URL, YOUTUBE_URL } from "./constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

const INSTAGRAM_URL = "https://www.instagram.com/ramaraoimmaneni";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/30 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/40 bg-amber-500/10 text-lg font-bold text-amber-400">
            ⚖️
          </div>
          <div>
            <div className="text-base font-bold tracking-wider text-slate-100">TLEGAL</div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-amber-400">
              National Campaign Against Illegal Loan Apps
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          <Link to="/" className="text-slate-300 transition-colors hover:text-amber-400">Home</Link>
          <Link to="/report" className="text-slate-300 transition-colors hover:text-amber-400">Report App</Link>
          <Link to="/knowledge" className="text-slate-300 transition-colors hover:text-amber-400">Knowledge Hub</Link>
          <Link to="/practice" className="text-slate-300 transition-colors hover:text-amber-400">Practice Areas</Link>

          <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
            <LanguageSwitcher />
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-red-500" title="Official YouTube Channel">
              📺
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-pink-500" title="Instagram">
              📸
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:bg-emerald-500">
              WhatsApp Help
            </a>
          </div>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl font-bold">{isMobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 pb-6 pt-4 text-slate-200 md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">🏠 Home</Link>
            <Link to="/report" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">🚨 Report App</Link>
            <Link to="/knowledge" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">📚 Knowledge Hub</Link>
            <Link to="/practice" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">⚖️ Practice Areas</Link>

            <hr className="my-2 border-slate-800" />

            <div className="flex items-center justify-center">
              <LanguageSwitcher />
            </div>

            <div className="flex flex-col gap-3">
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-red-400">
                📺 Official YouTube Channel
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-pink-400">
                📸 Instagram (@ramaraoimmaneni)
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center rounded-md bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-500">
                💬 WhatsApp Emergency Help
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};