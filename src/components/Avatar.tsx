import React from 'react'

type Tone = 'blue' | 'terra' | 'sage'

interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  size?: number
  tone?: Tone
  style?: React.CSSProperties
}

const TINTS: Record<Tone, { bg: string; fg: string }> = {
  blue:  { bg: 'var(--blue-100)',  fg: 'var(--blue-700)' },
  terra: { bg: 'var(--terra-100)', fg: 'var(--terra-500)' },
  sage:  { bg: 'var(--sage-100)',  fg: 'var(--sage-500)' },
}

export function Avatar({ src, alt = '', initials = '', size = 64, tone = 'blue', style = {} }: AvatarProps) {
  const t = TINTS[tone]
  return (
    <div
      style={{
        width: size, height: size, flexShrink: 0,
        borderRadius: 'var(--sketch-radius-blob)',
        border: 'var(--stroke) solid var(--ink-line)',
        boxShadow: 'var(--shadow-sketch-sm)',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: t.bg, color: t.fg,
        fontFamily: 'var(--font-display)', fontSize: size * 0.42, lineHeight: 1,
        ...style,
      }}
    >
      {src
        ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span aria-label={alt}>{initials}</span>}
    </div>
  )
}
