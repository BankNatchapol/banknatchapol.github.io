import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  invalid?: boolean
  wrapStyle?: React.CSSProperties
}

export function Input({ label, hint, id, invalid = false, style = {}, wrapStyle = {}, ...rest }: InputProps) {
  const fid = id ?? `sk-${Math.random().toString(36).slice(2, 8)}`
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...wrapStyle }}>
      {label && (
        <label htmlFor={fid} style={{
          fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--ink-700)',
        }}>{label}</label>
      )}
      <input
        id={fid}
        className="sk-input"
        style={{
          fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--ink-900)',
          padding: '10px 14px',
          background: 'var(--paper-0)',
          border: `var(--stroke) solid ${invalid ? 'var(--terra-500)' : 'var(--ink-line)'}`,
          borderRadius: 'var(--sketch-radius-1)',
          ...style,
        }}
        {...rest}
      />
      {hint && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '13px',
          color: invalid ? 'var(--terra-500)' : 'var(--text-faint)',
        }}>{hint}</span>
      )}
    </div>
  )
}
