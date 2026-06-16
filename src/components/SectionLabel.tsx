interface SectionLabelProps { children: React.ReactNode }

import React from 'react'

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div style={{
      fontFamily: 'var(--font-label)', fontSize: '13px',
      letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
    }}>{children}</div>
  )
}
