<template>
  <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[40%]">
        <ImageModal
          v-if="currentImage"
          :src="currentImage"
          class="overflow-hidden min-h-[200px] xs:min-h-[400px] sm:min-h-[300px] lg:min-h-[470px]"
          rounded="lg"
          objectFit="cover"
          backdropHeightRatio="470"
          backdropWidthRatio="470"
        />
        <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
          <div v-for="image in images" class="images">
            <ImageModal
              @mouseover="currentImage = image"
              @click="currentImage = image"
              :class="currentImage === image ? 'border-[#FF5353]' : ''"
              :src="image"
              backdropHeightRatio="70"
              backdropWidthRatio="70"
              width="70"
              height="70"
              objectFit="cover"
              class="border-[3px] rounded-md overflow-hidden cursor-pointer text-[10px]"
              object="object-cover"
            />
          </div>
        </div>
      </div>

      <div class="md:w-[60%] max-h-full bg-white p-3 rounded-lg mt-7 md:mt-0 xl:h-[550px]">
        <div v-if="true">
          <p class="mb-2">Title</p>
          <p class="font-light text-[12px] mb-2">Description Section</p>
        </div>

        <div class="flex items-center pt-1.5">
          <span
            class="h-4 min-w-4 rounded-full p-[0.7rem] bg-[#FFD000] mr-2 relative flex items-center justify-center"
          >
            <Icon name="material-symbols:star-rounded" class="absolute" size="12" />
          </span>
          <p class="text-[#FF5353]">Extra 5% off</p>
        </div>

        <div class="flex items-center justify-start my-2">
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <span class="text-[13px] font-light ml-2">5 213 Reviews 1,000+ orders</span>
        </div>

        <div class="border-b" />

        <div class="flex items-center justify-start gap-2 my-2">
          <div class="text-xl font-bold">${{ priceComputed }}</div>
          <span
            class="bg-[#f5f5f5] border text-[#c08562] text-[9px] font-semibold px-1.5 rounded-sm"
            >70% off</span
          >
        </div>

        <p class="text-[#009a66] text-xs font-semibold pt-1">Free 11-day delivery over £8.28</p>
        <p class="text-[#009a66] text-xs font-semibold pt-1">Free Shipping</p>
        <div class="py-2" />

        <button
          @click="addToCart()"
          :disabled="isInCart"
          class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#ff851A] to-[#ffac2c]"
        >
          <div v-if="isInCart">Is Added</div>
          <div v-else>Add to Cart</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const route = useRoute();
let currentImage = ref(null);
const images = ref([
  "",
  "https://picsum.photos/id/212/800/800",
  "https://picsum.photos/id/233/800/800",
  "https://picsum.photos/id/165/800/800",
  "https://picsum.photos/id/99/800/800",
  "https://picsum.photos/id/144/800/800",
]);
const isInCart = computed(() => {
  let res = false;
  userStore.cart.forEach((prod) => {
    if (route.params.id == prod.id) {
      res = true;
    }
  });
  return res;
});

const priceComputed = computed(() => {
  return "26.40";
});

const addToCart = () => {
  alert("ADDED");
};

onMounted(() => {
  watchEffect(() => {
    currentImage.value = "https://picsum.photos/id/77/800/800";
    images.value[0] = "https://picsum.photos/id/77/800/800";
  });
});
</script>
