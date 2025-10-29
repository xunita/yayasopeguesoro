²<script setup lang="ts"></script>

<template>
  <UFooter
    class="min-md:w-2/6 max-w-[720px] w-full mx-auto border-t border-gray-200"
  >
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://www.x.com/yayasopegue"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/xunita"
        target="_blank"
        aria-label="GitHub"
      />
      <UButton
        icon="line-md:linkedin"
        color="neutral"
        variant="ghost"
        to="https://linkedin.com/in/sopoude"
        target="_blank"
        aria-label="LinkedIn"
      />
      <UButton
        icon="line-md:email"
        color="neutral"
        variant="ghost"
        to="https://linkedin.com/in/sopoude"
        target="_blank"
        aria-label="LinkedIn"
      />
    </template>
  </UFooter>
</template>
