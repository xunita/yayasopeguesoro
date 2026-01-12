<script setup lang="ts">
const { locale } = useI18n();
const openCV = () => {
  window.open(
    locale.value === "en"
      ? "https://drive.google.com/file/d/16pi88e9zNLjT43V8M80kQoNaYf5JPlwY/view?usp=drivesdk"
      : "https://drive.google.com/file/d/1jAfjT1BDYnT5qefUwgU09y3bXzM40NFC/view?usp=drivesdk",
    "_blank"
  );
};
</script>
<template>
  <div class="flex w-full justify-center pt-10 my-10 border-t border-gray-200">
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
