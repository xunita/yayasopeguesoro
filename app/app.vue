<script setup lang="ts">
const { t, locale } = useI18n();
useHead({
  title: `${t("title")}`,
  meta: [{ name: "description", content: t("metaDescription") }],
  htmlAttrs: {
    lang: locale.value,
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>
<template>
  <div class="w-full h-screen ">
    <HomeBody />
  </div>
</template>
