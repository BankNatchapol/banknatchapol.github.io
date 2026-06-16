import { useRef } from 'react'
import { Card } from '../components/Card'
import { useDrawOnScroll } from '../hooks/useDrawOnScroll'
import { RESEARCH_AREAS } from '../site.config'

const WOBBLES = [0, 1, 2] as const
const TILTS = [-1.4, 1.2, -0.8]

const AREAS = RESEARCH_AREAS.map((a, i) => ({
  ...a,
  wobble: WOBBLES[i % 3],
  tilt: TILTS[i % 3],
}))

function DrawCard({ wobble, tilt, title, body }: typeof AREAS[number]) {
  const ref = useRef<HTMLDivElement>(null)
  useDrawOnScroll(ref)
  return (
    <div ref={ref} className="draw-on-scroll">
      <Card wobble={wobble} tilt={tilt}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px',
          margin: 0, color: 'var(--ink-900)', lineHeight: 1,
        }}>{title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.7,
          color: 'var(--ink-700)', margin: '16px 0 0',
        }}>{body}</p>
      </Card>
    </div>
  )
}

export function Research() {
  return (
    <section id="research" style={{ borderTop: '2px solid var(--paper-edge)', padding: '120px 40px' }}>
      <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
        }}>01 — Research</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1,
          margin: '8px 0 0', color: 'var(--ink-900)',
        }}>What I work on</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px', marginTop: '48px',
        }}>
          {AREAS.map((area) => <DrawCard key={area.title} {...area} />)}
        </div>
      </div>
    </section>
  )
}
