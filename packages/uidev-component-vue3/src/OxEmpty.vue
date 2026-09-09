<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="ox-empty">
    <p class="ox-empty__title">{{ title }}</p>
    <div class="ox-empty__actions">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ox-empty {
  padding: 2.5rem 1rem;
  text-align: center;
  border: 1px dashed var(--ox-color-border);
  border-radius: var(--ox-radius);
  color: var(--ox-color-text-muted);
}
.ox-empty__title {
  margin: 0 0 1rem;
}
</style>
