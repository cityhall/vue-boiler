<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useCatalogStore } from '@/stores/catalog'
import { OxAlert, OxButton, OxInput, OxPage } from 'uidev-component-vue3'

const { t } = useI18n()
const catalog = useCatalogStore()
const router = useRouter()

const name = ref('')
const description = ref('')
const saved = ref(false)

async function onSubmit() {
  await catalog.create(name.value, description.value)
  saved.value = true
  await router.push({ name: 'catalog' })
}
</script>

<template>
  <OxPage :title="t('catalog.create')">
    <form class="form" @submit.prevent="onSubmit">
      <OxInput v-model="name" :label="t('catalog.name')" />
      <OxInput v-model="description" :label="t('catalog.description')" />
      <OxAlert v-if="saved" tone="success">{{ t('catalog.saved') }}</OxAlert>
      <OxButton type="submit">{{ t('catalog.save') }}</OxButton>
    </form>
  </OxPage>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  max-width: 420px;
}
</style>
