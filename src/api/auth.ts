import { http } from './http'

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface UserProfile {
  id: string
  username: string
  displayName: string
  permissions: string[]
}

export async function loginWithPassword(username: string, password: string): Promise<AuthTokens> {
  // Dev fallback when API is unavailable — remove once backend is wired.
  if (import.meta.env.DEV && username === 'demo' && password === 'demo') {
    return { accessToken: 'demo-access', refreshToken: 'demo-refresh' }
  }
  const { data } = await http.post<AuthTokens>('/auth/login', { username, password })
  return data
}

export async function exchangeSsoCode(code: string): Promise<AuthTokens> {
  const { data } = await http.post<AuthTokens>('/auth/sso/exchange', { code })
  return data
}

export async function fetchProfile(): Promise<UserProfile> {
  if (import.meta.env.DEV && getDemoProfile()) {
    return getDemoProfile()!
  }
  const { data } = await http.get<UserProfile>('/me')
  return data
}

function getDemoProfile(): UserProfile | null {
  const token = localStorage.getItem('access_token')
  if (token !== 'demo-access') return null
  return {
    id: 'demo',
    username: 'demo',
    displayName: 'Demo User',
    permissions: ['catalog:read', 'catalog:write', 'perf:read', 'perf:live'],
  }
}
