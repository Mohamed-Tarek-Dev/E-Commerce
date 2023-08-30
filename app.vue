<template>
  <div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]" />
  <Loading v-if="userStore.isLoading" />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const nuxtApp = useNuxtApp();
// const loading = ref(true);

nuxtApp.hook("page:start", () => {
  userStore.setLoading(true);
});
nuxtApp.hook("page:finish", () => {
  userStore.setLoading(false);
});
</script>
