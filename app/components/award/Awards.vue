<script setup lang="ts">
import type { StepperItem } from "@nuxt/ui";
const { locale, t } = useI18n();
const data = {
  ubci: {
    date: {
      en: "October 2019 - November 2019",
      fr: "Octobre 2019 - Novembre 2019",
    },
    description: {
      en: "Challenge on topics proposed by UBCI Bank in Tunisia. Our team decided to work on a solution to protect the bank’s data centers against natural events that are beyond human control. The solution consisted of developing a monitoring application using different types of sensors to detect, predict potential issues, and trigger preventive alerts.",
      fr: "Challenge sur des sujets proposés par la banque UBCI en Tunisie. Notre équipe a décidé de travailler sur une solution pour la protection des data-centers de la banque contre des évènements naturelles incontrôlables par l'être humain. La solution a été de développer une application de monitoring utilisant différents types de capteurs afin de détecter, prédire un problème et déclencher une alerte de prévention.",
    },
  },
};
let items = [
  {
    id: "ubci",
    icon: "lucide:award",
    title: "UBCI Innovact 2019 Challenge",
    date: data.ubci.date[locale.value],
    description: data.ubci.description[locale.value],
    img: "/images/innovact.jpg",
  },
] satisfies StepperItem[];
watch(locale, (newLocale) => {
  items = items.map((item) => {
    item.date = data[item.id].date[newLocale];
    item.description = data[item.id].description[newLocale];
    return item;
  });
});
</script>
<template>
  <HomeBodySection :title="$t('awards')">
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
        description: 'pt-3',
      }"
      class="gap-10 items-start w-full p-1"
    >
      <template #description="{ item }">
        <AwardAward
          v-motion-slide-bottom
          v-if="item"
          :duration="250"
          :award="item"
        />
      </template>
    </UStepper>
  </HomeBodySection>
</template>
