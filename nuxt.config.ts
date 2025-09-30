// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      // ASSISTANT_ENDPOINT: process.env.ASSISTANT_ENDPOINT,
    },
  },
  ssr: false,
  css: ["~/assets/css/yayasopegue.css", "~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  icon: {
    customCollections: [
      {
        prefix: "sopegue-icon",
        dir: "./app/assets/icon/svg",
      },
    ],
  },
  ui: {
    colorMode: false,
  },
  image: {
    quality: 60,
    format: ["avif", "webp", "jpeg", "jpg", "png", "svg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "fr",
        name: "Français",
        file: "fr.json",
      },
    ],
    defaultLocale: "fr",
  },
});
