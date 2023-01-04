<template>
  <div class="sidebar-01" :class="{ toggled: isToggled }">
    <div class="position-relative h-100">
      <absolute-layout :scrollable="true">
        <ul class="sidebar-01-list" v-if="routes.length">
          <li
            v-for="(data, index) in routes"
            :key="index"
            :class="{ hasSub: data.children }"
          >
            <template v-if="!data.children">
              <router-link v-if="!data.hidden" :to="data.path">
                {{ $t(data.meta.title) }}
              </router-link>
            </template>
            <template v-else>
              <a
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#multiCollapseExample${index}`"
                aria-expanded="false"
                :aria-controls="`multiCollapseExample${index}`"
              >
                {{ $t(data.meta.title) }}
              </a>
              <div
                class="collapse multi-collapse"
                :id="`multiCollapseExample${index}`"
              >
                <ul class="card">
                  <li
                    v-for="(children, item) in data.children"
                    :key="item"
                    :class="{ hasSub: children.children }"
                  >
                    <template v-if="!children.children">
                      <router-link :to="children.path">
                        {{ $t(children.meta.title) }}
                      </router-link>
                    </template>
                    <template v-else>
                      <a
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#multiCollapseExample3"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample3"
                      >
                        {{ $t(children.meta.title) }}
                      </a>
                      <div
                        class="collapse multi-collapse"
                        id="multiCollapseExample3"
                      >
                        <div class="card">
                          <router-link
                            v-for="(grandchild, index) in children.children"
                            :key="index"
                            :to="grandchild.path"
                          >
                            {{ $t(children.meta.title) }}
                          </router-link>
                        </div>
                      </div>
                    </template>
                  </li>
                </ul>
              </div>
            </template>
          </li>
        </ul>
      </absolute-layout>
    </div>
  </div>
</template>

<script setup>
import AbsoluteLayout from "../layout/AbsoluteLayout.vue";
import { watch, reactive, toRefs, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../stores/mainStore";
import { usePermissionStore } from "../../stores/permission";

const mainStates = useMainStore();
const permissionStates = usePermissionStore();

const { isToggled } = storeToRefs(mainStates);

const state = reactive({
  routes: [],
});

const { routes } = toRefs(state);

watch(permissionStates, (newValue, oldValue) => {
  state.routes = newValue.routes;
});

onMounted(() => {
  state.routes = permissionStates.routes;
});
</script>
<style scoped>
a.router-link-active.router-link-exact-active {
  background-color: #fff;
  color: #0c68b0 !important;
  font-weight: 500;
  border-radius: 7px;
  display: flex;
  justify-content: inherit;
  padding: 8px 12px 13px 16px;
}
</style>
