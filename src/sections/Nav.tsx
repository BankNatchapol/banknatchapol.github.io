import { useState } from 'react'
import { Button } from '../components/Button'

const NAV_LINKS = ['Research', 'Projects', 'Publications', 'Awards', 'Experience']

export function Nav() {
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

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
        {/* Logo */}
        <a href="#" className="nav-logo" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '30px',
          color: 'var(--ink-900)', textDecoration: 'none', lineHeight: 1,
        }}>
          B<span style={{ color: 'var(--blue-500)' }}>.</span>Patamawisut
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          {NAV_LINKS.map((label) => (
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
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <Button size="sm" variant="primary">Say hello</Button>
          </a>
        </nav>

        {/* Mobile: hamburger + say hello */}
        <div className="nav-mobile" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <a href="#contact" style={{ textDecoration: 'none' }} onClick={close}>
            <Button size="sm" variant="primary">Say hello</Button>
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: '2px solid var(--ink-900)',
              borderRadius: '6px', cursor: 'pointer',
              padding: '6px 8px', display: 'flex', flexDirection: 'column',
              gap: '5px', width: '38px', height: '38px', justifyContent: 'center',
            }}
          >
            <span style={{
              display: 'block', height: '2px', background: 'var(--ink-900)',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', height: '2px', background: 'var(--ink-900)',
              transition: 'opacity 0.2s',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', height: '2px', background: 'var(--ink-900)',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: 'var(--paper-1)',
          borderTop: '1px dashed var(--paper-edge)',
          borderBottom: '2px solid var(--ink-900)',
          padding: '16px 40px 24px',
        }}>
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={close}
              style={{
                display: 'block',
                fontFamily: 'var(--font-label)', fontSize: '13px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--ink-700)', textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px dashed var(--paper-edge)',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
