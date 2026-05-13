export function Workspaces() {
  return (
    <section id="workspaces" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="overflow-hidden rounded-(--radius-card) bg-(--color-ink) p-8 text-(--color-paper) md:p-14">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-paper)/60">
              (06) — Workspaces
            </div>
            <h2 className="mt-5 font-display text-[42px] leading-[1] tracking-tight md:text-[58px]">
              Your team gets <em className="font-display italic text-(--color-violet-soft)">an address.</em>
            </h2>
            <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.6] text-(--color-paper)/75">
              Every Span workspace lives at a clean little URL — your handle, your home.
              People join by invite, leave by choice, and you get a real boundary between
              "the team" and "the internet."
            </p>

            {/* URL field mock */}
            <div className="mt-9 inline-flex items-center gap-0 rounded-full border border-(--color-paper)/15 bg-(--color-paper)/5 p-1.5 pl-5 font-mono text-[13px] text-(--color-paper)/90 backdrop-blur">
              <span className="text-(--color-paper)/50">https://</span>
              <span className="text-(--color-violet-soft)">lighthouse</span>
              <span className="text-(--color-paper)/70">.span.io</span>
              <span className="ml-3 inline-flex items-center gap-1 rounded-full bg-(--color-paper) px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-(--color-ink)">
                claim →
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 md:max-w-md md:grid-cols-2">
              {[
                ['private by default', 'workspace-scoped — no public search.'],
                ['admin + member', 'lightweight roles, not org charts.'],
                ['invite by link', 'one-tap onboarding from iMessage.'],
                ['handles, not emails', '@maya, not maya@longcompany.com'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-paper)/55">{k}</div>
                  <div className="mt-1 text-[13px] text-(--color-paper)/85">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stacked workspace cards */}
          <div className="md:col-span-5">
            <div className="relative h-[360px]">
              <WorkspaceCard
                slug="lighthouse"
                name="Lighthouse"
                role="Admin · 12 members"
                tint="#5B52F0"
                style={{ top: 0, left: 0, transform: 'rotate(-3.5deg)' }}
              />
              <WorkspaceCard
                slug="fieldnotes"
                name="Field Notes"
                role="Member · 4 members"
                tint="#F76A78"
                style={{ top: 90, left: 60, transform: 'rotate(2.5deg)' }}
              />
              <WorkspaceCard
                slug="atlas-studio"
                name="Atlas Studio"
                role="Member · 9 members"
                tint="#2BB3C7"
                style={{ top: 195, left: 20, transform: 'rotate(-1.5deg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkspaceCard({
  slug,
  name,
  role,
  tint,
  style,
}: {
  slug: string
  name: string
  role: string
  tint: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className="absolute w-[300px] rounded-2xl border border-(--color-paper)/12 bg-[#211D17] p-4 shadow-[0_24px_50px_-25px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-1"
      style={style}
    >
      <div className="flex items-center gap-3">
        <div
          className="grid h-11 w-11 place-items-center rounded-xl font-display text-[16px] text-(--color-paper)"
          style={{ background: tint }}
        >
          {name[0]}
        </div>
        <div>
          <div className="font-display text-[18px] leading-none">{name}</div>
          <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-(--color-paper)/55">
            {slug}.span.io
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-(--color-paper)/8 pt-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-paper)/55">{role}</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-paper)/70">open →</div>
      </div>
    </div>
  )
}
