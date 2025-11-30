<script setup lang="ts">
const props = defineProps({
  work: {
    type: Object,
    default: () => ({}),
  },
});

const openLink = () => {
  window.open(props.work.link ?? "#", "_blank");
};
const loadFallbackImg = (event) => {
  event.target.src = "/images/project_fallback.jpg";
};
</script>
<template>
  <div class="flex lg:flex-row flex-col lg:items-center gap-10">
    <div class="flex flex-col gap-4">
      <span class="font-bold text-2xl">
        {{ work.title.toUpperCase() ?? "??" }}
      </span>
      <div>{{ work.description ?? "??" }}</div>
      <div class="flex flex-col gap-2 font-semibold">
        <span class="font-bold">{{ $t("devTools").toUpperCase() }}</span>
        <div
          v-for="stack in work.stacks"
          :key="'stack-' + stack.id"
          class="flex gap-1 items-center font-normal"
        >
          <UIcon name="heroicons-solid:plus-sm" class="size-6" />
          <span> {{ stack }}</span>
        </div>
      </div>
      <UButton
        :to="work.link ?? '#'"
        target="_blank"
        size="xl"
        color="neutral"
        variant="outline"
        :ui="{
          base: 'w-fit ring-0 bg-transparent border-2 border-white text-white hover:bg-transparent active:text-black rounded-none cursor-pointer px-10 py-4',
        }"
        >{{ $t("viewProject") }}</UButton
      >
    </div>

    <div class="relative">
      <UBadge 
        v-if="work.status" 
        size="md" 
        :color="work.badge" 
        variant="solid" 
        class="text-white absolute top-2 right-2"
        :class="{'bg-default border border-default text-default': work.status === 'paused' }">
        {{ $t(work.status) }}
      </UBadge>
      <NuxtImg
      v-if="!work.iframe"
      target="_blank"
      :src="work.img ?? '/images/notfound.png'"
      :alt="$t(`${work.id}.title`)"
      fit="cover"
      class="rounded-lg border-2 border-white-700 cursor-pointer"
      loading="lazy"
      width="624"
      height="351"
      @error="loadFallbackImg"
      @click="openLink"
    />
    <iframe
      v-else
      :src="
        work.iframe_link ??
        'https://www.youtube-nocookie.com/embed/0gmXsyyDDnU?si=pDSzchUBDKb2NQu7'
      "
      class="rounded-lg border-2 border-white-700 cursor-pointer max-w-[624px] max-h-[351px] w-full h-full"
      :title="work.title ?? 'Youtube video'"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      style="aspect-ratio: 16/9; width: 100%"
    ></iframe>
    </div>
  </div>
</template>
