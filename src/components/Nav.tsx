import { Wordmark } from './Wordmark'

export function Nav() {
  return (
    <header className="relative z-10 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
      <a href="#top" className="reveal" style={{ animationDelay: '40ms' }}>
        <Wordmark />
      </a>
      <nav className="hidden items-center gap-9 md:flex">
        {[
          ['Product', '#product'],
          ['Stories', '#stories'],
          ['Workspaces', '#workspaces'],
          ['Pricing', '#pricing'],
        ].map(([label, href], i) => (
          <a
            key={label}
            href={href}
            className="reveal font-mono text-[11px] uppercase tracking-[0.16em] text-(--color-ink-soft) transition-colors hover:text-(--color-ink)"
            style={{ animationDelay: `${120 + i * 60}ms` }}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        href="#beta"
        className="reveal group relative inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-(--color-paper) transition-transform hover:-translate-y-[1px]"
        style={{ animationDelay: '380ms' }}
      >
        Join the beta
        <span aria-hidden className="inline-block translate-y-[0.5px] transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </header>
  )
}
