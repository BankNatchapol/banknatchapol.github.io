import { Button } from '../components/Button'

export function Nav() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'color-mix(in srgb, var(--paper-1) 88%, transparent)',
      backdropFilter: 'blur(4px)',
      borderBottom: '2px solid var(--ink-900)',
    }}>
      <div style={{
        maxWidth: 'var(--content-wide)', margin: '0 auto',
        padding: '14px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" className="nav-logo" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '30px',
          color: 'var(--ink-900)', textDecoration: 'none', lineHeight: 1,
        }}>
          B<span style={{ color: 'var(--blue-500)' }}>.</span>Patamawisut
        </a>
        <nav style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          <div className="nav-links" style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
            {['Research', 'Projects', 'Publications', 'Awards', 'Experience'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-label)', fontSize: '12px',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--ink-700)', textDecoration: 'none',
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <Button size="sm" variant="primary">Say hello</Button>
          </a>
        </nav>
      </div>
    </header>
  )
}
