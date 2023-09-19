// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["leaflet/dist/leaflet.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "nuxt-icon",
    "nuxt-meilisearch",
    "nuxt-mail",
    "nuxt-gtag",
    "@pinia/nuxt",
    "@nuxt/devtools",
  ],
  build: {
    transpile: [
      "vue-instantsearch",
      "marked",
      "@glidejs/glide",
      "vue3-picture-swipe",
      "lightgallery/vue",
    ],
  },
  meilisearch: {
    hostUrl: process.env.NUXT_MEILISEARCH_URL,
    searchApiKey: process.env.NUXT_MEILISEARCH_KEY,
    adminApiKey: process.env.NUXT_MEILISEARCH_KEY,
  },
  gtag: {
    id: process.env.GTAG_ID,
  },
  strapi: {
    url: process.env.NUXT_STRAPI_BASE_URL || "http://127.0.0.1:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  runtimeConfig: {
    public: {
      strapiBase: process.env.NUXT_STRAPI_BASE_URL,
      env: process.env.ENV,
    },
    mailchimpKey: process.env.MAILCHIMP_API_KEY,
    mailchimpServer: process.env.MAILCHIMP_SERVER,
  },
  mail: {
    message: {
      to: "contact@newmayapur.com",
    },
    smtp: {
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.SENDINBLUE_USER,
        pass: process.env.SENDINBLUE_PW,
      },
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      title: "New Mayapur",
    },
  },
});
