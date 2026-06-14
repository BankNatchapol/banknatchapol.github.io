import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DiagramJson = { elements: any[]; appState: Record<string, any>; files: Record<string, any> }

interface DiagramProps {
  src: string
  caption?: string
  height?: number
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

export function Diagram({ src, caption, height = 480 }: DiagramProps) {
  const [svgUrl, setSvgUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const assetSrc = resolvePublicAsset(src)

  useEffect(() => {
    setSvgUrl(null)
    setError(null)
    let revoke: (() => void) | null = null

    fetch(assetSrc)
      .then((r) => {
        if (!r.ok) throw new Error(`Could not load ${assetSrc}`)
        return r.json()
      })
      .then(async (json: DiagramJson) => {
        const { exportToSvg } = await import('@excalidraw/excalidraw')
        const svg = await exportToSvg({
          elements: json.elements ?? [],
          appState: {
            exportBackground: true,
            viewBackgroundColor: '#ffffff',
            ...json.appState,
          },
          files: json.files ?? {},
        })
        const svgString = new XMLSerializer().serializeToString(svg)
        const blob = new Blob([svgString], { type: 'image/svg+xml' })
        const url = URL.createObjectURL(blob)
        revoke = () => URL.revokeObjectURL(url)
        setSvgUrl(url)
      })
      .catch((e) => setError(e.message))

    return () => revoke?.()
  }, [assetSrc])

  const loadingDiv = (
    <div style={{
      height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', color: 'var(--pencil-500)',
      fontFamily: 'var(--font-body)', fontSize: '15px',
    }}>
      Loading diagram…
    </div>
  )

  if (error) {
    return (
      <div style={{
        border: '2px dashed var(--paper-edge)', borderRadius: '8px',
        padding: '24px', color: 'var(--pencil-500)', fontFamily: 'var(--font-mono)',
        fontSize: '13px', margin: '24px 0',
      }}>
        Could not load diagram: {error}
      </div>
    )
  }

  return (
    <figure style={{ margin: '32px 0' }}>
      <div style={{
        height, border: '2px solid var(--paper-edge)',
        borderRadius: '12px', overflow: 'hidden', background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {svgUrl ? (
          <img
            src={svgUrl}
            alt={caption ?? 'diagram'}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        ) : loadingDiv}
      </div>
      {caption && (
        <figcaption style={{
          fontFamily: 'var(--font-body)', fontSize: '14px',
          color: 'var(--ink-500)', textAlign: 'center',
          marginTop: '10px', fontStyle: 'italic',
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
