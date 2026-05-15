type Story = { initials: string; name: string; kind?: 'company' | 'story'; seen?: boolean; presence?: 'online' }
type ChatRow = { mono: string; name: string; preview: string; time: string; unread?: number; tint?: string; typing?: boolean; presence?: 'online' }

const stories: Story[] = [
  { initials: 'LH', name: 'Lighthouse', kind: 'company' },
  { initials: 'MR', name: 'Maya', presence: 'online' },
  { initials: 'JN', name: 'Jonas', presence: 'online' },
  { initials: 'PV', name: 'Priya' },
  { initials: 'TO', name: 'Theo', seen: true },
  { initials: 'AL', name: 'Alma', seen: true },
]

const chats: ChatRow[] = [
  { mono: 'MR', name: 'Maya Reyes', preview: '', time: 'now', unread: 2, tint: '#FAD8DD', typing: true, presence: 'online' },
  { mono: '#', name: '# announcements', preview: 'Lighthouse: we shipped iOS 1.2 today ✺', time: '9:31', tint: '#DCDAFB' },
  { mono: 'JN', name: 'Jonas Bekker', preview: 'voice note · 0:24 🎙', time: '8:55', unread: 1, tint: '#D4EEF2', presence: 'online' },
  { mono: 'OS', name: '# on-site / lisbon', preview: 'Priya posted a story', time: 'Wed', tint: '#FBE5C7' },
  { mono: 'AL', name: 'Alma & Yusuf', preview: 'we’ll grab dinner at that place near…', time: 'Wed', tint: '#E8E2D5' },
]

