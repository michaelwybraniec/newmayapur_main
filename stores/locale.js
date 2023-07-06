import { defineStore } from "pinia";

export const useLocaleStore = defineStore("localeStore", {
  state: () => {
    return {
      locale: "en",
    };
  },
  getters: {
    localeGetter: (state) => state.locale,
  },
});
