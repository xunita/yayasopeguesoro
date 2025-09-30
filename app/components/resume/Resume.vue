<script setup lang="ts">
const { locale } = useI18n();
const openCV = () => {
  window.open(
    locale.value === "en"
      ? "https://drive.google.com/file/d/15ef4rb-prbeNF5FRt9PF9mrrSO3NhG_t/view?usp=drive_link"
      : "https://drive.google.com/file/d/1gxkaAqbmewylEDmoQe9sTSB-FPNGDyDT/view?usp=drive_link",
    "_blank"
  );
};
</script>
<template>
  <div class="flex w-full justify-center pt-10 my-10 border-t border-gray-100">
    <UButton
      size="lg"
      icon="ph:read-cv-logo-fill"
      color="neutral"
      variant="outline"
      :ui="{
        base: 'w-fit ring-0 hover:!bg-transparent border-2 rounded-none cursor-pointer px-5 py-2',
      }"
      @click="openCV"
      >{{ $t("cv") }}</UButton
    >
  </div>
</template>
