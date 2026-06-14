import React, { useEffect, useRef } from 'react'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Tag } from '../components/Tag'

type BadgeTone = 'ink' | 'blue' | 'terra' | 'sage' | 'amber'

interface Project {
  name: string
  slug: string
  badge: string
  badgeTone: BadgeTone
  body: string
  tags: string[]
  wobble: 0 | 1 | 2
  tilt: number
}

export const QUANTUM: Project[] = [
  {
    name: 'surfsim', slug: 'surfsim',
    badge: 'maintained', badgeTone: 'sage',
    body: 'A GPU surface-code simulator that runs a distance-21 patch in real time.',
    tags: ['CUDA', 'QEC'], wobble: 0, tilt: -1,
  },
  {
    name: 'decoderd', slug: 'decoderd',
    badge: 'research', badgeTone: 'blue',
    body: 'Low-latency decoder daemon that talks to the control stack over shared memory.',
    tags: ['Rust', 'decoding'], wobble: 1, tilt: 1,
  },
]

export const AI: Project[] = [
  {
    name: 'ml-decoder', slug: 'ml-decoder',
    badge: 'research', badgeTone: 'blue',
    body: 'A neural decoder for the surface code that beats MWPM at high noise.',
    tags: ['PyTorch', 'GNN'], wobble: 0, tilt: -1,
  },
  {
    name: 'scholar-rag', slug: 'scholar-rag',
    badge: 'side project', badgeTone: 'terra',
    body: 'A retrieval-augmented assistant over the full quant-ph arXiv corpus.',
    tags: ['LLM', 'RAG'], wobble: 2, tilt: 1,
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

function ProjectCard({ name, badge, badgeTone, body, tags, wobble, tilt }: Project) {
  const ref = useRef<HTMLDivElement>(null)
  useDrawOnScroll(ref)
  return (
    <div ref={ref} className="draw-on-scroll">
      <Card wobble={wobble} tilt={tilt}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontWeight: 700,
            fontSize: '20px', color: 'var(--ink-900)',
          }}>{name}</span>
          <Badge tone={badgeTone}>{badge}</Badge>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.65,
          color: 'var(--ink-700)', margin: '12px 0 16px',
        }}>{body}</p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </Card>
    </div>
  )
}

function GroupHeader({ label, note, color }: { label: string; note: string; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', margin: '48px 0 24px' }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: '40px', lineHeight: 1, margin: 0, color,
      }}>{label}</h3>
      <span style={{
        fontFamily: 'var(--font-hand)', fontSize: '20px',
        color, transform: 'rotate(-2deg)',
      }}>{note}</span>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" style={{ borderTop: '2px solid var(--paper-edge)', padding: '120px 40px' }}>
      <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
        }}>02 — Projects</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1,
          margin: '8px 0 0', color: 'var(--ink-900)',
        }}>Things I've built</h2>

        <GroupHeader label="Quantum" note="fridge-tested ❄" color="var(--blue-500)" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {QUANTUM.map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>

        <GroupHeader label="AI" note="learned, not hand-tuned ✦" color="var(--terra-500)" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {AI.map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  )
}
