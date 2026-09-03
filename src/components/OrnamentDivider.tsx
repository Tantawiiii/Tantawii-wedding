export default function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="gold-line w-16" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold">
        <path
          d="M12 2c1 3 3 5 6 6-3 1-5 3-6 6-1-3-3-5-6-6 3-1 5-3 6-6Z"
          fill="currentColor"
        />
      </svg>
      <span className="gold-line w-16" />
    </div>
  );
}
