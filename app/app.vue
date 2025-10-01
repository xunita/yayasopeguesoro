<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
const { t, locale } = useI18n();
const { y } = useWindowScroll();
useHead({
  title: `${t("title")}`,
  meta: [
    { name: "description", content: t("metaDescription") },
    // Open Graph
    { property: "og:title", content: `${t("title")}` },
    { property: "og:description", content: t("metaDescription") },
    { property: "og:image", content: "https://yayasopegue.netlify.app/images/yayasopeguesoro.png" },
    { property: "og:url", content: "https://yayasopegue.netlify.app" },
    { property: "og:type", content: "website" },

    // For Twitter
    { name: "twitter:card", content: t("metaDescription") },
    { name: "twitter:title", content: `${t("title")}` },
    { name: "twitter:description", content: t("metaDescription") },
    { name: "twitter:image", content: "https://yayasopegue.netlify.app/images/yayasopeguesoro.png" },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<template>
  <UApp>
    <div class="w-full h-screen relative">
      <HomeBody />
    </div>
    <UButton
      v-if="y > 500"
      icon="heroicons-solid:arrow-up"
      color="neutral"
      variant="outline"
      class="cursor-pointer fixed bottom-10 right-10"
      @click="scrollToTop"
    />
  </UApp>
</template>
