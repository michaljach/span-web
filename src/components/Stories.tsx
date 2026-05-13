type StoryTile = {
  initials: string
  name: string
  time: string
  caption: string
  gradient: string
}

const tiles: StoryTile[] = [
  {
    initials: 'MR',
    name: 'Maya',
    time: '12m',
    caption: 'shipped the onboarding draft ✺',
    gradient: 'linear-gradient(160deg, #F5B544, #F76A78 60%, #5B52F0)',
  },
  {
    initials: 'JN',
    name: 'Jonas',
    time: '1h',
    caption: 'view from the lisbon office ☀',
    gradient: 'linear-gradient(160deg, #2BB3C7, #5B52F0 60%, #1A1814)',
  },
  {
    initials: 'PV',
    name: 'Priya',
    time: '2h',
    caption: 'the smallest possible PR',
    gradient: 'linear-gradient(160deg, #F76A78, #9A52F7 55%, #4677FE)',
  },
  {
    initials: 'LH',
    name: 'Lighthouse',
    time: '4h',
    caption: 'we’re hiring a senior designer ✷',
    gradient: 'linear-gradient(160deg, #1A1814, #5B52F0 55%, #2BB3C7)',
  },
]

export function Stories() {
  return (
    <section id="stories" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            (05) — Stories
          </div>
          <h2 className="mt-4 font-display text-[44px] leading-[1] tracking-tight md:text-[60px]">
            The small stuff,{' '}
            <em className="font-display italic text-(--color-coral)">in passing.</em>
          </h2>
          <p className="mt-6 max-w-[28rem] text-[15px] leading-[1.6] text-(--color-ink-soft)">
            Some things don’t need a thread or a stand-up. A photo of the prototype.
            A view out the window. A small win. Stories are 24-hour, just-for-the-team,
            and never end up in someone’s search results six months later.
          </p>

          <ul className="mt-8 space-y-3 text-[13.5px]">
            {[
              ['24h', 'auto-expire — nothing lingers in the archive.'],
              ['just us', 'only people inside your workspace can see them.'],
              ['react', 'tap-back replies land in a DM, not a public thread.'],
            ].map(([k, v]) => (
              <li key={k} className="flex items-start gap-4">
                <span className="mt-[2px] inline-block w-[60px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
                  {k}
                </span>
                <span className="text-(--color-ink-soft)">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tiles */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {tiles.map((t, i) => (
              <article
                key={t.name}
                className={`relative overflow-hidden rounded-(--radius-card) shadow-[0_18px_40px_-22px_rgba(26,24,20,0.35)] ${
                  i % 2 === 0 ? 'translate-y-0' : 'translate-y-6 md:translate-y-10'
                }`}
                style={{ background: t.gradient, aspectRatio: '3 / 4' }}
              >
                {/* Top bar */}
                <div className="flex items-center gap-2 p-3.5">
                  <div className="ring-story grid h-8 w-8 place-items-center rounded-full p-[2px]">
                    <div className="grid h-full w-full place-items-center rounded-full bg-(--color-paper)">
                      <span className="font-display text-[11px] text-(--color-ink)">{t.initials}</span>
                    </div>
                  </div>
                  <div className="leading-tight text-white">
                    <div className="text-[12px] font-medium">{t.name}</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] opacity-80">{t.time}</div>
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <p className="font-display text-[17px] italic leading-tight md:text-[20px]">
                    {t.caption}
                  </p>
                </div>
                {/* Grain */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
