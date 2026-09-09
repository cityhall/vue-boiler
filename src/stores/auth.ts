import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  exchangeSsoCode,
  fetchProfile,
  loginWithPassword,
  type UserProfile,
} from '@/api/auth'
import { clearTokens, getAccessToken, setTokens } from '@/utils/storage'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserProfile | null>(null)
  const bootstrapped = ref(false)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => Boolean(user.value && getAccessToken()))

  async function bootstrap() {
    loading.value = true
    try {
      if (!getAccessToken()) {
        user.value = null
        return
      }
      user.value = await fetchProfile()
    } catch {
      clearTokens()
      user.value = null
    } finally {
      bootstrapped.value = true
      loading.value = false
    }
  }

  async function login(username: string, password: string) {
    loading.value = true
    error.value = null
    try {
      const tokens = await loginWithPassword(username, password)
      setTokens(tokens.accessToken, tokens.refreshToken)
      user.value = await fetchProfile()
    } catch (e) {
      error.value = 'auth.error'
      throw e
    } finally {
      loading.value = false
    }
  }

  async function completeSso(code: string) {
    loading.value = true
    error.value = null
    try {
      const tokens = await exchangeSsoCode(code)
      setTokens(tokens.accessToken, tokens.refreshToken)
      user.value = await fetchProfile()
    } finally {
      loading.value = false
    }
  }

  function logout() {
    clearTokens()
    user.value = null
  }

  function hasPermission(permission: string) {
    return user.value?.permissions.includes(permission) ?? false
  }

  return {
    user,
    bootstrapped,
    loading,
    error,
    isAuthenticated,
    bootstrap,
    login,
    completeSso,
    logout,
    hasPermission,
  }
})
