<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Amazing Title",
  },
  type: {
    type: String,
    default: "experience",
  },
  className: {
    type: String,
    default: "",
  },
  allSpace: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div
    class="flex flex-col gap-5 self-center w-full pt-10"
    :class="{
      '': allSpace,
      'pt-10': type !=='contact',
      'min-md:w-5/6 max-w-[1080px] w-full md:px-0 px-10': !allSpace,
    }"
  >
    <div
      class="min-md:w-5/6 max-w-[1080px] w-full"
      :class="{
        'self-center md:px-0 px-10': allSpace,
        // 'px-0': !allSpace,
      }"
    >
      <span class="text-3xl font-bold">{{ title.toUpperCase() }}</span>
    </div>
    <slot></slot>
  </div>
</template>
