import { useFeatureFlagStore } from '@/stores/featureFlags'

export function useFeatureFlag() {
  const store = useFeatureFlagStore()
  return {
    enabled: store.enabled,
    isEnabled: store.isEnabled,
  }
}
