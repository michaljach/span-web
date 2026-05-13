import { useState } from 'react'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="beta" className="relative mx-auto max-w-[1240px] px-6 pb-24 md:px-10">
      <div className="relative overflow-hidden rounded-(--radius-card) border border-(--color-paper-line) bg-(--color-paper-shadow)/40 p-10 md:p-16">
        {/* Decorative orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-70 blur-3xl"
          style={{ background: 'radial-gradient(circle, #F5B544 0%, transparent 65%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full opacity-60 blur-3xl"
          style={{ background: 'radial-gradient(circle, #5B52F0 0%, transparent 65%)' }}
        />

        <div className="relative grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
              (10) — The beta
            </div>
            <h2 className="mt-4 font-display text-[44px] leading-[0.98] tracking-tight md:text-[64px]">
              We're opening Span up,{' '}
              <em className="font-display italic text-(--color-coral)">slowly</em>.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[15.5px] leading-[1.6] text-(--color-ink-soft)">
              A handful of teams a week, on iOS first. Drop your email and we'll send a
              TestFlight invite when your number comes up — no waitlist theatrics.
            </p>
          </div>

          <form
            className="md:col-span-5"
            onSubmit={(e) => {
              e.preventDefault()
              if (email.includes('@')) setSubmitted(true)
            }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-(--color-paper-line) bg-(--color-paper) p-6">
                <div className="font-display text-[26px] leading-tight">
                  We've got you, <em className="font-display italic text-(--color-violet)">{email.split('@')[0]}</em>.
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
                  expect a note within ~2 weeks ✺
                </div>
              </div>
            ) : (
              <>
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)"
                >
                  Your email
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@your-team.co"
                    className="w-full flex-1 rounded-full border border-(--color-paper-line) bg-(--color-paper) px-5 py-3.5 text-[14px] text-(--color-ink) placeholder:text-(--color-ink-mute)/80 focus:border-(--color-ink) focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--color-ink) px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-paper) transition-transform hover:-translate-y-[1px]"
                  >
                    Send invite
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
                <div className="mt-3 font-mono text-[10px] tracking-wide text-(--color-ink-mute)">
                  We'll only email you about the beta. Honest.
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
