<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui';
import { useWindowSize } from "@vueuse/core";
import stacks from "@/assets/json/projects-stacks.json";
const { width } = useWindowSize();
const { locale, t } = useI18n();
let items = [
  {
    id: "3dnotification",
    icon: "lucide:briefcase-business",
    name: "3DNotification Center",
    date: t("3dnotification.date"),
    title: t("3dnotification.title"),
    description: t("3dnotification.description"),
    stacks: stacks["3dnotificationStacks"],
  },
  {
    id: "djidji",
    icon: "lucide:briefcase-business",
    name: "Djidji",
    date: t("djidji.date"),
    title: t("djidji.title"),
    description: t("djidji.description"),
    stacks: stacks.djidjiStacks,
  },
] satisfies StepperItem[];
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
    <UStepper
      orientation="vertical"
      :default-value="-1"
      size="xl"
      color="neutral"
      :items="items"
      class="gap-10 items-start w-full p-1"
    >
      <template #content="{ item }">
        <ExperienceProject
          v-motion-slide-bottom
          :duration="250"
          :projet="item"
        />
      </template>
    </UStepper>
  </HomeBodySection>
</template>
