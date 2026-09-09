import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createCatalogItem, listCatalog, type CatalogItem } from '@/api/catalog'

export const useCatalogStore = defineStore('catalog', () => {
  const items = ref<CatalogItem[]>([])
  const loading = ref(false)

  async function load() {
    loading.value = true
    try {
      items.value = await listCatalog()
    } finally {
      loading.value = false
    }
  }

  async function create(name: string, description: string) {
    const item = await createCatalogItem({ name, description })
    items.value.unshift(item)
    return item
  }

  return { items, loading, load, create }
})
