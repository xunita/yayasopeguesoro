<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui';
import { useWindowSize } from "@vueuse/core";
import stacks from "@/assets/json/projects-stacks.json";
const { width } = useWindowSize();
const { locale, t } = useI18n();
const activeStep = ref(null)
let items = [
  {
    id: "3dnotification",
    icon: "lucide:briefcase-business",
    title: "3DNotification Center",
    date: t("3dnotification.date"),
    job: t("3dnotification.title"),
    description: t("3dnotification.description"),
    stacks: stacks["3dnotificationStacks"],
  },
  {
    id: "djidji",
    icon: "lucide:briefcase-business",
    title: "Djidji",
    date: t("djidji.date"),
    job: t("djidji.title"),
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
      v-model="activeStep" 
      orientation="vertical"
      size="xl"
      color="neutral"
      :items="items"
      class="gap-10 items-start w-full p-1"
    >
      <template #description="{ item }">
        <ExperienceProject
          v-motion-slide-bottom
          :duration="250"
          :projet="item"
        />
      </template>
    </UStepper>
  </HomeBodySection>
</template>
