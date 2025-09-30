<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";
import { useDateFormat, useNow } from "@vueuse/core";
const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");
const state = reactive({
  title: undefined,
  name: undefined,
  time: formatted,
  email: undefined,
  password: undefined,
});

console.log(state.time);

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ name: "email", message: "Required" });
  if (!state.password) errors.push({ name: "password", message: "Required" });
  return errors;
};

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<template>
  <HomeBodySection :title="$t('contact')" :allSpace="true">
    <div class="self-center min-md:w-5/6 max-w-[1080px] w-full md:px-0 px-10 py-3">
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormField>

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </div>
  </HomeBodySection>
</template>
