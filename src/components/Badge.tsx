import React from 'react'

type Tone = 'ink' | 'blue' | 'terra' | 'sage' | 'amber'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone
}

const TONES: Record<Tone, { bg: string; fg: string; bd: string }> = {
  ink:   { bg: 'var(--paper-2)',   fg: 'var(--ink-900)',   bd: 'var(--ink-line)' },
  blue:  { bg: 'var(--blue-100)',  fg: 'var(--blue-700)',  bd: 'var(--blue-500)' },
  terra: { bg: 'var(--terra-100)', fg: 'var(--terra-500)', bd: 'var(--terra-500)' },
  sage:  { bg: 'var(--sage-100)',  fg: 'var(--sage-500)',  bd: 'var(--sage-500)' },
  amber: { bg: 'var(--amber-100)', fg: 'var(--pencil-500)', bd: 'var(--amber-500)' },
}

export function Badge({ children, tone = 'ink', style = {}, ...rest }: BadgeProps) {
  const t = TONES[tone]
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.1em',
        textTransform: 'uppercase', lineHeight: 1,
        padding: '4px 9px',
        color: t.fg, background: t.bg,
        border: `var(--stroke-fine) solid ${t.bd}`,
        borderRadius: 'var(--sketch-radius-2)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  )
}
