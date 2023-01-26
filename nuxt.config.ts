// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["leaflet/dist/leaflet.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "nuxt-icon",
    "nuxt-meilisearch",
    "nuxt-mail",
  ],
  build: {
    transpile: ["vue-instantsearch", "marked"],
  },
  meilisearch: {
    hostUrl: process.env.NUXT_MEILISEARCH_URL,
    searchApiKey: process.env.NUXT_MEILISEARCH_KEY,
    adminApiKey: process.env.NUXT_MEILISEARCH_KEY,
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  runtimeConfig: {
    public: {
      strapiBase: process.env.NUXT_STRAPI_BASE_URL,
    },
    mailchimpKey: process.env.MAILCHIMP_API_KEY,
    mailchimpServer: process.env.MAILCHIMP_SERVER,
  },
  mail: {
    message: {
      to: "valentinmorice1@gmail.com",
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
});
