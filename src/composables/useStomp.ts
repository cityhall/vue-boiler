import { onScopeDispose, ref, shallowRef } from 'vue'

export type StompStatus = 'idle' | 'connecting' | 'connected' | 'disconnected' | 'error'

export interface StompMessage {
  destination: string
  body: string
  receivedAt: number
}

export interface UseStompOptions {
  url?: string
  /** When true, emit synthetic points (no webtomp-client required). */
  mock?: boolean
  mockIntervalMs?: number
  onMessage?: (msg: StompMessage) => void
}

/**
 * STOMP composable for Performance Testing.
 * Production: wire `webtomp-client` (kept from Vue 2) inside connect().
 * Default mock mode enables local vertical-slice / soak harness without broker.
 */
export function useStomp(options: UseStompOptions = {}) {
  const status = ref<StompStatus>('idle')
  const lastError = ref<string | null>(null)
  const messages = shallowRef<StompMessage[]>([])
  let mockTimer: ReturnType<typeof setInterval> | null = null
  let client: { disconnect?: () => void } | null = null

  async function connect(destination = '/topic/perf.demo') {
    disconnect()
    status.value = 'connecting'
    lastError.value = null

    const useMock = options.mock ?? true
    if (useMock) {
      status.value = 'connected'
      mockTimer = setInterval(() => {
        const msg: StompMessage = {
          destination,
          body: JSON.stringify({
            t: Date.now(),
            value: 40 + Math.random() * 60,
          }),
          receivedAt: Date.now(),
        }
        messages.value = [...messages.value.slice(-500), msg]
        options.onMessage?.(msg)
      }, options.mockIntervalMs ?? 200)
      return
    }

    try {
      // Dynamic import keeps skeleton build free of optional native deps.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mod: any = await import(/* @vite-ignore */ 'webtomp-client').catch(() => null)
      if (!mod) {
        throw new Error('webtomp-client not installed — enable mock or add dependency')
      }
      const url = options.url || import.meta.env.VITE_STOMP_URL
      // Adapter placeholder: map to project’s existing webtomp-client API during W4.
      client = mod.client?.(url) ?? mod.default?.(url) ?? null
      status.value = 'connected'
    } catch (e) {
      status.value = 'error'
      lastError.value = e instanceof Error ? e.message : String(e)
    }
  }

  function disconnect() {
    if (mockTimer) {
      clearInterval(mockTimer)
      mockTimer = null
    }
    client?.disconnect?.()
    client = null
    if (status.value === 'connected' || status.value === 'connecting') {
      status.value = 'disconnected'
    }
  }

  onScopeDispose(disconnect)

  return { status, lastError, messages, connect, disconnect }
}
