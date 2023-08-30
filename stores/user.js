import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isMenuOverlay: false,
    isLoading: true,
    cart: [],
    checkout: [],
  }),
  actions: {
    setLoading(value) {
      this.isLoading = value;
    },
  },
  // persist: true,
});
