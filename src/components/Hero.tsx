import { PhoneMock } from './PhoneMock'

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-[1240px] px-6 pt-6 pb-24 md:px-10 md:pt-10 md:pb-32">
      {/* Editorial issue marker */}
      <div className="reveal mb-12 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)" style={{ animationDelay: '120ms' }}>
        <span>Vol. 01</span>
        <span className="h-px w-10 bg-(--color-paper-line)" />
        <span>A private social network for your company</span>
        <span className="h-px w-10 bg-(--color-paper-line)" />
        <span>iOS — coming soon</span>
      </div>

      <div className="grid items-end gap-12 md:grid-cols-12">
        {/* Headline column */}
        <div className="md:col-span-7">
          <h1 className="reveal-slow font-display text-[44px] leading-[0.95] tracking-[-0.02em] text-(--color-ink) sm:text-[56px] md:text-[72px] lg:text-[84px]" style={{ animationDelay: '200ms' }}>
            A workplace that&nbsp;
            <em className="not-italic font-display italic text-(--color-violet)">remembers</em>
            <br />
            it has{' '}
            <span className="relative inline-block">
              <span>people</span>
              <svg
                aria-hidden
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-(--color-coral)"
                preserveAspectRatio="none"
              >
                <path d="M2 9 C 60 1, 120 13, 218 5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            in it.
          </h1>

          <p
            className="reveal mt-8 max-w-[34rem] text-balance text-[17px] leading-[1.55] text-(--color-ink-soft) md:text-[18.5px]"
            style={{ animationDelay: '420ms' }}
          >
            Span is a <em className="font-display italic text-(--color-ink)">private social network</em> for
            your company — chat, stories, and the people behind them, in one place. It's
            quietly alive: presence, typing, reactions, voice notes. No public feed, no
            strangers. Just the team, somewhere they actually want to open.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '560ms' }}>
            <a
              href="#beta"
              className="group inline-flex items-center gap-3 rounded-full bg-(--color-ink) px-6 py-3.5 text-sm text-(--color-paper) transition-transform hover:-translate-y-[1px]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Join the beta</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#product"
              className="group inline-flex items-center gap-2 text-sm text-(--color-ink-soft) underline-offset-[6px] hover:text-(--color-ink) hover:underline"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">See what's inside</span>
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>

          {/* Stat strip */}
          <div className="reveal mt-14 grid max-w-[36rem] grid-cols-3 gap-6 border-t border-(--color-paper-line) pt-6" style={{ animationDelay: '720ms' }}>
            <Stat caption="Channels, DMs & rooms" value="Chat" />
            <Stat caption="24-hour, just-for-us" value="Stories" />
            <Stat caption="One per company" value="Spaces" />
          </div>
        </div>

        {/* Phone column */}
        <div className="reveal-fade md:col-span-5" style={{ animationDelay: '500ms' }}>
          <PhoneMock />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, caption }: { value: string; caption: string }) {
  return (
    <div>
      <div className="font-display text-[28px] leading-none text-(--color-ink)">{value}</div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
        {caption}
      </div>
    </div>
  )
}
