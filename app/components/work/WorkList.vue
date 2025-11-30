<script setup lang="ts">
import { color } from "~/constants/logo-color";
import stacks from "@/assets/json/projects-stacks.json";
const { locale, t } = useI18n();
let works = [
  {
    id: "salyeo",
    title: t("salyeo.title"),
    img: t("salyeo.img"),
    description: t("salyeo.description"),
    link: t("salyeo.link"),
    status: "paused",
    badge: "neutral",
    stacks: stacks["salyeoStacks"],
  },
  {
    id: "yayasopeguesoro",
    title: t("yayasopeguesoro.title"),
    img: t("yayasopeguesoro.img"),
    description: t("yayasopeguesoro.description"),
    link: t("yayasopeguesoro.link"),
    status: "done",
    badge: "primary",
    stacks: stacks["yayasopeguesoroStacks"],
  },
  {
    id: "sbandroid",
    title: t("sbandroid.title"),
    iframe: true,
    link: t("sbandroid.link"),
    iframe_link: t("sbandroid.iframe_link"),
    description: t("sbandroid.description"),
    stacks: stacks["sbandroidStacks"],
  },
  {
    id: "mjai",
    label: "mjai Center",
    title: t("mjai.title"),
    img: t("mjai.img"),
    description: t("mjai.description"),
    link: t("mjai.link"),
    status: "done",
    badge: "primary",
    stacks: stacks["mjaiStacks"],
  },
  {
    id: "loggan",
    title: t("loggan.title"),
    img: t("loggan.img"),
    description: t("loggan.description"),
    link: t("loggan.link"),
    status: "mock",
    badge: "secondary",
    stacks: stacks["logganStacks"],
  },
  {
    id: "nst",
    title: t("nst.title"),
    img: t("nst.img"),
    description: t("nst.description"),
    link: t("nst.link"),
    status: "done",
    badge: "primary",
    stacks: stacks["nstStacks"],
  },
  {
    id: "theea",
    title: t("theea.title"),
    img: t("theea.img"),
    description: t("theea.description"),
    link: t("theea.link"),
    status: "done",
    badge: "primary",
    stacks: stacks["theeaStacks"],
  },
  {
    id: "affix",
    title: t("affix.title"),
    img: t("affix.img"),
    description: t("affix.description"),
    link: t("affix.link"),
    status: "done",
    badge: "primary",
    stacks: stacks["affixStacks"],
  },
  {
    id: "hyphip",
    title: t("hyphip.title"),
    img: t("hyphip.img"),
    description: t("hyphip.description"),
    link: t("hyphip.link"),
    status: "done",
    badge: "primary",
    stacks: stacks["hyphipStacks"],
  },
  {
    id: "guess",
    title: t("guess.title"),
    img: "/images/guess.png",
    description: t("guess.description"),
    link: "https://devinelenombre.netlify.app",
    status: "done",
    badge: "primary",
    stacks: stacks["guessStacks"],
  },
  {
    id: "moyenne",
    title: t("moyenne.title"),
    img: "/images/moyenne.png",
    description: t("moyenne.description"),
    link: "https://mes-moyennes.netlify.app",
    status: "done",
    badge: "primary",
    stacks: stacks["moyenneStacks"],
  },
  {
    id: "ofaloo",
    title: t("ofaloo.title"),
    img: "/images/ofaloo.png",
    description: t("ofaloo.description"),
    link: "https://ofaloo.netlify.app",
    status: "done",
    badge: "primary",
    stacks: stacks["ofalooStacks"],
  },
  {
    id: "kcs",
    title: t("kcs.title"),
    img: "/images/kcs.png",
    description: t("kcs.description"),
    link: "https://kcshops.netlify.app",
    status: "mock",
    badge: "secondary",
    stacks: stacks["kcsStacks"],
  },
  {
    id: "waloo",
    title: t("waloo.title"),
    img: "/images/waloo.png",
    description: t("waloo.description"),
    link: "https://waloocom.netlify.app",
    status: "mock",
    badge: "secondary",
    stacks: stacks["walooStacks"],
  },
  {
    id: "pincasse",
    title: t("pincasse.title"),
    img: "/images/pincasse.png",
    description: t("pincasse.description"),
    link: "https://pincasse.netlify.app",
    status: "abandoned",
    badge: "error",
    stacks: stacks["pincasseStacks"],
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
    class="w-full flex flex-col gap-10 py-5 text-white/95 my-0 dark:!bg-default"
    :style="`background-color: ${color}`"
  >
    <WorkProject
      v-for="work in works"
      :key="'project-' + work.id"
      v-motion-slide-visible-once-bottom
      :work="work"
      class="self-center w-full max-w-[1080px] md:px-20 px-10"
      :class="{
        'pb-5': work.id !== 'pincasse'
      }"
    />
  </div>
</template>
