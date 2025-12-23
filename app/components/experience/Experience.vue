<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { useWindowSize } from "@vueuse/core";
import stacks from "@/assets/json/projects-stacks.json";
const { width } = useWindowSize();
const { locale, t } = useI18n();
let items = [
  {
    id: "3dnotification",
    icon: "lucide:briefcase-business",
    label: "3DNotification Center",
    date: t("3dnotification.date"),
    title: t("3dnotification.title"),
    description: t("3dnotification.description"),
    stacks: stacks["3dnotificationStacks"],
  },
  {
    id: "djidji",
    icon: "lucide:briefcase-business",
    label: "Djidji",
    date: t("djidji.date"),
    title: t("djidji.title"),
    description: t("djidji.description"),
    stacks: stacks.djidjiStacks,
  },
] satisfies TabsItem[];
watch(locale, (newLocale) => {
  items = items.map((item) => {
    item.date = t(`${item.id}.date`);
    item.title = t(`${item.id}.title`);
    item.description = t(`${item.id}.description`);
    return item;
  });
});
</script>
<template>
  <HomeBodySection :title="$t('experience')">
    <UTabs
      orientation="vertical"
      size="xl"
      color="neutral"
      :items="items"
      variant="link"
      :ui="{
        trigger: 'cursor-pointer px-5 py-3',
        //   list: 'border-l-2',
        //   indicator: 'border-l-2',
      }"
      class="gap-10 items-start w-full"
    >
      <template #content="{ item }">
        <ExperienceProject
          v-motion-slide-bottom
          :duration="250"
          :projet="item"
        />
      </template>
    </UTabs>
  </HomeBodySection>
</template>
