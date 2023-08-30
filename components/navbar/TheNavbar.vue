<template>
  <nav id="MainLayout" class="w-full fixed z-40">
    <div id="TopMenu" class="w-full bg-[#fafafa] border-b md:block hidden">
      <ul
        class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px] mx-auto"
      >
        <li>Sell On AliExpress</li>
        <li>Cookie Preferences</li>
        <li>Help</li>
        <li>Buyer Protection</li>
        <li class="border-r-[transparent!important]">
          <Icon name="ic:sharp-install-mobile" size="17" /> App
        </li>
        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative flex items-center px-2.5 hover:text-[#ff4646] h-full cursor-pointer"
          :class="{ 'active-menu': isAccountMenu, 'deactivate-menu': !isAccountMenu }"
        >
          <Icon name="ph:user-thin" size="17" />
          Account
          <Icon name="mdi:chevron-down" size="15" class="ml-5" />
          <NavbarDropdown v-if="isAccountMenu" />
        </li>
      </ul>
    </div>
    <div id="MainHeader" class="flex items-center w-full bg-white">
      <div
        class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 max-auto"
      >
        <NuxtLink to="/" class="min-w-[170px]">
          <nuxt-img src="/images/AliExpress-logo.png" width="170"></nuxt-img>
        </NuxtLink>
        <div class="max-w-[700px] w-full md:block hidden">
          <div class="relative">
            <div class="flex items-center border-2 border-[#FF4646] rounded-md w-full">
              <input
                class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                placeholder="kitchen accessories"
                type="text"
                v-model="searchItem"
              />
              <Icon v-if="isSearching" name="eos-icons:loading" size="25" class="mr-2" />
              <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#ff4646]">
                <Icon name="ph:magnifying-glass" size="20" color="#FFF" />
              </button>
            </div>
            <div class="absolute bg-white max-w-[700px] h-auto w-full">
              <div v-if="false" class="p-1">
                <NuxtLink
                  to="/item/1"
                  class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                >
                  <div class="flex items-center">
                    <nuxt-img
                      class="rounded-md"
                      src="https://picsum.photos/id/82/300/300"
                      width="40"
                    ></nuxt-img>
                    <div class="truncate mx-2">TESTING</div>
                  </div>
                  <div class="truncate">$ 98.99</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/shoppingcart" class="flex items-center">
          <button
            class="relative hidden md:block"
            @mouseenter="isCartHover = true"
            @mouseleave="isCartHover = false"
          >
            <span
              class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#FF4646] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
            >
              0
            </span>
            <div class="min-w-[40px]">
              <Icon
                name="ph:shopping-cart-simple-light"
                size="33"
                :color="isCartHover ? '#FF4646' : ''"
              />
            </div>
          </button>
        </NuxtLink>
        <button
          @click="userStore.isMenuOverlay = true"
          class="block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200 md:hidden"
        >
          <Icon name="radix-icons:hamburger-menu" size="33" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isAccountMenu = ref(false);
const isSearching = ref(false);
const searchItem = ref("");
const isCartHover = ref(false);
</script>

<style lang="scss" scoped>
#TopMenu {
  li {
    &:not(:last-child) {
      @apply border-r border-r-gray-400;
    }
    @apply px-3 hover:text-[#ff4646] cursor-pointer;
  }
}

.active-menu {
  @apply bg-white border z-40;
  box-shadow: 0 0px 30px 5px rgba(0, 0, 0, 0.1);
}

.deactivate-menu {
  @apply border border-[#fafafa];
}
</style>
