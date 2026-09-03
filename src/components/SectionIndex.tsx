export default function SectionIndex({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 text-muted">
      <span className="hairline w-8" />
      <span className="font-ui num-badge text-xs tracking-[0.3em]">{n}</span>
      <span className="font-ui text-xs tracking-[0.3em]">{label}</span>
      <span className="hairline w-8" />
    </div>
  );
}
