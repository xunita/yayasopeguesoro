<script setup lang="ts">
const props = defineProps({
  projet: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="flex flex-col space-y-2 text-sm">
    <div class="flex flex-col gap-1">
      <span class="text-muted">
        {{ projet.date ?? "??" }}
      </span>
      <span class="font-semibold">
        {{ projet.job ?? "??" }}
      </span>
      <div>{{ projet.description ?? "??" }}</div>
    </div>
    <div class="flex flex-col gap-2 font-semibold">
      <div
        v-for="stack in projet.stacks"
        :key="'stack-' + stack.id"
        class="flex gap-1"
      >
        <UIcon name="heroicons-solid:plus-sm" class="size-6 shrink-0" />
        <span class="flex-1"> {{ stack }}</span>
      </div>
    </div>
  </div>
</template>
