<script setup lang="ts">
defineProps<{ message?: string }>()
</script>

<template>
  <div class="ox-spinner" role="status">
    <span class="ox-spinner__dot" />
    <span v-if="message">{{ message }}</span>
  </div>
</template>

<style scoped>
.ox-spinner {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--ox-color-text-muted);
}
.ox-spinner__dot {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  border: 2px solid var(--ox-color-border);
  border-top-color: var(--ox-color-accent);
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
