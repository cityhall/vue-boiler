import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export function useAuth() {
  const store = useAuthStore()
  const { user, loading, error, isAuthenticated, bootstrapped } = storeToRefs(store)

  return {
    user,
    loading,
    error,
    isAuthenticated,
    bootstrapped,
    login: store.login,
    logout: store.logout,
    completeSso: store.completeSso,
    bootstrap: store.bootstrap,
  }
}
