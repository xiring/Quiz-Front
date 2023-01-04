<template>
  <div class="container" :class="stretch && 'app-height'">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  stretch: Boolean,
});
</script>
