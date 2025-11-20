<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "size-15",
  },
});
</script>
<template>
  <UIcon name="sopegue-icon:logo" :class="dark:text-white" />
</template>
