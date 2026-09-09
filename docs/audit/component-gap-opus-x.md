# Component Gap Analysis — Legacy → Opus-X (UIdev Vue 3)

> Map ~100 legacy components to Opus-X equivalents. Gaps escalate to UIdev team immediately.

## Status legend

- **Ready** — exists in uidev-component Vue 3 (Opus-X)
- **Partial** — exists but props/slots differ; needs adapter
- **Gap** — must build local wrapper or request UIdev
- **Replace** — drop Vue2 lib; use Opus-X or thin Composition wrapper

## Foundation / layout (12)

| Legacy | Opus-X target | Status | Notes |
|--------|---------------|--------|-------|
| AppHeader | OxHeader | Ready | |
| AppSidebar | OxSidebar / OxNav | Ready | |
| AppFooter | OxFooter | Ready | |
| PageContainer | OxPage | Ready | |
| CardPanel | OxSection (not card-heavy) | Partial | Prefer section layout |
| ModalDialog | OxModal | Ready | |
| DrawerPanel | OxDrawer | Ready | |
| TabsBar | OxTabs | Ready | |
| Breadcrumb | OxBreadcrumb | Ready | |
| EmptyState | OxEmpty | Ready | |
| LoadingOverlay | OxSpinner / OxSkeleton | Ready | |
| SplitPane | OxSplit | Partial / Gap | Confirm Opus-X |

## Form controls (18)

| Legacy | Opus-X target | Status | Notes |
|--------|---------------|--------|-------|
| BaseInput | OxInput | Ready | |
| BaseTextarea | OxTextarea | Ready | |
| BaseSelect | OxSelect | Ready | |
| BaseCheckbox | OxCheckbox | Ready | |
| BaseRadio | OxRadio | Ready | |
| BaseSwitch | OxSwitch | Ready | |
| BaseDatePicker | OxDatePicker | Ready | moment→keep temporarily |
| BaseTimePicker | OxTimePicker | Ready | |
| BaseFileInput | OxUpload | Ready | replaces vue-simple-uploader |
| FormField | OxField | Ready | |
| FormError | OxFieldError | Ready | |
| SearchBox | OxSearch | Ready | |
| SuggestInput | OxAutocomplete | Ready | replaces vue-simple-suggest |
| TagInput | OxTagInput | Partial | |
| NumberInput | OxNumberInput | Ready | |
| PasswordInput | OxPassword | Ready | |
| ColorPicker | OxColorPicker | Gap | Low priority W5 |
| RichTextLite | OxTextarea + markdown | Partial | |

## Data display (16)

| Legacy | Opus-X target | Status | Notes |
|--------|---------------|--------|-------|
| DataTable | OxTable | Ready | |
| Pagination | OxPagination | Ready | |
| Badge | OxBadge | Ready | |
| StatusDot | OxStatus | Ready | |
| Tooltip | OxTooltip | Ready | replaces vue-directive-tooltip |
| Popover | OxPopover | Ready | |
| Avatar | OxAvatar | Ready | |
| KeyValueList | OxDescriptionList | Ready | |
| CodeBlock | OxCode | Partial | |
| MarkdownView | local + sanitize-html | Replace | Keep markdown-it |
| SqlView | local + sql-formatter | Replace | |
| XmlView | local + xml-reader | Replace | |
| MathBlock | MathJax3 wrapper | Replace | drop vue-mathjax |
| TreeView | OxTree | Partial | |
| Timeline | OxTimeline | Gap | |
| StatMetric | OxMetric | Partial | Avoid card clutter |

## Charts / realtime (10)

| Legacy | Opus-X target | Status | Notes |
|--------|---------------|--------|-------|
| VueApexChart | ApexChart.vue wrapper | Replace | apexcharts core |
| PlotlyStatic | PlotlyChart.vue | Replace | |
| PlotlyRealtime | PlotlyRealtimeChart.vue | Replace | W4 critical |
| ChartLegend | local | Gap | |
| ChartToolbar | OxToolbar | Partial | |
| StompStatusBadge | OxStatus | Ready | |
| LiveIndicator | OxStatus pulse | Partial | |
| PerfMetricStrip | OxMetric row | Partial | |
| CompareChart | PlotlyChart | Replace | |
| MiniSparkline | ApexChart mini | Replace | |

## Files / calendar / grid (12)

| Legacy | Opus-X target | Status | Notes |
|--------|---------------|--------|-------|
| Uploader | OxUpload | Ready | |
| UploadQueue | OxUploadQueue | Partial / Gap | |
| FileIcon | OxFileIcon | Ready | |
| FileList | OxTable / OxList | Ready | |
| FullCalendarView | @fullcalendar/vue3 | Replace | |
| EventChip | OxBadge | Ready | |
| GridLayout | OxGrid / CSS grid | Replace | drop vue-grid-layout |
| GridItem | OxGridItem | Gap | |
| DragHandle | OxDragHandle | Gap | |
| DropZone | OxUpload dropzone | Ready | |
| ProgressBar | OxProgress | Ready | |
| ConfirmDelete | OxModal | Ready | |

## Auth / feedback / misc (remaining → ~100)

| Legacy | Opus-X target | Status | Notes |
|--------|---------------|--------|-------|
| LoginForm | OxForm + fields | Ready | |
| SsoButton | OxButton | Ready | |
| PermissionGate | composable + slot | Replace | |
| ToastHost | OxToast | Ready | |
| AlertBanner | OxAlert | Ready | |
| ErrorBoundary | local | Gap | |
| I18nToggle | OxSelect | Ready | |
| Theme tokens | Opus-X CSS vars | Ready | |
| Icon set | OxIcon | Ready | |
| … | … | … | Fill remaining during Audit week 2 |

## Escalations to UIdev (priority)

1. Upload queue with multi-file progress parity
2. Draggable dashboard grid (if not in Opus-X)
3. Split pane for Performance Testing layout
4. Timeline for alert history

## Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| FE Lead (Vue 3) | | | |
| Design (Opus-X) | | | |
| UIdev owner | | | |
