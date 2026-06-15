// Pure SVG line chart with a sketch aesthetic.
// Deterministic sine-wave jitter keeps the hand-drawn feel without changing on every render.

export type ChartSeries = {
  label: string
  data: number[]
  color?: string
}

interface Props {
  title: string
  xLabels: string[]
  yLabel?: string
  series: ChartSeries[]
  width?: number
  height?: number
}

const M = { top: 50, right: 150, bottom: 65, left: 75 }

// Deterministic jitter — never changes between renders
function j(i: number, si: number, scale = 1.4): number {
  return Math.sin(i * 3.7183 + si * 2.3141) * scale
}

const COLORS = [
  '#6b7280', // Base — muted grey
  '#3b82f6', // EM — blue
  '#c2410c', // QFT — terra
  '#16a34a', // 4th series — sage
]

export function HandwrittenLineChart({
  title,
  xLabels,
  yLabel = 'loss',
  series,
  width = 700,
  height = 360,
}: Props) {
  const pw = width - M.left - M.right
  const ph = height - M.top - M.bottom
  const n = xLabels.length

  const allV = series.flatMap(s => s.data)
  const pad = (Math.max(...allV) - Math.min(...allV)) * 0.12
  const yLo = Math.min(...allV) - pad
  const yHi = Math.max(...allV) + pad

  const xp = (i: number) => (i / (n - 1)) * pw
  const yp = (v: number) => ph * (1 - (v - yLo) / (yHi - yLo))

  const yTicks = Array.from({ length: 6 }, (_, i) => yLo + (i / 5) * (yHi - yLo))
  const xEvery = n > 10 ? 2 : 1

  return (
    <div style={{ overflowX: 'auto', margin: '32px 0', display: 'flex', justifyContent: 'center' }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ display: 'block', minWidth: 320 }}
        role="img"
        aria-label={title}
      >
        {/* Title */}
        <text
          x={M.left + pw / 2}
          y={26}
          textAnchor="middle"
          fontFamily="var(--font-hand)"
          fontSize="17"
          fill="var(--ink-900)"
        >
          {title}
        </text>

        <g transform={`translate(${M.left},${M.top})`}>
          {/* Grid */}
          {yTicks.map((v, i) => (
            <line
              key={i}
              x1={0} y1={yp(v) + j(i, 0, 0.7)}
              x2={pw} y2={yp(v) + j(i, 1, 0.7)}
              stroke="var(--paper-edge)"
              strokeWidth={1}
            />
          ))}

          {/* Y axis */}
          <line
            x1={j(0, 2, 0.5)} y1={0}
            x2={j(1, 2, 0.5)} y2={ph}
            stroke="var(--ink-900)" strokeWidth={1.5}
          />
          {/* X axis */}
          <line
            x1={0} y1={ph + j(0, 3, 0.5)}
            x2={pw} y2={ph + j(1, 3, 0.5)}
            stroke="var(--ink-900)" strokeWidth={1.5}
          />

          {/* Y ticks */}
          {yTicks.map((v, i) => (
            <g key={i}>
              <line x1={-5} y1={yp(v)} x2={0} y2={yp(v)} stroke="var(--ink-900)" strokeWidth={1} />
              <text
                x={-10} y={yp(v) + 4}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--pencil-500)"
              >
                {v.toFixed(2)}
              </text>
            </g>
          ))}

          {/* X ticks */}
          {xLabels.map((label, i) => {
            if (i % xEvery !== 0) return null
            return (
              <g key={i}>
                <line x1={xp(i)} y1={ph} x2={xp(i)} y2={ph + 5} stroke="var(--ink-900)" strokeWidth={1} />
                <text
                  x={xp(i)} y={ph + 18}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  fill="var(--pencil-500)"
                >
                  {label}
                </text>
              </g>
            )
          })}

          {/* Y label */}
          <text
            transform={`translate(-56,${ph / 2}) rotate(-90)`}
            textAnchor="middle"
            fontFamily="var(--font-hand)"
            fontSize="13"
            fill="var(--pencil-500)"
          >
            {yLabel}
          </text>

          {/* X label */}
          <text
            x={pw / 2} y={ph + 50}
            textAnchor="middle"
            fontFamily="var(--font-hand)"
            fontSize="13"
            fill="var(--pencil-500)"
          >
            iterations
          </text>

          {/* Lines */}
          {series.map((s, si) => {
            const color = s.color ?? COLORS[si % COLORS.length]
            const pts = s.data.map((v, i) => ({
              x: xp(i),
              y: yp(v) + j(i * 5 + si * 11, si),
            }))
            // Cubic bezier through midpoints
            let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
            for (let i = 1; i < pts.length; i++) {
              const a = pts[i - 1], b = pts[i]
              const dx = (b.x - a.x) / 3
              d += ` C ${(a.x + dx).toFixed(1)} ${a.y.toFixed(1)}, ${(b.x - dx).toFixed(1)} ${b.y.toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
            }
            return (
              <path
                key={si}
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.88}
              />
            )
          })}

          {/* Legend */}
          {series.map((s, si) => {
            const color = s.color ?? COLORS[si % COLORS.length]
            return (
              <g key={si} transform={`translate(${pw + 18},${si * 28 + 12})`}>
                <line x1={0} y1={0} x2={22} y2={0} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
                <text
                  x={28} y={5}
                  fontFamily="var(--font-hand)"
                  fontSize="14"
                  fill="var(--ink-900)"
                >
                  {s.label}
                </text>
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
