// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,
  router: {
    options: {
      hashMode: true,
    },
  },

  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
});
