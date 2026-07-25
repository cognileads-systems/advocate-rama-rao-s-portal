import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--gold)]">
      <span className="h-px w-8 bg-[color:var(--gold)]" />
      {children}
    </div>
  );
}
