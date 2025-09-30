<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Amazing Title",
  },
  className: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    class="flex flex-col gap-5 self-center min-md:w-5/6 max-w-[1080px] w-full md:px-0 px-10"
  >
    <div class="max-w-[1280px] w-full">
      <span class="text-4xl font-bold">{{ title.toUpperCase() }}</span>
    </div>
    <slot></slot>
  </div>
</template>
