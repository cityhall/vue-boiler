import { onScopeDispose, ref, shallowRef, type Ref } from 'vue'

export interface PlotlyPoint {
  t: number
  value: number
}

export interface UsePlotlyChartOptions {
  maxPoints?: number
  /** Preferred: extendTraces | restyle | react — decided in W4 spike */
  strategy?: 'extendTraces' | 'restyle' | 'react' | 'canvas-fallback'
}

/**
 * Thin Plotly integration. Uses canvas fallback when plotly.js is not installed
 * so the skeleton and CI stay lightweight; swap to Plotly.extendTraces in W4.
 */
export function usePlotlyChart(
  el: Ref<HTMLElement | null>,
  options: UsePlotlyChartOptions = {},
) {
  const maxPoints = options.maxPoints ?? 300
  const points = shallowRef<PlotlyPoint[]>([])
  const ready = ref(false)
  // Optional dep — typed loosely so CI builds without plotly installed.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let plotly: any = null
  let raf = 0
  let pending: PlotlyPoint[] = []

  async function init() {
    if (!el.value) return
    try {
      plotly = await import(/* @vite-ignore */ 'plotly.js-dist-min')
      await plotly.newPlot(
        el.value,
        [{ x: [], y: [], type: 'scatter', mode: 'lines' }],
        {
          margin: { t: 24, r: 16, b: 40, l: 48 },
          paper_bgcolor: 'transparent',
          plot_bgcolor: 'rgba(0,0,0,0.2)',
          font: { color: '#e8eef4' },
          xaxis: { title: 't' },
          yaxis: { title: 'value' },
        },
        { responsive: true, displayModeBar: false },
      )
      ready.value = true
    } catch {
      // canvas fallback
      ready.value = true
      drawFallback()
    }
  }

  function push(point: PlotlyPoint) {
    pending.push(point)
    if (!raf) {
      raf = requestAnimationFrame(flush)
    }
  }

  function pushMany(batch: PlotlyPoint[]) {
    pending.push(...batch)
    if (!raf) {
      raf = requestAnimationFrame(flush)
    }
  }

  async function flush() {
    raf = 0
    if (!pending.length) return
    const batch = pending
    pending = []
    const next = [...points.value, ...batch].slice(-maxPoints)
    points.value = next

    if (plotly && el.value) {
      const x = next.map((p) => p.t)
      const y = next.map((p) => p.value)
      const strategy = options.strategy ?? 'react'
      if (strategy === 'react') {
        await plotly.react(
          el.value,
          [{ x, y, type: 'scatter', mode: 'lines' }],
          {
            margin: { t: 24, r: 16, b: 40, l: 48 },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'rgba(0,0,0,0.2)',
            font: { color: '#e8eef4' },
          },
        )
      } else {
        await plotly.restyle(el.value, { x: [x], y: [y] }, [0])
      }
    } else {
      drawFallback()
    }
  }

  function drawFallback() {
    const node = el.value
    if (!node) return
    let canvas = node.querySelector('canvas') as HTMLCanvasElement | null
    if (!canvas) {
      node.innerHTML = ''
      canvas = document.createElement('canvas')
      canvas.width = node.clientWidth || 640
      canvas.height = node.clientHeight || 320
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      node.appendChild(canvas)
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)
    const data = points.value
    if (data.length < 2) return
    const minV = Math.min(...data.map((d) => d.value))
    const maxV = Math.max(...data.map((d) => d.value))
    const span = Math.max(maxV - minV, 1)
    ctx.strokeStyle = '#3d9cf0'
    ctx.lineWidth = 2
    ctx.beginPath()
    data.forEach((d, i) => {
      const x = (i / (data.length - 1)) * (width - 16) + 8
      const y = height - 8 - ((d.value - minV) / span) * (height - 16)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.stroke()
  }

  function destroy() {
    if (raf) cancelAnimationFrame(raf)
    if (plotly && el.value) {
      plotly.purge(el.value)
    }
  }

  onScopeDispose(destroy)

  return { points, ready, init, push, pushMany, destroy }
}
