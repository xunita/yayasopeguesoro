<script setup lang="ts"></script>
<template>
  <div
    class="min-md:w-5/6 max-w-[1080px] w-full md:px-0 lg:py-0 pt-15 px-10 self-center flex justify-center"
  >
    <div
      class="flex lg:flex-row flex-col lg:gap gap-10 items-center justify-center w-full"
    >
      <div class="flex flex-col gap-5 lg:w-full">
        <div class="flex flex-col gap-1.5">
          <span class="font-semibold">{{ $t("hiMyNameIs") }}</span>
          <span class="sm:text-6xl text-5xl font-bold">{{
            $t("nameContent")
          }}</span>
          <span class="font-semibold">{{
            $t("webSoftwareEngineerInFrance")
          }}</span>
        </div>
        <UButton
          size="xl"
          color="neutral"
          variant="outline"
          :ui="{
            base: 'w-fit ring-0 hover:!bg-transparent border-2 rounded-none cursor-pointer px-10 py-4',
          }"
          >{{ $t("getInTouch") }}</UButton
        >
      </div>
      <NuxtImg
        src="/images/yaya-bg-rmv-cut.png"
        :alt="$t('yayaImg')"
        :modifiers="{ roundCorner: '0:100' }"
        loading="lazy"
        width="512"
      />
    </div>
  </div>
</template>
