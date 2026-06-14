import { Badge } from '../components/Badge'

type BadgeTone = 'ink' | 'blue' | 'terra' | 'sage' | 'amber'

interface Paper {
  year: string
  venue: string
  tone: BadgeTone
  title: string
  authors: string
}

const PAPERS: Paper[] = [
  {
    year: '2024',
    venue: 'Nature Physics',
    tone: 'blue',
    title: 'Real-time decoding of the surface code on a 100-qubit processor',
    authors: 'N. Patamawisut, R. Okafor, L. Demir, et al.',
  },
  {
    year: '2023',
    venue: 'Quantum',
    tone: 'terra',
    title: 'Benchmarking logical error rates under realistic noise',
    authors: 'L. Demir, N. Patamawisut, A. Bianchi',
  },
]

export function Publications() {
  return (
    <section id="publications" style={{
      borderTop: '2px solid var(--paper-edge)',
      background: 'var(--paper-0)', padding: '120px 40px',
    }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
        }}>03 — Publications</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1,
          margin: '8px 0 48px', color: 'var(--ink-900)',
        }}>Selected papers</h2>

        {PAPERS.map((p) => (
          <article key={p.title} style={{
            display: 'grid', gridTemplateColumns: '88px 1fr',
            gap: '24px', alignItems: 'start',
            padding: '24px 0', borderBottom: '1px dashed var(--paper-edge)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '34px', lineHeight: 1, color: 'var(--ink-900)',
              }}>{p.year}</span>
              <Badge tone={p.tone}>{p.venue}</Badge>
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-body)', fontWeight: 700,
                fontSize: '22px', lineHeight: 1.4, margin: 0, color: 'var(--ink-900)',
              }}>{p.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '15px',
                color: 'var(--ink-500)', margin: '6px 0 0',
              }}>{p.authors}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
