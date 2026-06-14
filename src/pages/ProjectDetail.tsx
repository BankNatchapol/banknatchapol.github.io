import React, { Suspense, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { Badge } from '../components/Badge'
import { Tag } from '../components/Tag'
import { QUANTUM, AI } from '../sections/Projects'

const PROSE: React.ComponentPropsWithoutRef<typeof MDXProvider>['components'] = {
  h2: (p) => <h2 style={{
    fontFamily: 'var(--font-display)', fontWeight: 700,
    fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.1,
    color: 'var(--ink-900)', margin: '56px 0 16px',
    borderBottom: '2px dashed var(--paper-edge)', paddingBottom: '10px',
  }} {...p} />,
  h3: (p) => <h3 style={{
    fontFamily: 'var(--font-body)', fontWeight: 700,
    fontSize: '20px', color: 'var(--ink-900)', margin: '36px 0 10px',
  }} {...p} />,
  p: (p) => <p style={{
    fontFamily: 'var(--font-body)', fontSize: '17px',
    lineHeight: 1.8, color: 'var(--ink-700)', margin: '0 0 20px',
  }} {...p} />,
  a: (p) => <a style={{
    color: 'var(--blue-500)', textDecoration: 'underline',
    textUnderlineOffset: '3px',
  }} {...p} />,
  ul: (p) => <ul style={{
    paddingLeft: '24px', margin: '0 0 20px',
    display: 'flex', flexDirection: 'column', gap: '8px',
  }} {...p} />,
  ol: (p) => <ol style={{
    paddingLeft: '24px', margin: '0 0 20px',
    display: 'flex', flexDirection: 'column', gap: '8px',
  }} {...p} />,
  li: (p) => <li style={{
    fontFamily: 'var(--font-body)', fontSize: '17px',
    lineHeight: 1.7, color: 'var(--ink-700)',
  }} {...p} />,
  code: (p) => <code style={{
    fontFamily: 'var(--font-mono)', fontSize: '14px',
    background: 'var(--paper-edge)', borderRadius: '4px',
    padding: '2px 6px', color: 'var(--blue-700)',
  }} {...p} />,
  pre: (p) => <pre style={{
    fontFamily: 'var(--font-mono)', fontSize: '14px',
    background: 'var(--paper-edge)', borderRadius: '8px',
    padding: '20px 24px', overflowX: 'auto',
    margin: '0 0 24px', lineHeight: 1.65,
  }} {...p} />,
  blockquote: (p) => <blockquote style={{
    borderLeft: '4px solid var(--blue-300)',
    paddingLeft: '20px', margin: '0 0 24px',
    color: 'var(--ink-500)', fontStyle: 'italic',
  }} {...p} />,
  hr: () => <hr style={{
    border: 'none', borderTop: '2px dashed var(--paper-edge)',
    margin: '48px 0',
  }} />,
  strong: (p) => <strong style={{ color: 'var(--ink-900)', fontWeight: 700 }} {...p} />,
}

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

        <MDXProvider components={PROSE}>
          <Suspense fallback={
            <p style={{ color: 'var(--pencil-500)', fontStyle: 'italic' }}>Loading…</p>
          }>
            <MdxContent />
          </Suspense>
        </MDXProvider>
      </div>
    </div>
  )
}
