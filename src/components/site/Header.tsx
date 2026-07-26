import React from 'react';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_URL, YOUTUBE_URL, INSTAGRAM_URL } from './constants';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-slate-900 text-white border-b border-amber-500/30 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg">
            ⚖️
          </div>
          <div>
            <div className="font-bold tracking-wider text-slate-100 text-base">TLEGAL</div>
            <div className="text-[10px] text-amber-400 tracking-widest uppercase font-medium">{t("nav.campaign")}</div>
          </div>
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors">{t("nav.home")}</Link>
          <Link to="/report" className="text-slate-300 hover:text-amber-400 transition-colors">{t("nav.report")}</Link>
          <Link to="/knowledge" className="text-slate-300 hover:text-amber-400 transition-colors">{t("nav.knowledge")}</Link>
          <Link to="/practice" className="text-slate-300 hover:text-amber-400 transition-colors">{t("nav.practice")}</Link>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
            <LanguageSwitcher />
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors" title="YouTube Channel">
              📺
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors" title="Instagram Page">
              📸
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all shadow-sm">
              {t("nav.whatsappHelp")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};