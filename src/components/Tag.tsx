import React from 'react'

interface TagProps extends React.HTMLAttributes<HTMLElement> {
  active?: boolean
  onClick?: () => void
}

export function Tag({ children, active = false, onClick, style = {}, ...rest }: TagProps) {
  const Comp = onClick ? 'button' : 'span'
  return (
    <Comp
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.2,
        padding: '5px 12px',
        color: active ? 'var(--paper-0)' : 'var(--ink-700)',
        background: active ? 'var(--blue-500)' : 'transparent',
        border: 'var(--stroke-fine) solid var(--ink-line)',
        borderRadius: 'var(--sketch-radius-1)',
        cursor: onClick ? 'pointer' : 'default',
        font: 'inherit',
        ...style,
      } as React.CSSProperties}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Comp>
  )
}
