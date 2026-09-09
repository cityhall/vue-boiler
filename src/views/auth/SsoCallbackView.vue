<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { OxAlert, OxPage, OxSpinner } from 'uidev-component-vue3'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const { completeSso } = useAuth()
const err = ref<string | null>(null)

onMounted(async () => {
  const code = typeof route.query.code === 'string' ? route.query.code : ''
  if (!code) {
    err.value = 'Missing SSO code'
    return
  }
  try {
    await completeSso(code)
    await router.replace('/')
  } catch (e) {
    err.value = e instanceof Error ? e.message : 'SSO failed'
  }
})
</script>

<template>
  <OxPage :title="t('auth.sso')">
    <OxSpinner v-if="!err" :message="t('auth.ssoProcessing')" />
    <OxAlert v-else tone="danger">{{ err }}</OxAlert>
  </OxPage>
</template>
