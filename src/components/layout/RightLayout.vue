<template>
  <div class="app-right-layout" :class="rightToggle && 'toggle'">
    <div class="align-between">
      <h6 class="heading-06">{{ title }}</h6>
      <i class="ic-close" role="button" @click="toggleRight"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RightLayout",
  props: {
    title: String,
  },
  computed: {
    rightToggle() {
      return this.$store.state.rightToggle;
    },
  },
  methods: {
    toggleRight() {
      this.$store.state.rightToggle = !this.$store.state.rightToggle;
    },
  },
};
</script>
