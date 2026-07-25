import { Shield } from "lucide-react";

export function DisclaimerBar() {
  return (
    <div className="bg-[color:var(--navy-deep)] text-white/90 text-xs sm:text-[13px] leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-start gap-3">
        <Shield className="h-4 w-4 shrink-0 text-[color:var(--gold)] mt-0.5" />
        <p>
          <span className="font-semibold text-[color:var(--gold)]">Bar Council of India · Rule 36 Disclaimer:</span>{" "}
          This portal is strictly for informational purposes. No solicitation, advertisement, or binding legal advice is offered prior to formal executed consultation.
        </p>
      </div>
    </div>
  );
}
