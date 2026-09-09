import { defineStore } from 'pinia'
import { computed } from 'vue'

function parseFlags(): Set<string> {
  const fromEnv = (import.meta.env.VITE_FEATURE_FLAGS || '')
    .split(',')
    .map((f: string) => f.trim())
    .filter(Boolean)
  return new Set(fromEnv)
}

export const useFeatureFlagStore = defineStore('featureFlags', () => {
  const flags = parseFlags()

  // Critical realtime kill-switch — also readable from env directly.
  if (import.meta.env.VITE_REALTIME_V3_ENABLED === 'true') {
    flags.add('realtime_v3_enabled')
  }

  const isEnabled = computed(() => (flag: string) => flags.has(flag))

  function enabled(flag: string) {
    return flags.has(flag)
  }

  return { isEnabled, enabled }
})
