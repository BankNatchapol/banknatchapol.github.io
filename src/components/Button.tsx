import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  wobble?: 0 | 1 | 2
}

const RADII = [
  'var(--sketch-radius-1)',
  'var(--sketch-radius-2)',
  'var(--sketch-radius-3)',
]

const SIZES: Record<Size, React.CSSProperties> = {
  sm: { fontSize: '13px', padding: '6px 14px' },
  md: { fontSize: '15px', padding: '10px 20px' },
  lg: { fontSize: '17px', padding: '14px 28px' },
}

const VARIANTS: Record<Variant, React.CSSProperties> = {
  primary:   { background: 'var(--blue-500)', color: 'var(--paper-0)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--ink-900)' },
  ghost:     { background: 'transparent', color: 'var(--blue-700)', boxShadow: 'none', borderStyle: 'dashed' },
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  wobble = 0,
  style = {},
  ...rest
}: ButtonProps) {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-label)',
    letterSpacing: '0.04em',
    lineHeight: 1.1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'var(--stroke) solid var(--ink-line)',
    borderRadius: RADII[wobble % RADII.length],
    boxShadow: 'var(--shadow-sketch)',
    textDecoration: 'none',
    opacity: disabled ? 0.45 : 1,
    ...SIZES[size],
  }

  return (
    <button
      className={`sk-btn sk-btn--${variant}`}
      disabled={disabled}
      style={{ ...base, ...VARIANTS[variant], ...style }}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  )
}
