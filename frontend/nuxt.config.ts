// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ["@pinia/nuxt", "@nuxt/ui"],
	css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  devServer: {
    port: 3001
  }
})
