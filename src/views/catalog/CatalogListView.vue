<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCatalogStore } from '@/stores/catalog'
import { OxButton, OxEmpty, OxPage, OxSpinner, OxTable } from 'uidev-component-vue3'

const { t } = useI18n()
const catalog = useCatalogStore()

const columns = computed(() => [
  { key: 'name', label: t('catalog.name') },
  { key: 'description', label: t('catalog.description') },
])

onMounted(() => {
  void catalog.load()
})
</script>

<template>
  <OxPage :title="t('catalog.title')">
    <div class="toolbar">
      <RouterLink to="/catalog/new">
        <OxButton type="button">{{ t('catalog.create') }}</OxButton>
      </RouterLink>
    </div>
    <OxSpinner v-if="catalog.loading" />
    <OxEmpty v-else-if="!catalog.items.length" :title="t('catalog.empty')">
      <RouterLink to="/catalog/new">
        <OxButton type="button">{{ t('catalog.create') }}</OxButton>
      </RouterLink>
    </OxEmpty>
    <OxTable v-else :columns="columns" :rows="catalog.items" />
  </OxPage>
</template>

<style scoped>
.toolbar {
  margin-bottom: 0.5rem;
}
</style>
