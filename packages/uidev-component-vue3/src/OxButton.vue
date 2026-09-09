<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost' | 'danger'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  { variant: 'primary', type: 'button', disabled: false },
)
</script>

<template>
  <button
    class="ox-btn"
    :class="[`ox-btn--${variant}`]"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.ox-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  border-radius: var(--ox-radius);
  border: 1px solid transparent;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
}
.ox-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.ox-btn--primary {
  background: var(--ox-color-accent);
  color: #061018;
}
.ox-btn--primary:hover:not(:disabled) {
  background: var(--ox-color-accent-hover);
}
.ox-btn--ghost {
  background: transparent;
  border-color: var(--ox-color-border);
  color: var(--ox-color-text);
}
.ox-btn--ghost:hover:not(:disabled) {
  background: var(--ox-color-surface-elevated);
}
.ox-btn--danger {
  background: var(--ox-color-danger);
  color: #fff;
}
</style>
