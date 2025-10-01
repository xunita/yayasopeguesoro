<script setup lang="ts"></script>
<template>
  <div class="w-full relative pb-5">
    <HomeHeaderBody />
    <div class="space-y-25 flex flex-col w-full">
      <div
        id="about"
        v-motion-slide-visible-once-bottom
        class="w-full flex justify-center scroll-mt-15"
      >
        <About />
      </div>
      <div
        id="experience"
        v-motion-slide-visible-once-bottom
        class="w-full flex justify-center scroll-mt-15 border-t border-gray-200"
      >
        <Experience />
      </div>
      <div
        id="projects"
        v-motion-slide-visible-once-bottom
        class="w-full flex justify-center scroll-mt-15 border-t border-gray-200"
      >
        <Work />
      </div>
      <div
        id="contact"
        v-motion-slide-visible-once-bottom
        class="w-full flex justify-center scroll-mt-15"
      >
        <Contact />
      </div>
    </div>
    <Resume v-motion-slide-visible-once-bottom />
    <HomeFooter />
  </div>
</template>
