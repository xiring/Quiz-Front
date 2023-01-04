import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStates", {
  state: () => ({
    counter: 0,
    isToggled: false,
  }),
  getters: {
    doubleCount: (state) => {
      state.counter * 2;
    },
  },
  actions: {
    toggleSidebar() {
      this.isToggled = !this.isToggled;
    },
    addOne() {
      this.counter++;
    },
    changeName(payload) {
      this.name = payload;
    },
  },
});
