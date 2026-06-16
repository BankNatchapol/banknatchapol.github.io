import { Component, type ReactNode, useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DiagramJson = { elements: any[]; appState: Record<string, any>; files: Record<string, any> }

interface DiagramProps {
  src: string
  caption?: string
  maxWidth?: string
  maxHeight?: string
  scrollable?: boolean
  scrollHeight?: string
}

function resolvePublicAsset(src: string) {
  if (/^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(src) || src.startsWith('data:') || src.startsWith('blob:')) {
    return src
  }
  const baseUrl = import.meta.env.BASE_URL || '/'
  const basePath = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  if (src.startsWith('/') && basePath && basePath !== '/' && src.startsWith(`${basePath}/`)) {
    return src
  }
  const assetPath = src.startsWith('/') ? src.slice(1) : src
  return `${baseUrl}${assetPath}`
}

class DiagramErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          border: '2px dashed var(--paper-edge)', borderRadius: '8px',
          padding: '32px', textAlign: 'center',
          color: 'var(--pencil-500)', margin: '32px 0',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            Could not load diagram
          </span>
        </div>
      )
    }
    return this.props.children
  }
}

function DiagramInner({ src, caption, maxWidth = '1400px', maxHeight, scrollable, scrollHeight = '600px' }: DiagramProps) {
  const [svgUrl, setSvgUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const assetSrc = resolvePublicAsset(src)

  useEffect(() => {
    setSvgUrl(null)
    setError(null)
    let revoke: (() => void) | null = null

    fetch(assetSrc)
      .then((r) => {
        if (r.status === 404) throw new Error('__missing__')
        if (!r.ok) throw new Error(`Could not load ${assetSrc}`)
        return r.json()
      })
      .then(async (json: DiagramJson) => {
        const { exportToSvg } = await import('@excalidraw/excalidraw')
        const svg = await exportToSvg({
          elements: json.elements ?? [],
          appState: {
            ...json.appState,
            exportBackground: false,
          },
          files: json.files ?? {},
        })
        const svgString = new XMLSerializer().serializeToString(svg)
        const blob = new Blob([svgString], { type: 'image/svg+xml' })
        const url = URL.createObjectURL(blob)
        revoke = () => URL.revokeObjectURL(url)
        setSvgUrl(url)
      })
      .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)))

    return () => revoke?.()
  }, [assetSrc])

  const loadingDiv = (
    <div style={{
      padding: '48px', textAlign: 'center', color: 'var(--pencil-500)',
      fontFamily: 'var(--font-body)', fontSize: '15px',
    }}>
      Loading diagram…
    </div>
  )

  if (error) {
    const isMissing = error === '__missing__'
    return (
      <div style={{
        border: '2px dashed var(--paper-edge)', borderRadius: '8px',
        padding: '32px', textAlign: 'center',
        color: 'var(--pencil-500)', margin: '32px 0',
      }}>
        {isMissing ? (
          <span style={{ fontFamily: 'var(--font-hand)', fontSize: '18px' }}>
            ✏️ diagram coming soon
          </span>
        ) : (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            Could not load diagram: {error}
          </span>
        )}
      </div>
    )
  }

  return (
    <figure style={{
      marginTop: '40px',
      marginBottom: '40px',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90vw',
      maxWidth: maxWidth,
    }}>
      {svgUrl ? (
        scrollable ? (
          <div style={{
            overflowY: 'auto',
            maxHeight: scrollHeight,
            border: '1px solid var(--paper-edge)',
            borderRadius: '6px',
          }}>
            <img
              src={svgUrl}
              alt={caption ?? 'diagram'}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        ) : (
          <img
            src={svgUrl}
            alt={caption ?? 'diagram'}
            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: maxHeight ?? undefined, objectFit: 'contain' }}
          />
        )
      ) : loadingDiv}
      {caption && (
        <figcaption style={{
          fontFamily: 'var(--font-mono)', fontSize: '13px',
          color: 'var(--ink-500)', textAlign: 'center',
          marginTop: '14px', fontStyle: 'italic',
          letterSpacing: '0.04em',
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function Diagram(props: DiagramProps) {
  return (
    <DiagramErrorBoundary>
      <DiagramInner {...props} />
    </DiagramErrorBoundary>
  )
}
