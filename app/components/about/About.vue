<script setup lang="ts"></script>
<template>
  <HomeBodySection :title="$t('about')">
    <div class="flex flex-col gap-3 w-full">
      <div class="inline">
        <p class="inline">{{ $t("aboutFirstP1") }}</p>
        <ULink
          raw
          to="https://linkedin.com/in/sopoude"
          target="_blank"
          active-class="font-bold underline-none"
          ><p class="inline font-medium">
            {{ $t("aboutFirstP2") }}
          </p></ULink
        >
        <p class="inline">{{ $t("aboutFirstP3") }}</p>
      </div>
      <div class="inline">
        <p class="inline">{{ $t("aboutSecondP1") }}</p>
        <ULink
          raw
          to="https://www.3ds.com/3dexperience/"
          target="_blank"
          active-class="font-bold"
          ><p class="inline font-medium border-b-2">
            {{ $t("aboutSecondP2") }}
          </p></ULink
        >
        <p class="inline">{{ $t("aboutSecondP3") }}</p>
      </div>
      <p>{{ $t("aboutThirdP") }}</p>
      <p>{{ $t("aboutFourthP") }}</p>
      <p>{{ $t("aboutFithP") }}</p>
    </div>
  </HomeBodySection>
</template>
