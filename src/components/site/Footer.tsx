import React from 'react';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_URL, YOUTUBE_URL, INSTAGRAM_URL } from './constants';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-slate-100 font-bold text-base mb-2">{t("footer.platformTitle")}</h3>
          <p className="text-slate-400 text-xs leading-relaxed">{t("footer.platformDesc")}</p>
        </div>

        <div>
          <h4 className="text-slate-200 font-semibold mb-3">{t("footer.leadershipTitle")}</h4>
          <p className="text-slate-300 font-medium">{t("footer.advocateName")}</p>
          <p className="text-xs text-amber-400 mb-2">{t("footer.advocateRole")}</p>
          <p className="text-xs text-slate-400">{t("footer.advocateCourt")}</p>
        </div>

        <div>
          <h4 className="text-slate-200 font-semibold mb-3">{t("footer.channelsTitle")}</h4>
          <div className="flex flex-col gap-2 text-xs">
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">📺 {t("footer.youtube")}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">📸 {t("footer.instagram")}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">💬 {t("footer.whatsapp")}</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
        {t("footer.copyright").replace("{year}", String(new Date().getFullYear()))}
      </div>
    </footer>
  );
};