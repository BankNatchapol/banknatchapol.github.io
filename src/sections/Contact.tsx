import { useState } from 'react'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { Button } from '../components/Button'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id="contact" style={{
      borderTop: '2px solid var(--paper-edge)',
      background: 'var(--paper-0)', padding: '120px 40px',
    }}>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: '13px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pencil-500)',
        }}>05 — Contact</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1,
          margin: '8px 0 12px', color: 'var(--ink-900)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '12px',
        }}>
          Get in touch
          <span style={{
            fontFamily: 'var(--font-hand)', fontSize: '24px', color: 'var(--blue-500)',
          }}>I reply, eventually ✦</span>
        </h2>
        <Card wobble={1} tilt={-0.8}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
              label="Your name"
              placeholder="who's writing?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              placeholder="you@somewhere"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              label="Message"
              rows={4}
              placeholder="say hello…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="primary">Send it</Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
