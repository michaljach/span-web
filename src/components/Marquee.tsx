export function Marquee() {
  const items = [
    'team chat',
    '↺',
    'stories',
    '↺',
    'channels',
    '↺',
    'announcements',
    '↺',
    'voice notes',
    '↺',
    'reactions',
    '↺',
    'presence',
    '↺',
    'workspaces',
    '↺',
    'invites',
    '↺',
  ]
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-(--color-paper-line) bg-(--color-paper-shadow)/40 py-6">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {track.map((t, i) => (
          <span
            key={i}
            className={
              t === '↺'
                ? 'font-display text-[22px] italic text-(--color-coral)'
                : 'font-display text-[34px] tracking-tight text-(--color-ink) md:text-[44px]'
            }
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
