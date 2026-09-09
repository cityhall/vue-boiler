<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
  autocomplete?: string
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <label class="ox-field">
    <span v-if="label" class="ox-field__label">{{ label }}</span>
    <input
      class="ox-field__input"
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<style scoped>
.ox-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.ox-field__label {
  font-size: 0.85rem;
  color: var(--ox-color-text-muted);
}
.ox-field__input {
  padding: 0.65rem 0.75rem;
  border-radius: var(--ox-radius);
  border: 1px solid var(--ox-color-border);
  background: var(--ox-color-surface);
  color: var(--ox-color-text);
  font: inherit;
}
.ox-field__input:focus {
  outline: 2px solid rgb(61 156 240 / 0.45);
  border-color: var(--ox-color-accent);
}
</style>
