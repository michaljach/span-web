import { useState } from 'react'

type Plan = {
  name: string
  italic: string
  blurb: string
  price: { annual: string; monthly: string } | { custom: true; label: string }
  cadence?: string
  cta: { label: string; href: string }
  features: string[]
  highlight?: boolean
  ribbon?: string
}

const plans: Plan[] = [
  {
    name: 'Solo',
    italic: 'free, forever.',
    blurb: 'For the first five people. Real product, not a 90-day teaser.',
    price: { annual: '$0', monthly: '$0' },
    cadence: 'forever',
    cta: { label: 'Start free', href: '#beta' },
    features: [
      'Up to 5 teammates',
      'Full message history — no 90-day wall',
      'Stories, channels & DMs',
      'One workspace · yourname.span.io',
      'iOS app, native from day one',
    ],
  },
  {
    name: 'Team',
    italic: 'for the rest of you.',
    blurb: 'The plan most teams land on. Roughly the price of a coffee per person.',
    price: { annual: '$5', monthly: '$6' },
    cadence: 'per teammate / month',
    cta: { label: 'Start a team', href: '#beta' },
    highlight: true,
    ribbon: 'most teams pick this',
    features: [
      'Unlimited teammates & workspaces',
      'Full history, search, & exports',
      'Google / Apple SSO',
      'Admin roles · invite controls',
      'Priority support from a real person',
    ],
  },
  {
    name: 'Studio',
    italic: 'for the larger rooms.',
    blurb: 'Studios, agencies, and companies past 100 people. We tailor the edges.',
    price: { custom: true, label: "Let's talk" },
    cta: { label: 'Contact sales', href: '#beta' },
    features: [
      'SAML SSO · SCIM provisioning',
      'Custom domain (chat.your-co.com)',
      'Audit log & data residency',
      'Onboarding from our team',
      'A direct line, not a ticket queue',
    ],
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual')

  return (
    <section id="pricing" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      {/* Heading */}
      <div className="grid items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            (09) — Pricing
          </div>
          <h2 className="mt-4 font-display text-[44px] leading-[1] tracking-tight text-(--color-ink) md:text-[60px]">
            Fair, <em className="font-display italic text-(--color-violet)">flat</em> prices.
            <br className="hidden sm:block" />
            <span className="text-(--color-ink-mute)">No </span>
            <em className="font-display italic text-(--color-coral)">tiers within tiers.</em>
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-[15px] leading-[1.6] text-(--color-ink-soft)">
            Three plans, in plain words. The free one is real — the kind of free you can run a
            small team on for years. No seat minimums, no contact-us-for-pricing maze. Cancel
            with a tap.
          </p>
          {/* Toggle */}
          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-(--color-paper-line) bg-(--color-paper) p-1 font-mono text-[10px] uppercase tracking-[0.18em]">
            {(['annual', 'monthly'] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setBilling(opt)}
                className={`rounded-full px-4 py-2 transition-colors ${
                  billing === opt
                    ? 'bg-(--color-ink) text-(--color-paper)'
                    : 'text-(--color-ink-soft) hover:text-(--color-ink)'
                }`}
              >
                {opt}
                {opt === 'annual' && (
                  <span className={`ml-2 ${billing === 'annual' ? 'text-(--color-amber)' : 'text-(--color-coral)'}`}>
                    −17%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} billing={billing} />
        ))}
      </div>

      {/* Slack comparison ribbon */}
      <div className="mt-12 overflow-hidden rounded-(--radius-card) border border-(--color-paper-line) bg-(--color-paper-shadow)/50">
        <div className="grid items-center gap-6 px-6 py-6 md:grid-cols-12 md:px-9 md:py-7">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
              For the asking
            </div>
            <div className="mt-2 font-display text-[24px] leading-tight md:text-[28px]">
              How does this look <em className="font-display italic text-(--color-coral)">next to Slack?</em>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:col-span-7 md:gap-6">
            <Compare label="Per seat / month" us="$5" them="$8.75" themLabel="Slack Pro" />
            <Compare label="Message history (free)" us="Forever" them="90 days" themLabel="Slack Free" />
            <Compare label="Tier sprawl" us="3 plans" them="4 + add-ons" themLabel="Slack" />
          </div>
        </div>
        <div className="border-t border-(--color-paper-line) px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute) md:px-9">
          Slack list prices as published by Salesforce · checked Apr 2026 · we'll update if they move.
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan, billing }: { plan: Plan; billing: 'annual' | 'monthly' }) {
  const dark = plan.highlight
  const priced = 'annual' in plan.price
  const priceStr = 'annual' in plan.price ? plan.price[billing] : plan.price.label

  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-(--radius-card) border p-7 md:p-8 ${
        dark
          ? 'border-(--color-ink) bg-(--color-ink) text-(--color-paper) shadow-[0_30px_70px_-35px_rgba(26,24,20,0.6)]'
          : 'border-(--color-paper-line) bg-(--color-paper)'
      }`}
    >
      {plan.ribbon && (
        <div className={`absolute right-5 top-5 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
          dark ? 'bg-(--color-amber) text-(--color-ink)' : 'bg-(--color-coral) text-(--color-paper)'
        }`}>
          {plan.ribbon}
        </div>
      )}

      <div className="flex items-baseline gap-2">
        <div className="font-display text-[26px] leading-none">{plan.name}</div>
        <div className={`font-display text-[18px] italic ${dark ? 'text-(--color-violet-soft)' : 'text-(--color-violet)'}`}>
          — {plan.italic}
        </div>
      </div>

      <p className={`mt-3 text-[13.5px] leading-[1.55] ${dark ? 'text-(--color-paper)/70' : 'text-(--color-ink-soft)'}`}>
        {plan.blurb}
      </p>

      {/* Price block */}
      <div className={`mt-6 flex items-baseline gap-2 border-t pt-6 ${dark ? 'border-(--color-paper)/12' : 'border-(--color-paper-line)'}`}>
        <div className="font-display text-[52px] leading-none tracking-tight">
          {priceStr}
        </div>
        <div className={`flex flex-col font-mono text-[10px] uppercase tracking-[0.14em] ${
          dark ? 'text-(--color-paper)/60' : 'text-(--color-ink-mute)'
        }`}>
          {priced ? (
            <>
              <span>per teammate</span>
              <span>/ month{billing === 'annual' ? ', billed yearly' : ''}</span>
            </>
          ) : (
            <span className="max-w-[8rem]">{plan.cadence ?? 'custom contract'}</span>
          )}
        </div>
      </div>
      {plan.cadence && priced && (
        <div className={`mt-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
          dark ? 'text-(--color-paper)/55' : 'text-(--color-ink-mute)'
        }`}>
          {plan.cadence}
        </div>
      )}

      {/* Features */}
      <ul className="mt-7 space-y-2.5 text-[13.5px]">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              aria-hidden
              className={`mt-[7px] inline-block h-[6px] w-[6px] shrink-0 rounded-full ${
                dark ? 'bg-(--color-amber)' : 'bg-(--color-violet)'
              }`}
            />
            <span className={dark ? 'text-(--color-paper)/90' : 'text-(--color-ink-soft)'}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex-1" />

      {/* CTA */}
      <a
        href={plan.cta.href}
        className={`mt-8 inline-flex items-center justify-between rounded-full px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-transform hover:-translate-y-[1px] ${
          dark
            ? 'bg-(--color-paper) text-(--color-ink)'
            : 'border border-(--color-ink) text-(--color-ink) hover:bg-(--color-ink) hover:text-(--color-paper)'
        }`}
      >
        {plan.cta.label}
        <span aria-hidden>→</span>
      </a>
    </article>
  )
}

function Compare({ label, us, them, themLabel }: { label: string; us: string; them: string; themLabel: string }) {
  return (
    <div>
      <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-(--color-ink-mute)">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="font-display text-[26px] leading-none text-(--color-ink)">{us}</div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-(--color-violet)">Span</div>
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="font-display text-[16px] leading-none text-(--color-ink-mute) line-through decoration-(--color-coral)/70">
          {them}
        </div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-(--color-ink-mute)">{themLabel}</div>
      </div>
    </div>
  )
}
