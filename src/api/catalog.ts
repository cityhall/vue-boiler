import { http } from './http'

export interface CatalogItem {
  id: string
  name: string
  description: string
}

const memoryStore: CatalogItem[] = [
  { id: '1', name: 'Sample metric pack', description: 'Vertical slice demo item' },
]

export async function listCatalog(): Promise<CatalogItem[]> {
  try {
    const { data } = await http.get<CatalogItem[]>('/catalog')
    return data
  } catch {
    return [...memoryStore]
  }
}

export async function createCatalogItem(payload: Omit<CatalogItem, 'id'>): Promise<CatalogItem> {
  try {
    const { data } = await http.post<CatalogItem>('/catalog', payload)
    return data
  } catch {
    const item = { id: String(Date.now()), ...payload }
    memoryStore.unshift(item)
    return item
  }
}
