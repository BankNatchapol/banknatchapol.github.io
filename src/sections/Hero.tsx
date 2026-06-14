import { Button } from '../components/Button'
import { Avatar } from '../components/Avatar'
import { PERSONAL } from '../site.config'

const [firstName, ...rest] = PERSONAL.name.split(' ')
const lastName = rest.join(' ')

export function Hero() {
  return (
    <section style={{
      maxWidth: 'var(--content-wide)', margin: '0 auto',
      padding: '96px 40px 120px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: '64px', alignItems: 'center',
      animation: 'sketch-in 0.6s var(--ease-hand) both',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '14px',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--blue-700)',
        }}>
          {PERSONAL.title}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(64px, 10vw, 120px)',
          lineHeight: 0.92, margin: '10px 0 0', color: 'var(--ink-900)',
        }}>
          {firstName}<br />
          <span style={{ color: 'var(--blue-500)' }}>{lastName}</span>
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '19px',
          lineHeight: 1.75, color: 'var(--ink-700)',
          maxWidth: '52ch', margin: '24px 0 0',
        }}>
          {PERSONAL.bio}
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
          <Button variant="primary">Read my work →</Button>
          <Button variant="secondary" wobble={1}>Download CV</Button>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <Avatar
          src={PERSONAL.photo || undefined}
          alt={PERSONAL.photoAlt}
          initials={PERSONAL.initials}
          tone="blue"
          size={200}
        />
        <span style={{
          position: 'absolute', bottom: '-18px', right: '-26px',
          fontFamily: 'var(--font-hand)', fontSize: '22px',
          color: 'var(--terra-500)', transform: 'rotate(-6deg)',
        }}>
          that's me ↖
        </span>
      </div>
    </section>
  )
}
