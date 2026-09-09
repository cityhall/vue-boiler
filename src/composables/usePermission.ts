import { useAuthStore } from '@/stores/auth'

export function usePermission() {
  const auth = useAuthStore()

  function can(permission: string) {
    return auth.hasPermission(permission)
  }

  function canAny(permissions: string[]) {
    return permissions.some((p) => auth.hasPermission(p))
  }

  function canAll(permissions: string[]) {
    return permissions.every((p) => auth.hasPermission(p))
  }

  return { can, canAny, canAll }
}
