import { describe, expect, it } from 'vitest'
import { capitalize, formatBytes, truncate } from '@/utils/format'

describe('format utils', () => {
  it('capitalizes', () => {
    expect(capitalize('vue')).toBe('Vue')
  })
  it('truncates', () => {
    expect(truncate('abcdefghij', 5)).toBe('abcd…')
  })
  it('formats bytes', () => {
    expect(formatBytes(0)).toBe('0 B')
    expect(formatBytes(2048)).toBe('2.0 KB')
  })
})
