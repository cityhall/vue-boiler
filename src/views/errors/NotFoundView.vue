<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { OxButton, OxPage } from 'uidev-component-vue3'

const { t } = useI18n()
</script>

<template>
  <OxPage :title="t('errors.notFound')">
    <RouterLink to="/">
      <OxButton type="button">{{ t('nav.home') }}</OxButton>
    </RouterLink>
  </OxPage>
</template>
