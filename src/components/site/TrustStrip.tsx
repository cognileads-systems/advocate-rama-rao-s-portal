import React from "react";
import { EyeOff, Megaphone, Send, HandHeart } from "lucide-react";

const BADGES = [
  { Icon: EyeOff, label: "Protect Your Privacy" },
  { Icon: Megaphone, label: "Stop Harassment" },
  { Icon: Send, label: "Report Instantly" },
  { Icon: HandHeart, label: "Your Dignity Is Not For Sale" },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-b border-white/10 bg-[color:var(--navy-deep)]">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 px-5 sm:px-6 lg:grid-cols-4 lg:divide-x lg:px-8">
        {BADGES.map(({ Icon, label }) => (
          <li key={label} className="flex items-center gap-3 px-1 py-6 lg:px-6">
            <Icon className="h-5 w-5 shrink-0 text-[color:var(--signal)]" strokeWidth={2} />
            <span className="text-[0.7rem] font-bold uppercase leading-tight tracking-[0.08em] text-white/85">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};