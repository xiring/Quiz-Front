<template>
  <div class="row g-0 app-row-layout h-100">
    <div :class="leftGrid">
      <div :class="leftPaddingNull ? 'h-100 pe-2' : 'app-column-first'">
        <slot name="left"></slot>
      </div>
    </div>

    <div :class="rightGrid">
      <div
        :class="[
          bordered && 'bordered',
          rightPaddingNull ? 'h-100 pe-2' : 'app-column-second',
        ]"
      >
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  leftGrid: String,
  rightGrid: String,
  bordered: Boolean,
  grid: Boolean,
  leftPaddingNull: Boolean,
  rightPaddingNull: Boolean,
});
</script>
