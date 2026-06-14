import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Tag } from '../components/Tag'
import { PROJECTS_QUANTUM, PROJECTS_AI } from '../site.config'

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

const WOBBLES: (0 | 1 | 2)[] = [0, 1, 2]
const TILTS = [-1, 1]

export const QUANTUM: Project[] = PROJECTS_QUANTUM.map((p, i) => ({
  ...p, wobble: WOBBLES[i % 3], tilt: TILTS[i % 2],
}))

export const AI: Project[] = PROJECTS_AI.map((p, i) => ({
  ...p, wobble: WOBBLES[i % 3], tilt: TILTS[i % 2],
}))

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
        <div style={{
          marginTop: '16px',
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.1em', color: 'var(--pencil-500)',
        }}>Read more →</div>
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
          {QUANTUM.map((p) => (
            <Link key={p.name} to={`/projects/${p.slug}`} style={{ textDecoration: 'none' }}>
              <ProjectCard {...p} />
            </Link>
          ))}
        </div>

        <GroupHeader label="AI" note="learned, not hand-tuned ✦" color="var(--terra-500)" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {AI.map((p) => (
            <Link key={p.name} to={`/projects/${p.slug}`} style={{ textDecoration: 'none' }}>
              <ProjectCard {...p} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
