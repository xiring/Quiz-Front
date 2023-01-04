import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import ElementPlus from "element-plus";

import "./assets/icon/style.css";
import "element-plus/dist/index.css";
import * as bootstrap from "bootstrap";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@/permission"; // permission control

//for locale
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const piniaState = createPinia();

const fallbackLocale = import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE;

const localeFromLocalStorage = window.localStorage.getItem("VueAppLanguage");

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localeFromLocalStorage || "en",
  fallbackLocale: fallbackLocale || "en",
  availableLocales: ["en", "ne"],
  messages: messages,
});

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(piniaState).use(router).use(ElementPlus);

app.use(i18n);
app.mount("#app");
