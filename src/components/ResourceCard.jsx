import { ArrowRight } from "lucide-react";

export default function ResourceCard({ title, subtitle, color, href, icon: Icon }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") || href?.startsWith("mailto:") ? "_blank" : "_self"}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="block rounded-xl p-4 text-white transition duration-200 hover:scale-105 hover:brightness-110"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          {Icon ? <Icon className="mt-0.5 h-5 w-5 shrink-0" /> : null}
          <div>
            <h3 className="text-sm font-bold md:text-base">{title}</h3>
            <p className="mt-1 text-xs text-white/90 md:text-sm">{subtitle}</p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0" />
      </div>
    </a>
  );
}
