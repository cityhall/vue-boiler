<script setup lang="ts">
export interface NavItem {
  to: string
  label: string
}
defineProps<{ items: NavItem[] }>()
</script>

<template>
  <aside class="ox-sidebar">
    <nav>
      <RouterLink
        v-for="item in items"
        :key="item.to"
        class="ox-sidebar__link"
        :to="item.to"
        active-class="ox-sidebar__link--active"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.ox-sidebar {
  width: 220px;
  padding: 1rem 0.75rem;
  border-right: 1px solid var(--ox-color-border);
  background: rgb(15 20 25 / 0.65);
}
.ox-sidebar__link {
  display: block;
  padding: 0.65rem 0.75rem;
  border-radius: var(--ox-radius);
  color: var(--ox-color-text-muted);
  margin-bottom: 0.25rem;
}
.ox-sidebar__link:hover {
  color: var(--ox-color-text);
  background: var(--ox-color-surface);
}
.ox-sidebar__link--active {
  color: var(--ox-color-text);
  background: var(--ox-color-surface-elevated);
  box-shadow: inset 2px 0 0 var(--ox-color-accent);
}
@media (max-width: 768px) {
  .ox-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--ox-color-border);
  }
  nav {
    display: flex;
    gap: 0.25rem;
    overflow-x: auto;
  }
}
</style>
