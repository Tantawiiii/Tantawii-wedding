export default function SectionIndex({
  n,
  label,
  color = "var(--magenta)",
}: {
  n: string;
  label: string;
  color?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: `${color}1f` }}>
      <span
        className="font-ui num-badge flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white"
        style={{ background: color }}
      >
        {n}
      </span>
      <span className="font-ui text-xs font-semibold tracking-widest" style={{ color }}>
        {label}
      </span>
    </div>
  );
}
