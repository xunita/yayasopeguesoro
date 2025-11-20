<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "size-15",
  },
});
</script>
<template>
  <UIcon name="lucide:arrow-down-left" :class="size" class="dark:!text-white" />
</template>
