export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display text-[1.6rem] leading-none tracking-tight ${className}`}>
      span<span className="text-(--color-coral)">.</span>
    </span>
  )
}
