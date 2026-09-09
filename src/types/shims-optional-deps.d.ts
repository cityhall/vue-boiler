declare module 'plotly.js-dist-min' {
  const Plotly: {
    newPlot: (...args: unknown[]) => Promise<unknown>
    react: (...args: unknown[]) => Promise<unknown>
    restyle: (...args: unknown[]) => Promise<unknown>
    purge: (...args: unknown[]) => void
  }
  export default Plotly
}

declare module 'webtomp-client' {
  const mod: Record<string, unknown>
  export default mod
}
