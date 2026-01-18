<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const props = defineProps({
  orientation: {
    type: String,
    default: "horizontal",
  },
  listClass: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
});
const { t } = useI18n();
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("about"),
    to: "/#about",
  },
  {
    label: t("experience"),
    to: "/#experience",
  },
  {
    label: t("awards"),
    to: "/#awards",
  },
  {
    label: t("projects"),
    to: "/#projects",
  },
  {
    label: t("contact"),
    to: "/#contact",
  },
]);
</script>

<template>
  <div :class="[className]">
    <UNavigationMenu
      :class="listClass"
      :items="items"
      :orientation="orientation"
    />
    <UColorModeButton class="w-fit" />
    <Language />
  </div>
</template>
