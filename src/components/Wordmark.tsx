export function Wordmark({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { glyph: 22, text: 'text-[14px]' },
    md: { glyph: 28, text: 'text-[15px]' },
    lg: { glyph: 44, text: 'text-[26px]' },
  }[size]

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <IconGlyph size={sizes.glyph} />
      <span className={`font-mono font-semibold uppercase tracking-[0.18em] ${sizes.text}`}>
        interkom
      </span>
    </span>
  )
}

// Interkom mark — a 3×3 dot grid with the top-right dot picked out in
// brand violet. Ported from the web app's InterkomMark so the marketing
// site and the product share one logo. Base dots render in currentColor
// so the mark adapts to the surface; the accent dot uses the violet
// brand token.
const COLS = [6, 12, 18]
const ROWS = [6, 12, 18]
const DOT_R = 1.3
const VIEW = 24

export function IconGlyph({ size = 28 }: { size?: number }) {
  // Top-right dot = last column, first row.
  const accentX = COLS[COLS.length - 1]
  const accentY = ROWS[0]
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block select-none"
    >
      {ROWS.map((y) =>
        COLS.map((x) => {
          const isAccent = x === accentX && y === accentY
          return (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={DOT_R}
              fill={isAccent ? 'var(--color-violet)' : 'currentColor'}
            />
          )
        }),
      )}
    </svg>
  )
}
