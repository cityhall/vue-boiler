<script setup lang="ts">
defineProps<{ brand: string }>()
</script>

<template>
  <header class="ox-header">
    <div class="ox-header__brand">{{ brand }}</div>
    <div class="ox-header__actions">
      <slot />
    </div>
  </header>
</template>

<style scoped>
.ox-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid var(--ox-color-border);
  background: rgb(26 34 44 / 0.85);
  backdrop-filter: blur(10px);
}
.ox-header__brand {
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: var(--ox-color-accent);
}
.ox-header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
