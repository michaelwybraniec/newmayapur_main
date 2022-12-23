// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "nuxt-icon"],
  runtimeConfig: {
    public: {
      strapiBase: process.env.NUXT_STRAPI_BASE_URL,
    },
  },
});
