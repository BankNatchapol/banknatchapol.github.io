import { useState } from 'react'
import { EXPERIENCE } from '../site.config'

const COLORS = [
  { color: 'var(--blue-300)', orgColor: 'var(--blue-500)' },
  { color: 'var(--terra-300)', orgColor: 'var(--terra-500)' },
  { color: 'var(--sage-300)', orgColor: 'var(--sage-500)' },
]

const ENTRIES = EXPERIENCE.map((e, i) => ({
  ...e,
  ...COLORS[i % COLORS.length],
}))

const DEFAULT_VISIBLE = 4

export function Experience() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? ENTRIES : ENTRIES.slice(0, DEFAULT_VISIBLE)
  const hiddenCount = ENTRIES.length - DEFAULT_VISIBLE

  return (
    <section id="experience" style={{ borderTop: '2px solid var(--paper-edge)', padding: '120px 40px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
        }}>04 — Experience</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1,
          margin: '8px 0 48px', color: 'var(--ink-900)',
        }}>The short CV</h2>

        <div style={{ position: 'relative', paddingLeft: '34px' }}>
          <div style={{
            position: 'absolute', left: '9px', top: '6px', bottom: '6px', width: '2px',
            backgroundImage: 'repeating-linear-gradient(var(--ink-900) 0 6px, transparent 6px 12px)',
          }} />
          {visible.map((entry, i) => (
            <div key={`${entry.role}-${entry.period}`} style={{
              position: 'relative',
              paddingBottom: i === visible.length - 1 ? 0 : '48px',
            }}>
              <span style={{
                position: 'absolute', left: '-34px', top: '4px',
                width: '20px', height: '20px',
                background: entry.color,
                border: '2px solid var(--ink-900)',
                borderRadius: 'var(--sketch-radius-blob)',
              }} />
              <div style={{
                fontFamily: 'var(--font-label)', fontSize: '12px',
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pencil-500)',
              }}>{entry.period}</div>
              <h3 style={{
                fontFamily: 'var(--font-body)', fontWeight: 700,
                fontSize: '22px', margin: '4px 0 2px', color: 'var(--ink-900)',
              }}>{entry.role}</h3>
              <div style={{
                fontFamily: 'var(--font-hand)', fontSize: '22px',
                color: entry.orgColor, lineHeight: 1.1,
              }}>{entry.org}</div>
            </div>
          ))}
        </div>

        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              width: '100%', background: 'none', border: 'none',
              cursor: 'pointer', padding: '32px 0 0', marginTop: 0,
            }}
          >
            <div style={{ flex: 1, height: 0, borderTop: '2px dashed var(--paper-edge)' }} />
            <span style={{
              fontFamily: 'var(--font-hand)', fontSize: '17px',
              color: 'var(--pencil-500)', flexShrink: 0,
            }}>
              {expanded ? '↑ show less' : `↓ ${hiddenCount} more`}
            </span>
            <div style={{ flex: 1, height: 0, borderTop: '2px dashed var(--paper-edge)' }} />
          </button>
        )}
      </div>
    </section>
  )
}
