<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { OxAlert, OxButton, OxInput, OxPage, OxSpinner } from 'uidev-component-vue3'

const { t } = useI18n()
const { login, loading, error } = useAuth()
const router = useRouter()
const route = useRoute()

const username = ref('demo')
const password = ref('demo')

async function onSubmit() {
  try {
    await login(username.value, password.value)
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/'
    await router.replace(redirect)
  } catch {
    /* error ref set in store */
  }
}

function startSso() {
  const base = import.meta.env.VITE_SSO_AUTHORIZE_URL
  const clientId = import.meta.env.VITE_SSO_CLIENT_ID
  const redirectUri = import.meta.env.VITE_SSO_REDIRECT_URI
  if (!base) return
  const url = new URL(base)
  url.searchParams.set('client_id', clientId)
  url.searchParams.set('redirect_uri', redirectUri)
  url.searchParams.set('response_type', 'code')
  window.location.assign(url.toString())
}
</script>

<template>
  <div class="login">
    <OxPage :title="t('app.name')" :subtitle="t('app.tagline')">
      <form class="login__form" @submit.prevent="onSubmit">
        <OxInput v-model="username" :label="t('auth.username')" autocomplete="username" />
        <OxInput
          v-model="password"
          :label="t('auth.password')"
          type="password"
          autocomplete="current-password"
        />
        <OxAlert v-if="error" tone="danger">{{ t(error) }}</OxAlert>
        <OxButton type="submit" :disabled="loading">
          <OxSpinner v-if="loading" />
          <span v-else>{{ t('auth.login') }}</span>
        </OxButton>
        <OxButton variant="ghost" type="button" @click="startSso">
          {{ t('auth.sso') }}
        </OxButton>
        <p class="hint">Dev: demo / demo</p>
      </form>
    </OxPage>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.login__form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: min(380px, 100%);
  padding: 1.25rem;
  border-radius: calc(var(--ox-radius) + 2px);
  border: 1px solid var(--ox-color-border);
  background: rgb(26 34 44 / 0.9);
  box-shadow: var(--ox-shadow);
}
.hint {
  margin: 0;
  font-size: 0.8rem;
  color: var(--ox-color-text-muted);
}
</style>
