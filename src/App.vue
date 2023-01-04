<script lang="ts" setup>
import Header from "./components/header/Header.vue";
import MainSidebar from "./components/Sidebar/MainSidebar.vue";
import BaseLayout from "./components/layout/BaseLayout.vue";
import WrapperLayout from "./components/layout/WrapperLayout.vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <template v-if="route.name !== 'Login'">
    <wrapper-layout>
      <Header />
      <base-layout>
        <MainSidebar />
        <RouterView />
      </base-layout>
    </wrapper-layout>
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<style lang="scss">
@import "./assets/scss/main";
</style>
