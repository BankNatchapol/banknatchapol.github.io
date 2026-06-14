import { Badge } from '../components/Badge'
import { AWARDS } from '../site.config'

export function Awards() {
  return (
    <section id="awards" style={{
      borderTop: '2px solid var(--paper-edge)',
      padding: '120px 40px',
    }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
        }}>04 — Awards</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1,
          margin: '8px 0 48px', color: 'var(--ink-900)',
        }}>Recognition</h2>

        {AWARDS.map((a) => (
          <article key={a.title} style={{
            display: 'grid', gridTemplateColumns: '88px 1fr',
            gap: '24px', alignItems: 'start',
            padding: '24px 0', borderBottom: '1px dashed var(--paper-edge)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '34px', lineHeight: 1, color: 'var(--ink-900)',
              }}>{a.year}</span>
              <Badge tone={a.tone}>✦ award</Badge>
            </div>
            <div>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700,
                  fontSize: '22px', lineHeight: 1.3, margin: 0, color: 'var(--ink-900)',
                }}>
                  {a.title}
                  <span style={{
                    fontFamily: 'var(--font-label)', fontSize: '13px',
                    letterSpacing: '0.08em', color: 'var(--pencil-500)',
                    marginLeft: '8px', fontWeight: 400,
                  }}>↗</span>
                </h3>
              </a>
              <p style={{
                fontFamily: 'var(--font-hand)', fontSize: '19px',
                color: 'var(--pencil-500)', margin: '4px 0 0', lineHeight: 1.2,
              }}>{a.event}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '15px',
                color: 'var(--pencil-500)', margin: '8px 0 0', lineHeight: 1.6,
              }}>{a.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