export function PhoneMock() {
  return (
    <div className="relative drift">
      {/* Floating annotations */}
      <div className="pointer-events-none absolute -left-12 top-10 hidden md:block">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          stories ↘
        </div>
      </div>
      <div className="pointer-events-none absolute -right-14 top-[44%] hidden md:block">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-right text-(--color-ink-mute)">
          ↙ chats,<br /> tinted by room
        </div>
      </div>

      {/* Phone shell */}
      <div className="relative mx-auto w-[300px] sm:w-[320px]">
        <div
          className="relative rounded-[44px] p-[10px] shadow-[0_30px_80px_-40px_rgba(26,24,20,0.45),0_8px_24px_-12px_rgba(26,24,20,0.25)]"
          style={{ background: 'linear-gradient(180deg, #1A1814 0%, #2A2620 100%)' }}
        >
          <div className="relative overflow-hidden rounded-[36px] bg-(--color-paper)">
            {/* Notch */}
            <div className="absolute left-1/2 top-2 z-20 h-[26px] w-[100px] -translate-x-1/2 rounded-full bg-[#1A1814]" />

            {/* Status bar */}
            <div className="flex items-center justify-between px-7 pt-3 pb-2 font-mono text-[10px] tracking-tight text-(--color-ink)">
              <span>9:41</span>
              <span className="opacity-70">●●●●● 5G</span>
            </div>

            {/* Top header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-2">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-(--color-ink) text-[10px] font-semibold text-(--color-paper)">L</div>
                <div>
                  <div className="font-display text-[15px] leading-none">Lighthouse</div>
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-(--color-ink-mute)">lighthouse.span.io</div>
                </div>
              </div>
              <div className="font-mono text-[18px] leading-none text-(--color-ink-soft)">⌥</div>
            </div>

            {/* Stories tray */}
            <div className="px-3 pt-3 pb-2">
              <div className="flex gap-3 overflow-hidden">
                {/* "Your story" + tray */}
                <div className="flex flex-col items-center">
                  <div className="grid h-[54px] w-[54px] place-items-center rounded-full border border-dashed border-(--color-ink-mute)/60 text-(--color-ink-soft)">
                    <span className="text-[20px] leading-none">+</span>
                  </div>
                  <div className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-(--color-ink-soft)">you</div>
                </div>
                {stories.map((s) => (
                  <div key={s.name} className="flex flex-col items-center">
                    <div className="relative">
                      <div
                        className={`grid h-[54px] w-[54px] place-items-center rounded-full p-[2px] ${
                          s.seen ? 'bg-(--color-paper-line)' : s.kind === 'company' ? 'ring-company' : 'ring-story'
                        }`}
                      >
                        <div className="grid h-full w-full place-items-center rounded-full bg-(--color-paper)">
                          <span className="font-display text-[15px] leading-none text-(--color-ink)">{s.initials}</span>
                        </div>
                      </div>
                      {s.presence === 'online' && (
                        <span
                          className="absolute -bottom-[1px] -right-[1px] h-[12px] w-[12px] rounded-full ring-2 ring-(--color-paper)"
                          style={{ background: '#3CB876' }}
                        />
                      )}
                    </div>
                    <div className="mt-1 max-w-[58px] truncate font-mono text-[8.5px] uppercase tracking-[0.12em] text-(--color-ink-soft)">
                      {s.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section label */}
            <div className="mt-2 flex items-center gap-2 px-5">
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-ink-mute)">conversations</div>
              <div className="h-px flex-1 bg-(--color-paper-line)" />
            </div>

            {/* Chat list */}
            <ul className="px-3 py-2">
              {chats.map((c) => (
                <li key={c.name} className="flex items-center gap-3 rounded-2xl px-2 py-2.5 transition-colors hover:bg-(--color-paper-shadow)/60">
                  <div className="relative">
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[11px] font-semibold text-(--color-ink)"
                      style={{ background: c.tint ?? '#E8E2D5' }}
                    >
                      {c.mono}
                    </div>
                    {c.presence === 'online' && (
                      <span
                        className="absolute -bottom-[1px] -right-[1px] h-[10px] w-[10px] rounded-full ring-2 ring-(--color-paper)"
                        style={{ background: '#3CB876' }}
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="truncate text-[12.5px] font-medium text-(--color-ink)">{c.name}</div>
                      <div className="font-mono text-[9.5px] text-(--color-ink-mute)">{c.time}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {c.typing ? (
                        <div className="flex items-center gap-1.5 text-[11px] italic text-(--color-violet)">
                          <TypingDots />
                          <span>typing…</span>
                        </div>
                      ) : (
                        <div className="truncate text-[11px] text-(--color-ink-soft)">{c.preview}</div>
                      )}
                      {c.unread ? (
                        <span className="grid h-[16px] min-w-[16px] place-items-center rounded-full bg-(--color-violet) px-1 font-mono text-[9px] text-white">
                          {c.unread}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom bar */}
            <div className="mt-1 flex items-center justify-around border-t border-(--color-paper-line) px-6 py-3">
              <BarIcon active label="Chats" />
              <BarIcon label="People" />
              <BarIcon label="Spaces" />
              <BarIcon label="You" />
            </div>
            {/* Home indicator */}
            <div className="mx-auto mb-2 h-1 w-[100px] rounded-full bg-(--color-ink)" />
          </div>
        </div>

        {/* Floating "story" preview card */}
        <div className="absolute -right-10 top-1/3 hidden w-[140px] -rotate-3 rounded-2xl bg-white p-2 shadow-[0_20px_50px_-25px_rgba(26,24,20,0.4)] md:block">
          <div className="aspect-[3/4] overflow-hidden rounded-xl" style={{ background: 'linear-gradient(160deg, #F5B544, #F76A78 60%, #5B52F0)' }}>
            <div className="flex h-full flex-col justify-between p-2.5 text-white">
              <div className="font-mono text-[8px] uppercase tracking-[0.16em] opacity-90">Maya · 12m</div>
              <div className="font-display text-[13px] leading-tight italic">
                shipped the<br />onboarding draft ✺
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TypingDots() {
  return (
    <span className="inline-flex items-end gap-[3px]">
      <span className="inline-block h-[4px] w-[4px] rounded-full bg-(--color-violet) [animation:typing_1200ms_ease-in-out_infinite]" />
      <span className="inline-block h-[4px] w-[4px] rounded-full bg-(--color-violet) [animation:typing_1200ms_ease-in-out_infinite] [animation-delay:160ms]" />
      <span className="inline-block h-[4px] w-[4px] rounded-full bg-(--color-violet) [animation:typing_1200ms_ease-in-out_infinite] [animation-delay:320ms]" />
    </span>
  )
}

function BarIcon({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`h-3.5 w-3.5 rounded-[5px] ${active ? 'bg-(--color-ink)' : 'border border-(--color-ink-mute)/60 bg-transparent'}`}
      />
      <div className={`font-mono text-[8.5px] uppercase tracking-[0.14em] ${active ? 'text-(--color-ink)' : 'text-(--color-ink-mute)'}`}>
        {label}
      </div>
    </div>
  )
}
