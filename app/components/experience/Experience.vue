<script setup lang="ts">
import type { StepperItem } from "@nuxt/ui";
import { useWindowSize } from "@vueuse/core";
import stacks from "@/assets/json/projects-stacks.json";
const { width } = useWindowSize();
const { locale, t } = useI18n();
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
    id: "py_ueve",
    icon: "lucide:briefcase-business",
    title: "Spaceship Titanic",
    date: t("py_ueve.date"),
    job: t("py_ueve.title"),
    description: t("py_ueve.description"),
    stacks: stacks["py_ueveStacks"],
  },
  {
    id: "java_ueve",
    icon: "lucide:briefcase-business",
    title: "Kanellakis & Smolka",
    date: t("java_ueve.date"),
    job: t("java_ueve.title"),
    description: t("java_ueve.description"),
    stacks: stacks["java_ueveStacks"],
  },
  {
    id: "db_fsm",
    icon: "lucide:briefcase-business",
    title: "FSM",
    date: t("db_fsm.date"),
    job: t("db_fsm.title"),
    description: t("db_fsm.description"),
    stacks: stacks["db_fsmStacks"],
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
      orientation="vertical"
      size="xl"
      color="neutral"
      :default-value="-1"
      :items="items"
      disabled
      :ui="{
        trigger: 'cursor-default',
        item: 'cursor-default',
        icon: 'dark:text-white',
        title: 'font-semibold text-xl',
        description: 'pt-4',
      }"
      class="gap-10 items-start w-full p-1"
    >
      <template #description="{ item }">
        <ExperienceProject
          v-motion-slide-bottom
          v-if="item"
          :duration="250"
          :projet="item"
        />
      </template>
    </UStepper>
  </HomeBodySection>
</template>
