<script setup lang="ts">
// Import your own locale definitions
import en from "@/../i18n/locales/en.json";
import fr from "@/../i18n/locales/fr.json";

// Define locale metadata for <ULocaleSelect>
const locales = [
  { code: "en", name: "English", ...en },
  { code: "fr", name: "Français", ...fr },
];

// i18n setup
const { locale, setLocale } = useI18n();

// v-model needs a computed for Ref
const selectedLocale = computed({
  get: () => locale.value,
  set: (val) => setLocale(val),
});
</script>

<template>
  <ULocaleSelect
    v-model="selectedLocale"
    class="cursor-pointer ring-0 border border-gray-200"
    :ui="{ item: 'cursor-pointer' }"
    :locales="locales"
    @update:model-value="setLocale($event)"
  />
</template>
