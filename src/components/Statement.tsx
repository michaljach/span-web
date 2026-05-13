export function Statement() {
  return (
    <section className="relative mx-auto max-w-[1240px] px-6 pt-28 pb-8 md:px-10 md:pt-36">
      <div className="grid items-start gap-10 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            (Position)
          </div>
          <div className="mt-3 font-mono text-[10.5px] leading-[1.7] uppercase tracking-[0.14em] text-(--color-ink-soft)">
            Private<br />
            ·<br />
            Workspace-scoped<br />
            ·<br />
            People you actually know
          </div>
        </aside>

        <div className="md:col-span-9">
          <p className="font-display text-[40px] leading-[1.05] tracking-[-0.01em] text-(--color-ink) sm:text-[52px] md:text-[64px] lg:text-[72px]">
            Think of it as a{' '}
            <em className="font-display italic text-(--color-violet)">private social network</em>{' '}
            inside your company —
            <span className="text-(--color-ink-mute)"> not </span>
            <s className="decoration-(--color-coral) decoration-[3px] underline-offset-4">
              a feed for the whole internet
            </s>
            <span className="text-(--color-ink-mute)">,</span>{' '}
            <em className="font-display italic text-(--color-coral)">just for the people you work with.</em>
          </p>

          <div className="mt-10 grid gap-6 border-t border-(--color-paper-line) pt-6 sm:grid-cols-3">
            {[
              ['no strangers', 'workspace-scoped — only invited teammates see anything.'],
              ['no algorithm', 'stories show up in time order. that’s it.'],
              ['no audience', 'nothing leaves the company. ever.'],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
                  {k}
                </div>
                <div className="mt-2 max-w-[20rem] text-[13.5px] leading-[1.55] text-(--color-ink-soft)">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
