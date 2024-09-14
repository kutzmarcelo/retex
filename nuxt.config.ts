// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  components: true,
  modules: [
    '@nuxtjs/tailwindcss', 
    ['@nuxtjs/google-fonts', {
      families: {
        Anybody: [400, 700],
        Raleway: [100, 400, 700],
      }
    }],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  },
  devtools: { enabled: true }
})