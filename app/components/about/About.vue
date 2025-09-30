<script setup lang="ts"></script>
<template>
  <HomeBodySection :title="$t('about')">
    <p class="font-medium">{{ $t("aboutFirstP") }}</p>
    <div class="inline">
      <p class="inline font-medium">{{ $t("aboutSecondP1") }}</p>
      <ULink
        raw
        to="https://www.3ds.com/3dexperience/"
        target="_blank"
        active-class="font-bold"
        ><p class="inline font-medium border-b-2">
          {{ $t("aboutSecondP2") }}
        </p></ULink
      >
      <p class="inline font-medium">{{ $t("aboutSecondP3") }}</p>
    </div>
    <p class="font-medium">{{ $t("aboutThirdP") }}</p>
    <p class="font-medium">{{ $t("aboutFourthP") }}</p>
    <p class="font-medium">{{ $t("aboutFithP") }}</p>
  </HomeBodySection>
</template>
