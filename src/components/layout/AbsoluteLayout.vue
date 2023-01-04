<template>
  <div
    class="app-height app-absolute-layout"
    :class="[{ scrollable: scrollable, withGrid: withGrid }, styleClass]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  scrollable: Boolean,
  withGrid: Boolean,
  styleClass: String,
});
</script>
