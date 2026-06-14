import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  wobble?: 0 | 1 | 2
  tilt?: number
  shadow?: 'sketch' | 'lift' | 'none'
  grain?: boolean
}

const RADII = [
  'var(--sketch-radius-1)',
  'var(--sketch-radius-2)',
  'var(--sketch-radius-3)',
]

const SHADOWS: Record<string, string> = {
  sketch: 'var(--shadow-sketch)',
  lift:   'var(--shadow-lift)',
  none:   'none',
}

export function Card({
  children,
  wobble = 0,
  tilt = 0,
  shadow = 'sketch',
  grain = true,
  style = {},
  ...rest
}: CardProps) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        backgroundImage: grain ? 'var(--paper-grain)' : 'none',
        border: 'var(--stroke) solid var(--ink-line)',
        borderRadius: RADII[wobble % RADII.length],
        boxShadow: SHADOWS[shadow] ?? SHADOWS.sketch,
        padding: 'var(--space-5)',
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
