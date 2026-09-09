<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { OxPage } from 'uidev-component-vue3'

const { t } = useI18n()
</script>

<template>
  <OxPage :title="t('errors.forbidden')" />
</template>
