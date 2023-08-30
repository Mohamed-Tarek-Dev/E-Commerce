<template>
  <div>{{ data }}</div>
</template>

<script setup>
let data = ref(null);
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => {
    data.value = json;
    console.log(data);
  });

import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const nuxtApp = useNuxtApp();
// // const loading = ref(true);

nuxtApp.hook("page:start", () => {
  userStore.setLoading(true);
});
nuxtApp.hook("page:finish", () => {
  userStore.setLoading(false);
});
</script>
