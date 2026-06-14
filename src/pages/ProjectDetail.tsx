import React, { Suspense, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { Tag } from '../components/Tag'
import { QUANTUM, AI } from '../sections/Projects'

const ALL_PROJECTS = [...QUANTUM, ...AI]

const KNOWN_SLUGS = ALL_PROJECTS.map((p) => p.slug)

const MDX_MODULES: Record<string, React.LazyExoticComponent<React.ComponentType>> = Object.fromEntries(
  KNOWN_SLUGS.map((slug) => [
    slug,
    React.lazy(() => import(`../content/projects/${slug}.mdx`)),
  ]),
)

const backLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-label)',
  fontSize: '13px',
  letterSpacing: '0.1em',
  color: 'var(--pencil-500)',
  textDecoration: 'none',
  display: 'inline-block',
  marginBottom: '48px',
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = useMemo(() => ALL_PROJECTS.find((p) => p.slug === slug), [slug])
  const MdxContent = slug ? MDX_MODULES[slug] : undefined

  const pageStyle: React.CSSProperties = {
    backgroundColor: 'var(--paper-1)',
    backgroundImage: 'var(--paper-grain)',
    color: 'var(--ink-900)',
    fontFamily: 'var(--font-body)',
    minHeight: '100vh',
    padding: '80px 40px',
  }

  if (!project || !MdxContent) {
    return (
      <div style={pageStyle}>
        <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
          <a href="/#projects" style={backLinkStyle}>← Projects</a>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--ink-900)' }}>
            Project not found
          </h1>
          <p style={{ color: 'var(--ink-700)' }}>
            No project matched <code>"{slug}"</code>.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: 'var(--content)', margin: '0 auto' }}>
        <a href="/#projects" style={backLinkStyle}>← Projects</a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <h1 style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1,
            margin: 0,
            color: 'var(--ink-900)',
          }}>
            {project.name}
          </h1>
          <Badge tone={project.badgeTone}>{project.badge}</Badge>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '56px' }}>
          {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          lineHeight: 1.75,
          color: 'var(--ink-700)',
        }}>
          <Suspense fallback={
            <p style={{ color: 'var(--pencil-500)', fontStyle: 'italic' }}>Loading…</p>
          }>
            <MdxContent />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
