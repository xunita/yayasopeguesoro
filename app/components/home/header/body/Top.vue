<script setup lang="ts"></script>
<template>
  <div class="self-center min-md:w-5/6 max-w-[1920px] w-full border-0">
    <UHeader
      mode="slideover"
      :ui="{
        root: 'bg-transparent yss-header',
        header: 'self-center w-full px-5 py-10 border-0',
        toggle: 'cursor-pointer',
      }"
      class="border-0 md:px-0 px-5 py-15 "
    >
      <template #title>
        <HomeHeaderPartsLeft />
      </template>
      <template #right>
        <div v-motion-slide-visible-right class="lg:block hidden">
          <HomeHeaderPartsRight />
        </div>
      </template>
      <template #body>
        <HomeHeaderPartsMenuList
          class="flex flex-col gap-5 w-fit"
          list-class="w-fit"
          orientation="vertical"
        />
      </template>
    </UHeader>
  </div>
</template>
