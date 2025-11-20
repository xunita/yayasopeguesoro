// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
      YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
      YOUR_PUBLIC_KEY: process.env.YOUR_PUBLIC_KEY,
    },
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },
        // Open Graph
        { property: "og:title", content: "Yaya S. SORO" },
        {
          property: "og:description",
          content: "Yaya Sopegue Soro | Portfolio",
        },
        {
          property: "og:image",
          content: "https://yayasopegue.netlify.app/images/yayasopeguesoro.png",
        },
        { property: "og:url", content: "https://yayasopegue.netlify.app" },
        { property: "og:type", content: "website" },

        {
          property: "og:site_name",
          content: "Yaya Sopegue Soro | Portfolio",
        },

        // For Twitter
        { name: "twitter:card", content: "Yaya Sopegue Soro | X" },
        { name: "twitter:title", content: "Yaya S. SORO" },
        {
          name: "twitter:description",
          content: "Yaya Sopegue Soro | Portfolio",
        },
        {
          name: "twitter:image",
          content: "https://yayasopegue.netlify.app/images/yayasopeguesoro.png",
        },
      ],
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
