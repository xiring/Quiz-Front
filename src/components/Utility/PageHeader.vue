<template>
  <div class="page-header">
    <h5>{{ $t(heading) }}</h5>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: String,
});
</script>
