<template>
  <div class="header-01">
    <div class="align-center">
      <i class="ic-bento-menu mr-16 h3" @click="toggleSidebar"></i>
      <h6>{{ $t("Dashboard") }}</h6>
    </div>
    <div class="align-center">
      <div class="dropdown dropdown-01">
        <div class="flex-center-between pr-16">
          <select
            class="form-select"
            v-model="$i18n.locale"
            id="locale"
            @change="setLocalStorage($i18n.locale)"
          >
            <option v-for="locale in $i18n.availableLocales" :value="locale">
              {{ locale === "ne" ? "Nepali" : "English" }}
            </option>
          </select>
        </div>
      </div>
      <div class="dropdown dropdown-01 notification">
        <a
          class="active"
          id="dropdownMenuButton1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="ic-bell"></i>
        </a>
        <ul
          class="dropdown-menu list-bullet"
          aria-labelledby="dropdownMenuButton1"
        >
          <div class="flex-center-between">
            <p class="fw-semibold">Notification</p>
            <router-link to="/" class="small text-primary">
              View all
            </router-link>
          </div>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="">
              <small class="clamp-3">
                Rajendra Shrestha has filed a complaint
              </small>
              <small class="text-cGray600 mt-2">10 secs ago</small>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-01">
        <a
          class="p fw-bold align-center"
          id="dropdownMenuButton1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ authStates.user }}
          <i class="ic-chevron-down ml-8"></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <el-button class="w-100" text>Change Password</el-button>
          </li>
          <li>
            <el-button class="w-100" text @click="signOut">Logout</el-button>
            <!--            <button class="text-danger" @click="signOut">Logout</button>-->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//Element Plus
import { ElMessage, ElMessageBox } from "element-plus";
// State
import { useMainStore } from "@/stores/mainStore";
import { useStore } from "@/stores/auth";
// Vue
import { useRouter } from "vue-router";

const mainStates = useMainStore();
const authStates = useStore();

const router = useRouter();
const { toggleSidebar } = mainStates;

const signOut = () => {
  ElMessageBox.confirm("Are you sure you want to logout?", "Logout", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
    draggable: true,
  })
    .then(() => {
      try {
        authStates.logOut().then(() => {
          router.push({ name: "Login" });
          ElMessage({
            type: "info",
            message: "See you later.",
          });
        });
      } catch (error) {
        alert(error);
      }
    })
    .catch(() => {
      alert();
      ElMessage({
        type: "info",
        message: "Something went wrong.",
      });
    });
};

function setLocalStorage(locale) {
  window.localStorage.setItem("VueAppLanguage", locale);
}
</script>
