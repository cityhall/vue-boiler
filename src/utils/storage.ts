const ACCESS_KEY = import.meta.env.VITE_ACCESS_COOKIE || 'access_token'
const REFRESH_KEY = import.meta.env.VITE_REFRESH_COOKIE || 'refresh_token'

/** Prefer cookies in production; localStorage used for local/demo parity. */
export function getAccessToken(): string | null {
  return readCookie(ACCESS_KEY) || localStorage.getItem(ACCESS_KEY)
}

export function getRefreshToken(): string | null {
  return readCookie(REFRESH_KEY) || localStorage.getItem(REFRESH_KEY)
}

export function setTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem(ACCESS_KEY, accessToken)
  localStorage.setItem(REFRESH_KEY, refreshToken)
  // Cookie write for shared-domain rollback parity (Secure flags set by BE Set-Cookie in prod).
  document.cookie = `${ACCESS_KEY}=${encodeURIComponent(accessToken)}; path=/; SameSite=Lax`
  document.cookie = `${REFRESH_KEY}=${encodeURIComponent(refreshToken)}; path=/; SameSite=Lax`
}

export function clearTokens(): void {
  localStorage.removeItem(ACCESS_KEY)
  localStorage.removeItem(REFRESH_KEY)
  document.cookie = `${ACCESS_KEY}=; path=/; Max-Age=0`
  document.cookie = `${REFRESH_KEY}=; path=/; Max-Age=0`
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}
