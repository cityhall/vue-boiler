<script setup lang="ts">
defineProps<{
  columns: { key: string; label: string }[]
  rows: Record<string, unknown>[]
}>()
</script>

<template>
  <div class="ox-table-wrap">
    <table class="ox-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in rows" :key="idx">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.ox-table-wrap {
  overflow: auto;
  border: 1px solid var(--ox-color-border);
  border-radius: var(--ox-radius);
}
.ox-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
th,
td {
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--ox-color-border);
}
th {
  color: var(--ox-color-text-muted);
  font-weight: 600;
  background: var(--ox-color-surface);
}
tr:last-child td {
  border-bottom: none;
}
</style>
