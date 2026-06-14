import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Tag } from '../components/Tag'
import { PROJECTS_QUANTUM, PROJECTS_AI } from '../site.config'

type BadgeTone = 'ink' | 'blue' | 'terra' | 'sage' | 'amber'

export const TYPE_TONE: Record<string, BadgeTone> = {
  'research': 'blue',
  'open source': 'sage',
  'live demo': 'sage',
  'side project': 'amber',
  'professional': 'ink',
  'freelance': 'terra',
}

interface Project {
  name: string
  slug: string
  year: number
  types: string[]
  body: string
  stack: string[]
  award?: string
  wobble: 0 | 1 | 2
  tilt: number
}

const WOBBLES: (0 | 1 | 2)[] = [0, 1, 2]
const TILTS = [-1, 1]

export const QUANTUM: Project[] = [...PROJECTS_QUANTUM]
  .sort((a, b) => b.year - a.year)
  .map((p, i) => ({ ...p, wobble: WOBBLES[i % 3], tilt: TILTS[i % 2] }))

export const AI: Project[] = [...PROJECTS_AI]
  .sort((a, b) => b.year - a.year)
  .map((p, i) => ({ ...p, wobble: WOBBLES[i % 3], tilt: TILTS[i % 2] }))

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

function ProjectCard({ name, slug: _slug, year, types, body, stack, award, wobble, tilt }: Project) {
  const ref = useRef<HTMLDivElement>(null)
  useDrawOnScroll(ref)
  return (
    <div ref={ref} className="draw-on-scroll">
      <Card wobble={wobble} tilt={tilt}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
          {types.map((t) => (
            <Badge key={t} tone={TYPE_TONE[t] ?? 'ink'}>{t}</Badge>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontWeight: 700,
            fontSize: '20px', color: 'var(--ink-900)',
          }}>{name}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            color: 'var(--pencil-500)',
          }}>{year}</span>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.65,
          color: 'var(--ink-700)', margin: '0 0 14px',
        }}>{body}</p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {stack.map((s) => <Tag key={s}>{s}</Tag>)}
        </div>
        {award && (
          <div style={{
            marginTop: '12px',
            fontFamily: 'var(--font-hand)', fontSize: '15px',
            color: 'var(--amber-600)',
          }}>✦ {award}</div>
        )}
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

const DEFAULT_VISIBLE = 3

const COLS = 3

function ProjectGroup({ projects, label, note, color }: {
  projects: Project[]; label: string; note: string; color: string
}) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? projects : projects.slice(0, DEFAULT_VISIBLE)
  const hiddenCount = projects.length - DEFAULT_VISIBLE

  return (
    <>
      {/* Group header stays at content width */}
      <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
        <GroupHeader label={label} note={note} color={color} />
      </div>
      {/* Cards break out to content-wide; fixed column count so expand never reflows */}
      <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(projects.length, COLS)}, minmax(0, 380px))`,
          justifyContent: 'center',
          gap: '24px',
        }}>
          {visible.map((p) => (
            <Link key={p.name} to={`/projects/${p.slug}`} style={{ textDecoration: 'none' }}>
              <ProjectCard {...p} />
            </Link>
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
    </>
  )
}

export function Projects() {
  return (
    <section id="projects" style={{ borderTop: '2px solid var(--paper-edge)', padding: '120px 40px' }}>
      {/* Section title at normal content width */}
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
      </div>

        <ProjectGroup
          projects={QUANTUM}
          label="Quantum"
          note="fridge-tested ❄"
          color="var(--blue-500)"
        />

        <ProjectGroup
          projects={AI}
          label="AI"
          note="learned, not hand-tuned ✦"
          color="var(--terra-500)"
        />
    </section>
  )
}
