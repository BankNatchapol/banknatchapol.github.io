import React, { useEffect, useRef } from 'react'
import { Card } from '../components/Card'
import { Tag } from '../components/Tag'

const AREAS = [
  {
    title: 'Quantum Error Correction',
    body: 'Surface codes and the real-time decoders that have to keep up with them.',
    tags: ['surface codes', 'decoders'],
    wobble: 0 as 0, tilt: -1.4,
  },
  {
    title: 'Superconducting Control',
    body: 'Pulse-level calibration for fixed-frequency transmons, and chasing down crosstalk.',
    tags: ['transmons', 'crosstalk'],
    wobble: 1 as 1, tilt: 1.2,
  },
  {
    title: 'Noise & Benchmarking',
    body: 'Honest numbers for noisy machines: randomized benchmarking and tomography.',
    tags: ['benchmarking', 'tomography'],
    wobble: 2 as 2, tilt: -0.8,
  },
]

function useDrawOnScroll(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.setAttribute('data-drawn', '') },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}

function DrawCard({ wobble, tilt, title, body, tags }: typeof AREAS[number]) {
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
          color: 'var(--ink-700)', margin: '16px 0 20px',
        }}>{body}</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </Card>
    </div>
  )
}

export function Research() {
  return (
    <section id="research" style={{ borderTop: '2px solid var(--paper-edge)', padding: '120px 40px' }}>
      <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px', marginTop: '48px',
        }}>
          {AREAS.map((area) => <DrawCard key={area.title} {...area} />)}
        </div>
      </div>
    </section>
  )
}
