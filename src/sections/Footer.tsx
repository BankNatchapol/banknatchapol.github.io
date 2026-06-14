export function Footer() {
  return (
    <footer style={{ borderTop: '2px solid var(--ink-900)', padding: '48px 40px', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-hand)', fontSize: '26px', color: 'var(--ink-700)' }}>
        drawn &amp; written by Natchapol
      </div>
      <div style={{
        fontFamily: 'var(--font-label)', fontSize: '11px',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--pencil-300)', marginTop: '8px',
      }}>
        made on paper · no qubits were harmed
      </div>
    </footer>
  )
}
