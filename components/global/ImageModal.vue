<template>
  <div
    class="relative flex justify-center items-center"
    :class="{ 'loader-container': isLoading || error, [roundedClass]: true }"
  >
    <div :class="{ 'show-loader': isLoading, hide: !isLoading }" class="loader"></div>
    <span
      v-if="isLoading || error"
      :style="{
        'min-height': backdropHeightRatio ? `${backdropHeightRatio}px` : '',
        'min-width': backdropWidthRatio ? `${backdropWidthRatio}px` : '',
      }"
      class="w-full h-full bg-wite opacity-0"
    ></span>
    <nuxt-img
      :class="{
        show: !isLoading,
        hide: isLoading,
        hidden: error,
        [roundedClass]: true,
        [objectClass]: true,
      }"
      :src="src"
      :width="width"
      :height="height"
      loading="lazy"
      @load="onImageLoad()"
      @error="onImageError"
    />
    <p v-if="!isLoading && error" class="error absolute text-red-600 font-extrabold text-center">
      404 <br />
      image not found
    </p>
  </div>
</template>

<script setup>
const props = defineProps([
  "src",
  "width",
  "height",
  "rounded",
  "backdropHeightRatio",
  "backdropWidthRatio",
  "objectFit",
]);

const isLoading = ref(true);
const error = ref(false);

const onImageLoad = () => {
  isLoading.value = false;
};

const onImageError = () => {
  isLoading.value = false;
  error.value = true;
};

const roundedClass = computed(() => {
  if (props.rounded) {
    return `rounded-${props.rounded}`;
  } else {
    return "";
  }
});
const objectClass = computed(() => {
  if (props.objectFit) {
    return `object-${props.objectFit}`;
  } else {
    return "";
  }
});
</script>

<style lang="scss" scoped>
.loader-container {
  background-color: rgba(37, 43, 72, 0.8);
}
.hide {
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  width: 0;
}

.show {
  opacity: 1;
  visibility: visible;
  z-index: 1;
  width: 100%;
}

.show-loader {
  opacity: 1;
  visibility: visible;
  z-index: 2;
}

.error {
  filter: drop-shadow(0px 0px 10px red);
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #fff #fff transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  transition: all 0.3s ease;
  position: absolute;
}

.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent transparent #ff3d00 #ff3d00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

.loader::before {
  width: 32px;
  height: 32px;
  border-color: #fff #fff transparent transparent;
  animation: rotation 1.5s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
