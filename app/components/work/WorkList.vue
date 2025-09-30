<script setup lang="ts">
import { color } from "~/constants/logo-color";
import nls from "@/assets/json/nls.json";
const { locale, t } = useI18n();
let works = [
  {
    id: "yayasopeguesoro",
    title: t("yayasopeguesoro.title"),
    img: t("yayasopeguesoro.img"),
    description: t("yayasopeguesoro.description"),
    link: t("yayasopeguesoro.link"),
    stacks: nls["yayasopeguesoroStacks"],
  },
  {
    id: "mjai",
    label: "mjai Center",
    title: t("mjai.title"),
    img: t("mjai.img"),
    description: t("mjai.description"),
    link: t("mjai.link"),
    stacks: nls["mjaiStacks"],
  },
  {
    id: "loggan",
    title: t("loggan.title"),
    img: t("loggan.img"),
    description: t("loggan.description"),
    link: t("loggan.link"),
    stacks: nls["logganStacks"],
  },
  {
    id: "nst",
    title: t("nst.title"),
    img: t("nst.img"),
    description: t("nst.description"),
    link: t("nst.link"),
    stacks: nls["nstStacks"],
  },
  {
    id: "theea",
    title: t("theea.title"),
    img: t("theea.img"),
    description: t("theea.description"),
    link: t("theea.link"),
    stacks: nls["theeaStacks"],
  },
  {
    id: "affix",
    title: t("affix.title"),
    img: t("affix.img"),
    description: t("affix.description"),
    link: t("affix.link"),
    stacks: nls["affixStacks"],
  },
  {
    id: "hyphip",
    title: t("hyphip.title"),
    img: t("hyphip.img"),
    description: t("hyphip.description"),
    link: t("hyphip.link"),
    stacks: nls["hyphipStacks"],
  },
];
watch(locale, (newLocale) => {
  works = works.map((work) => {
    work.title = t(`${work.id}.title`);
    work.description = t(`${work.id}.description`);
    return work;
  });
});
</script>
<template>
  <div
    class="w-full flex flex-col gap-10 py-5 text-white/95"
    :style="`background-color: ${color}`"
  >
    <WorkProject
      v-for="work in works"
      :key="'project-' + work.id"
      v-motion-slide-visible-once-bottom
      :work="work"
      class="self-center min-md:w-5/6 max-w-[1080px] w-full md:px-0 px-10 py-10"
      :class="{
        'border-t border-white': work.id !== 'yayasopeguesoro',
      }"
    />
  </div>
</template>
