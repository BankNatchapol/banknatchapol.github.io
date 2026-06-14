import React, { useEffect, useState } from 'react'

const ExcalidrawLib = React.lazy(() =>
  import('@excalidraw/excalidraw').then((m) => ({ default: m.Excalidraw }))
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExcalidrawAPI = any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DiagramData = { elements: any[]; appState: Record<string, any>; files: Record<string, any> }

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
  const [data, setData] = useState<DiagramData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [api, setApi] = useState<ExcalidrawAPI>(null)
  const assetSrc = resolvePublicAsset(src)

  useEffect(() => {
    if (!api || !data) return
    const id = requestAnimationFrame(() => {
      api.scrollToContent(undefined, { fitToViewport: true, animate: false })
    })
    return () => cancelAnimationFrame(id)
  }, [api, data])

  useEffect(() => {
    setData(null)
    setError(null)

    fetch(assetSrc)
      .then((r) => {
        if (!r.ok) throw new Error(`Could not load ${assetSrc}`)
        return r.json()
      })
      .then((json) =>
        setData({
          elements: json.elements ?? [],
          appState: { viewBackgroundColor: '#ffffff', ...json.appState },
          files: json.files ?? {},
        })
      )
      .catch((e) => setError(e.message))
  }, [assetSrc])

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
      }}>
        {data ? (
          <React.Suspense fallback={
            <div style={{
              height: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'var(--pencil-500)',
              fontFamily: 'var(--font-body)', fontSize: '15px',
            }}>
              Loading diagram…
            </div>
          }>
            <ExcalidrawLib
              excalidrawAPI={(a: ExcalidrawAPI) => setApi(a)}
              initialData={data}
              viewModeEnabled
              zenModeEnabled
              gridModeEnabled={false}
            />
          </React.Suspense>
        ) : (
          <div style={{
            height: '100%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: 'var(--pencil-500)',
            fontFamily: 'var(--font-body)', fontSize: '15px',
          }}>
            Loading diagram…
          </div>
        )}
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
