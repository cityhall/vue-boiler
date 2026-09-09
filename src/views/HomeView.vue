<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { OxAlert, OxPage } from 'uidev-component-vue3'

const { t } = useI18n()
</script>

<template>
  <OxPage :title="t('nav.home')" :subtitle="t('app.tagline')">
    <OxAlert tone="success">
      Vertical slice ready: Auth → Shell → Catalog CRUD. Performance Live uses mock STOMP until
      W4 broker wiring.
    </OxAlert>
  </OxPage>
</template>
