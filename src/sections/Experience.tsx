import { EXPERIENCE } from '../site.config'

const COLORS = [
  { color: 'var(--blue-300)', orgColor: 'var(--blue-500)' },
  { color: 'var(--terra-300)', orgColor: 'var(--terra-500)' },
  { color: 'var(--sage-300)', orgColor: 'var(--sage-500)' },
]

const ENTRIES = EXPERIENCE.map((e, i) => ({
  ...e,
  ...COLORS[i % COLORS.length],
  last: i === EXPERIENCE.length - 1,
}))

export function Experience() {
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
          {ENTRIES.map((entry) => (
            <div key={entry.role} style={{ position: 'relative', paddingBottom: entry.last ? 0 : '48px' }}>
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
      </div>
    </section>
  )
}
