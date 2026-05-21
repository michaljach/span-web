import inboxShot from '../assets/screenshots/app-inbox.jpg'
import storyShot from '../assets/screenshots/app-story.jpg'

export function PhoneMock() {
  return (
    <div className="relative drift">
      {/* Floating annotations */}
      <div className="pointer-events-none absolute -left-12 top-10 hidden md:block">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          stories ↘
        </div>
      </div>
      <div className="pointer-events-none absolute -right-16 top-[42%] hidden md:block">
        <div className="text-right font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          ↙ live<br />presence
        </div>
      </div>

      {/* Phone shell */}
      <div className="relative mx-auto w-[300px] sm:w-[320px]">
        <div
          className="relative rounded-[44px] p-[10px] shadow-[0_30px_80px_-30px_rgba(126,118,255,0.35),0_8px_24px_-12px_rgba(0,0,0,0.6)]"
          style={{ background: 'linear-gradient(180deg, #2A2A2A 0%, #0F0F0F 100%)' }}
        >
          <div className="relative overflow-hidden rounded-[36px]" style={{ background: '#0A0A0A' }}>
            <img
              src={inboxShot}
              alt="Interkom inbox on iPhone — stories, channels and direct messages"
              className="block w-full"
              style={{ aspectRatio: '1179 / 2556' }}
              loading="eager"
            />
          </div>
        </div>

        {/* Floating "story" preview card — real screenshot */}
        <div
          className="absolute -right-10 top-1/3 hidden w-[140px] -rotate-3 overflow-hidden rounded-md p-[3px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] md:block"
          style={{ background: '#141414', border: '1px solid #2A2A2A' }}
        >
          <img
            src={storyShot}
            alt="A workspace story shared inside Interkom"
            className="block aspect-[3/4] w-full rounded-[5px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
