<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";
import { useDateFormat, useNow } from "@vueuse/core";
import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isEmail";
const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");
const sending = ref(false);
const { t } = useI18n();
const state = reactive({
  title: undefined,
  name: undefined,
  email: undefined,
  message: undefined,
  time: formatted,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ name: "email", message: t("required") });
  if (!state.message) errors.push({ name: "message", message: t("required") });
  if (state.email && !isEmail(state.email))
    errors.push({ name: "email", message: t("emailInvalid") });
  return errors;
};

const toast = useToast();
const onSubmit = async (event: FormSubmitEvent<typeof state>) => {
  const config = useRuntimeConfig();
  const YOUR_TEMPLATE_ID = config.public.YOUR_TEMPLATE_ID;
  const YOUR_SERVICE_ID = config.public.YOUR_SERVICE_ID;
  const YOUR_PUBLIC_KEY = config.public.YOUR_PUBLIC_KEY;
  //
  toast.clear();
  sending.value = true;
  emailjs
    .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, event.data, {
      publicKey: YOUR_PUBLIC_KEY,
    })
    .then(
      (response) => {
        toast.add({
          description: t("messageSent"),
          color: "neutral",
        });
        //
        state.title = undefined;
        state.name = undefined;
        state.email = undefined;
        state.message = undefined;
      },
      (err) => {
        toast.add({
          description: t("errorSending"),
          color: "error",
        });
      }
    )
    .finally(() => {
      sending.value = false;
    });
};
</script>

<template>
  <HomeBodySection :title="$t('contact')" :allSpace="true">
    <div
      class="self-center min-md:w-2/6 max-w-[1080px] w-full md:px-0 px-10 py-5"
    >
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4 w-full"
        @submit="onSubmit"
      >
        <UFormField :label="$t('object')" name="title" class="w-full">
          <UInput
            v-model="state.title"
            color="neutral"
            class="w-full"
            :ui="{
              base: 'rounded-none',
            }"
          />
        </UFormField>
        <UFormField :label="$t('nameContact')" name="name" class="w-full">
          <UInput
            v-model="state.name"
            color="neutral"
            class="w-full"
            :ui="{
              base: 'rounded-none',
            }"
          />
        </UFormField>
        <UFormField label="Email" name="email" class="w-full" required>
          <UInput
            v-model="state.email"
            color="neutral"
            class="w-full"
            :ui="{
              base: 'rounded-none',
            }"
          />
        </UFormField>
        <UFormField label="Message" name="message" class="w-full" required>
          <UTextarea
            v-model="state.message"
            color="neutral"
            :rows="8"
            :placeholder="$t('typeSomething')"
            class="w-full"
            :ui="{
              base: 'rounded-none',
            }"
          />
        </UFormField>

        <UButton
          :disabled="sending"
          size="xl"
          color="neutral"
          variant="outline"
          :ui="{
            base: 'w-fit ring-0 hover:!bg-transparent border-2 rounded-none cursor-pointer px-10 py-4',
          }"
          type="submit"
        >
          {{ $t("send") }}
        </UButton>
      </UForm>
    </div>
  </HomeBodySection>
</template>
