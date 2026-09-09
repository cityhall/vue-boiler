<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFeatureFlag } from '@/composables/useFeatureFlag'
import { usePlotlyChart } from '@/composables/usePlotlyChart'
import { useStomp } from '@/composables/useStomp'
import { OxAlert, OxButton, OxPage, OxSpinner } from 'uidev-component-vue3'

const { t } = useI18n()
const { enabled } = useFeatureFlag()
const chartEl = ref<HTMLElement | null>(null)
const chart = usePlotlyChart(chartEl, { strategy: 'react', maxPoints: 240 })

const { status, connect, disconnect } = useStomp({
  mock: true,
  mockIntervalMs: 200,
  onMessage: (msg) => {
    try {
      const payload = JSON.parse(msg.body) as { t: number; value: number }
      chart.push(payload)
    } catch {
      /* ignore malformed */
    }
  },
})

onMounted(async () => {
  await chart.init()
  if (enabled('realtime_v3_enabled')) {
    await connect('/topic/perf.demo')
  } else {
    // Still allow mock demo for skeleton; flag gates production cutover.
    await connect('/topic/perf.demo')
  }
})
</script>

<template>
  <OxPage :title="t('perf.title')">
    <OxAlert v-if="!enabled('realtime_v3_enabled')" tone="warning">
      {{ t('perf.flagOff') }}
    </OxAlert>
    <OxAlert tone="info">{{ t('perf.mockMode') }} — status: {{ status }}</OxAlert>
    <div class="toolbar">
      <OxButton type="button" variant="ghost" @click="connect()">Reconnect</OxButton>
      <OxButton type="button" variant="ghost" @click="disconnect()">Disconnect</OxButton>
      <OxSpinner v-if="status === 'connecting'" :message="t('perf.connecting')" />
    </div>
    <div ref="chartEl" class="chart" />
  </OxPage>
</template>

<style scoped>
.toolbar {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.75rem;
}
.chart {
  height: 360px;
  border: 1px solid var(--ox-color-border);
  border-radius: var(--ox-radius);
  background: var(--ox-color-surface);
}
</style>
