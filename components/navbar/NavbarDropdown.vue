<template>
  <div
    id="AccountMenu"
    class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[102px] border-x border-b"
  >
    <div v-if="true" class="border-b">
      <div class="text-bold text-[15px] my-4 px-3">Welcome to MarketSphere</div>
      <div class="flex items-center gap-1 px-3 mb-3">
        <NuxtLink to="/auth" class="link">Login / Register</NuxtLink>
      </div>
    </div>
    <div>
      <ul>
        <li @click="navigateTo('/orders')" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">
          My Orders
        </li>
      </ul>
    </div>
    <div v-if="true" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">Sign out</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#AccountMenu {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);

  .link {
    @apply bg-[#ff4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2;
  }
}
</style>
