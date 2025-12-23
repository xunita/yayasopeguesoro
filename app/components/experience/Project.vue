<script setup lang="ts">
const props = defineProps({
  projet: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="flex flex-col space-y-2">
    <div class="flex flex-col gap-1">
      <span class="font-semibold text-lg">
        {{ projet.label ?? "??" }}
      </span>
      <span class="text-muted text-sm">
        {{ projet.date ?? "??" }}
      </span>
      <span class="font-semibold">
        {{ projet.title ?? "??" }}
      </span>
      <div>{{ projet.description ?? "??" }}</div>
    </div>
    <div class="flex flex-col gap-2 font-semibold">
      <div
        v-for="stack in projet.stacks"
        :key="'stack-' + stack.id"
        class="flex gap-1 items-center"
      >
        <UIcon name="heroicons-solid:plus-sm" class="size-6" />
        <span> {{ stack }}</span>
      </div>
    </div>
  </div>
</template>
