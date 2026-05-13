export function Notes() {
  return (
    <section id="notes" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            (07) — Notes from the build
          </div>
          <h2 className="mt-4 font-display text-[40px] leading-[1] tracking-tight md:text-[52px]">
            A few small <em className="font-display italic text-(--color-violet)">opinions</em>.
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.6] text-(--color-ink-soft)">
            We're not trying to replace your tools. We're trying to make the parts of work
            that happen between them feel like something you'd actually want to use.
          </p>
        </div>

        <ul className="md:col-span-8">
          {[
            {
              n: '01',
              title: 'Notifications are a privilege.',
              body: 'Span ships with quiet hours on by default. The app should earn its way to your lock screen, not assume it.',
            },
            {
              n: '02',
              title: 'No reactions theater.',
              body: 'Three reactions: 🫶 / 👀 / ✺. That’s it. We don’t need a wall of thumbs to know someone read your message.',
            },
            {
              n: '03',
              title: 'Search that finds, not auto-completes.',
              body: 'Press ⌘K anywhere. Type half a word. Find the message, the person, the link. No keyboard shortcut overlay required.',
            },
            {
              n: '04',
              title: 'Voice notes, no transcripts.',
              body: 'Some things you should hear. We don’t silently transcribe; if you want text, you can type.',
            },
          ].map((n) => (
            <li
              key={n.n}
              className="group grid grid-cols-[60px_1fr] items-baseline gap-6 border-t border-(--color-paper-line) py-7 first:border-t-0 md:grid-cols-[80px_1fr_auto]"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
                ({n.n})
              </div>
              <div>
                <div className="font-display text-[22px] leading-tight md:text-[26px]">{n.title}</div>
                <div className="mt-2 max-w-[40rem] text-[14px] leading-[1.6] text-(--color-ink-soft)">{n.body}</div>
              </div>
              <div className="hidden font-mono text-[11px] text-(--color-ink-mute) transition-colors group-hover:text-(--color-coral) md:block">
                ✺
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
