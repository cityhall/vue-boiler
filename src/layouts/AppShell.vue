<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { OxButton, OxHeader, OxSidebar } from 'uidev-component-vue3'

const { t, locale } = useI18n()
const { user, logout } = useAuth()
const router = useRouter()

const items = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/catalog', label: t('nav.catalog') },
  { to: '/perf/live', label: t('nav.performance') },
])

function onLogout() {
  logout()
  router.push({ name: 'login' })
}

function toggleLocale() {
  locale.value = locale.value === 'vi' ? 'en' : 'vi'
  localStorage.setItem('locale', String(locale.value))
}
</script>

<template>
  <div class="shell">
    <OxHeader :brand="t('app.name')">
      <span class="user">{{ user?.displayName }}</span>
      <OxButton variant="ghost" type="button" @click="toggleLocale">
        {{ locale === 'vi' ? 'EN' : 'VI' }}
      </OxButton>
      <OxButton variant="ghost" type="button" @click="onLogout">
        {{ t('nav.logout') }}
      </OxButton>
    </OxHeader>
    <div class="shell__body">
      <OxSidebar :items="items" />
      <main class="shell__main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.shell__body {
  flex: 1;
  display: flex;
  min-height: 0;
}
.shell__main {
  flex: 1;
  overflow: auto;
}
.user {
  color: var(--ox-color-text-muted);
  font-size: 0.9rem;
}
@media (max-width: 768px) {
  .shell__body {
    flex-direction: column;
  }
}
</style>
