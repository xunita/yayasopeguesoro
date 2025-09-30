<script setup lang="ts">
import { en, fr } from "@nuxt/ui/locale";
const locales = { fr, en };
const { locale, setLocale } = useI18n();
</script>

<template>
  <ULocaleSelect
    v-model="locale"
    class="cursor-pointer ring-0 border border-gray-100"
    :ui="{ item: 'cursor-pointer' }"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
