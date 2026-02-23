export default function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        bg-linear-to-br from-coral-light via-warm-tint to-teal-light
        flex items-center justify-center
        ${className}
      `}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,var(--color-coral)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,var(--color-teal)_0%,transparent_50%)]" />
      <span className="relative z-10 font-heading text-5xl md:text-6xl font-800 text-slate-900/20 select-none">
        ZS
      </span>
    </div>
  );
}
