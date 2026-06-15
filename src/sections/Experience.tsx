import { EXPERIENCE_PROFESSIONAL, EXPERIENCE_EDUCATION, EXPERIENCE_RESEARCH } from '../site.config'

const DOT_COLORS = [
  { color: 'var(--blue-300)', orgColor: 'var(--blue-500)' },
  { color: 'var(--terra-300)', orgColor: 'var(--terra-500)' },
  { color: 'var(--sage-300)', orgColor: 'var(--sage-500)' },
]

interface Entry { period: string; role: string; org: string }

function TimelineGroup({
  label, entries, accentColor,
}: {
  label: string; entries: Entry[]; accentColor: string
}) {
  return (
    <div style={{ marginBottom: '52px' }}>
      <div style={{
        fontFamily: 'var(--font-hand)', fontSize: '19px',
        color: accentColor, marginBottom: '24px',
        letterSpacing: '0.01em',
      }}>{label}</div>

      <div style={{ position: 'relative', paddingLeft: '34px' }}>
        <div style={{
          position: 'absolute', left: '9px', top: '6px', bottom: '6px', width: '2px',
          backgroundImage: 'repeating-linear-gradient(var(--ink-900) 0 6px, transparent 6px 12px)',
        }} />
        {entries.map((entry, i) => (
          <div key={`${entry.role}-${entry.period}`} style={{
            position: 'relative',
            paddingBottom: i === entries.length - 1 ? 0 : '40px',
          }}>
            <span style={{
              position: 'absolute', left: '-34px', top: '4px',
              width: '20px', height: '20px',
              background: DOT_COLORS[i % DOT_COLORS.length].color,
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
              color: DOT_COLORS[i % DOT_COLORS.length].orgColor, lineHeight: 1.1,
            }}>{entry.org}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" style={{ borderTop: '2px solid var(--paper-edge)', padding: '120px 40px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
        }}>05 — Experience</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1,
          margin: '8px 0 52px', color: 'var(--ink-900)',
        }}>The short CV</h2>

        <TimelineGroup
          label="Work"
          entries={EXPERIENCE_PROFESSIONAL}
          accentColor="var(--terra-500)"
        />
        <TimelineGroup
          label="Research"
          entries={EXPERIENCE_RESEARCH}
          accentColor="var(--sage-500)"
        />
        <TimelineGroup
          label="Education"
          entries={EXPERIENCE_EDUCATION}
          accentColor="var(--blue-500)"
        />
      </div>
    </section>
  )
}
