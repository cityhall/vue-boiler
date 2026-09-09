<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'info' | 'warning' | 'danger' | 'success' }>(), {
  tone: 'info',
})
</script>

<template>
  <div class="ox-alert" :class="`ox-alert--${tone}`" role="status">
    <slot />
  </div>
</template>

<style scoped>
.ox-alert {
  padding: 0.75rem 1rem;
  border-radius: var(--ox-radius);
  border: 1px solid var(--ox-color-border);
  background: var(--ox-color-surface);
}
.ox-alert--info {
  border-color: rgb(61 156 240 / 0.45);
}
.ox-alert--warning {
  border-color: rgb(230 162 60 / 0.55);
}
.ox-alert--danger {
  border-color: rgb(232 93 93 / 0.55);
}
.ox-alert--success {
  border-color: rgb(61 191 143 / 0.55);
}
</style>
