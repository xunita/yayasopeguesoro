<script setup lang="ts">
const { locale } = useI18n();
const openDiploma = () => {
  window.open(
    "https://drive.google.com/file/d/1Xvy6JKb3fP8r4nwfpkNlMBOLk310icN0/view?usp=drivesdk",
    "_blank",
  );
};
const openCV = () => {
  window.open(
    locale.value === "en"
      ? "https://drive.google.com/file/d/18PFDYrAItxiyWJMLZxHljvSmp5ieOhuI/view?usp=drivesdk"
      : "https://drive.google.com/file/d/1SkEmwD1L4NypnDNYRerweS0kw8wx-jYm/view?usp=drivesdk",
    "_blank",
  );
};
</script>
<template>
  <div
    class="flex items-center max-[450px]:flex-col gap-4 w-full justify-center pt-10 my-10 border-t border-gray-200"
  >
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
    <UButton
      size="lg"
      icon="lucide:graduation-cap"
      color="neutral"
      variant="outline"
      :ui="{
        base: 'w-fit ring-0 hover:!bg-transparent border-2 rounded-none cursor-pointer px-5 py-2',
      }"
      @click="openDiploma"
      >{{ $t("diploma") }}</UButton
    >
  </div>
</template>
