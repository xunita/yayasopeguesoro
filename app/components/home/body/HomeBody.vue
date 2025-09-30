<script setup lang="ts"></script>
<template>
  <div class="w-full relative pb-15">
    <HomeHeaderBody />
    <div class="space-y-25 flex flex-col w-full">
      <div
        id="about"
        v-motion-slide-visible-once-bottom
        class="w-full flex justify-center pt-15 scroll-mt-25"
      >
        <About />
      </div>
      <div
        id="experience"
        v-motion-slide-visible-once-bottom
        class="w-full flex justify-center pt-15 scroll-mt-25 border-t border-gray-100"
      >
        <Experience />
      </div>
    </div>
  </div>
</template>
