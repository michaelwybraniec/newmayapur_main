// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["leaflet/dist/leaflet.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "nuxt-icon",
    "nuxt-meilisearch",
  ],
  build: {
    transpile: ["vue-instantsearch", "marked"],
  },
  meilisearch: {
    hostUrl: process.env.NUXT_MEILISEARCH_URL,
    searchApiKey: process.env.NUXT_MEILISEARCH_KEY,
    adminApiKey: process.env.NUXT_MEILISEARCH_KEY,
  },
  runtimeConfig: {
    public: {
      strapiBase: process.env.NUXT_STRAPI_BASE_URL,
    },
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,
  },
});
