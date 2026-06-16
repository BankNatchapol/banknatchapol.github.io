import React, { useId } from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  invalid?: boolean
  ruled?: boolean
  wrapStyle?: React.CSSProperties
}

export function Textarea({ label, hint, id, rows = 4, ruled = true, invalid = false, style = {}, wrapStyle = {}, ...rest }: TextareaProps) {
  const autoId = useId()
  const fid = id ?? autoId
  const ruledBg = ruled
    ? 'repeating-linear-gradient(var(--paper-0) 0 27px, var(--paper-edge) 27px 28px)'
    : 'var(--paper-0)'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...wrapStyle }}>
      {label && (
        <label htmlFor={fid} style={{
          fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--ink-700)',
        }}>{label}</label>
      )}
      <textarea
        id={fid}
        rows={rows}
        className="sk-input"
        style={{
          fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '28px', color: 'var(--ink-900)',
          padding: '8px 14px', resize: 'vertical',
          background: ruledBg, backgroundAttachment: 'local',
          border: `var(--stroke) solid ${invalid ? 'var(--terra-500)' : 'var(--ink-line)'}`,
          borderRadius: 'var(--sketch-radius-2)',
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
