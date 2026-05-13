import { Wordmark } from './Wordmark'

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1240px] px-6 pb-12 md:px-10">
      <div className="hairline mb-10" />
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <Wordmark className="text-[2.2rem]" />
          <p className="mt-4 max-w-[22rem] font-display text-[20px] italic leading-tight text-(--color-ink-soft)">
            A workplace that remembers it has people in it.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 text-[13px] md:col-span-6">
          {[
            ['Product', ['Chat', 'Stories', 'Workspaces']],
            ['Company', ['About', 'Notes', 'Hiring']],
            ['Elsewhere', ['Mail', 'Mastodon', 'GitHub']],
          ].map(([heading, items]) => (
            <div key={heading as string}>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">{heading}</div>
              <ul className="mt-3 space-y-2">
                {(items as string[]).map((i) => (
                  <li key={i}>
                    <a href="#" className="text-(--color-ink-soft) hover:text-(--color-ink)">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-(--color-paper-line) pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
        <div>© {new Date().getFullYear()} Span Labs · Made on a quiet afternoon</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-(--color-ink)">Privacy</a>
          <a href="#" className="hover:text-(--color-ink)">Terms</a>
          <a href="#" className="hover:text-(--color-ink)">Press kit</a>
        </div>
      </div>
    </footer>
  )
}
