<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
const { t, locale } = useI18n();
const { y } = useWindowScroll();
useHead({
  title: `${t("title")}`,
  meta: [{ name: "description", content: t("metaDescription") }],
  htmlAttrs: {
    lang: locale.value,
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const route = useRoute();

onMounted(() => {
  if (!route.hash) return;

  const isFirstNavigation = window.history.length === 1;

  const referrer = document.referrer;
  const isExternalReferrer =
    !referrer || new URL(referrer).origin !== window.location.origin;

  if (isFirstNavigation || isExternalReferrer) {
    setTimeout(() => {
      const el = document.querySelector(route.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
  }
});
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
