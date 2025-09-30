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
</script>
<template>
  <div class="flex lg:flex-row flex-col items-center gap-10">
    <div class="flex flex-col gap-4">
      <span class="font-bold text-3xl">
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
    <NuxtImg
      target="_blank"
      :src="work.img ?? '/images/notfound.png'"
      :alt="$t(`${work.id}.title`)"
      fit="cover"
      class="rounded-lg border-2 border-white-700 cursor-pointer"
      loading="lazy"
      width="624"
      height="351"
      @click="openLink"
    />
  </div>
</template>
