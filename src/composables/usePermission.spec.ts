import { describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { usePermission } from '@/composables/usePermission'

describe('usePermission', () => {
  it('checks permissions from auth store', async () => {
    setActivePinia(createPinia())
    const auth = useAuthStore()
    auth.user = {
      id: '1',
      username: 'u',
      displayName: 'U',
      permissions: ['catalog:read'],
    }
    const { can, canAny } = usePermission()
    expect(can('catalog:read')).toBe(true)
    expect(can('catalog:write')).toBe(false)
    expect(canAny(['catalog:write', 'catalog:read'])).toBe(true)
  })
})
