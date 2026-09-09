<script setup lang="ts">
defineProps<{ title?: string; subtitle?: string }>()
</script>

<template>
  <section class="ox-page">
    <header v-if="title" class="ox-page__header">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </header>
    <div class="ox-page__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.ox-page {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  max-width: 1100px;
}
.ox-page__header h1 {
  margin: 0;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
}
.ox-page__header p {
  margin: 0.35rem 0 0;
  color: var(--ox-color-text-muted);
}
</style>
