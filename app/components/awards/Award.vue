<script setup lang="ts">
const props = defineProps({
  award: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="flex flex-col space-y-2">
    <div class="flex flex-col gap-1">
      <span class="text-muted text-sm">
        {{ award.date ?? "??" }}
      </span>
      <div>{{ award.description ?? "??" }}</div>
    </div>
    <NuxtImg
      target="_blank"
      :src="award.img ?? '/images/notfound.png'"
      :alt="award.title"
      fit="cover"
      class="border-2 border-gray-300 max-w-[300px] max-h-[300px] w-full h-auto"
      loading="lazy"
      width="1248"
      height="702"
    />
  </div>
</template>
