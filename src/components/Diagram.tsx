import React, { useEffect, useState } from 'react'

const ExcalidrawLib = React.lazy(() =>
  import('@excalidraw/excalidraw').then((m) => ({ default: m.Excalidraw }))
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DiagramData = { elements: any[]; appState: Record<string, any>; files: Record<string, any> }

interface DiagramProps {
  src: string
  caption?: string
  height?: number
}

export function Diagram({ src, caption, height = 480 }: DiagramProps) {
  const [data, setData] = useState<DiagramData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error(`Could not load ${src}`)
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
  }, [src])

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
