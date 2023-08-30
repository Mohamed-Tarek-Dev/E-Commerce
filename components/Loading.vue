<template>
  <div
    class="fixed bg-black bg-opacity-40 inset-0 w-full h-full z-50 flex items-center justify-center h-[100vh overflow-hidden]"
  >
    <div class="p-3 rounded-md bg-black bg-opacity-20">
      <span class="loader block"></span>
      <div class="text-center pt-5 text-xl font-bold text-white">Loading...</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loader {
  width: 150px;
  height: 150px;
  background-color: #ff3d00;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5) inset, 0 5px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 45%;
  top: -40%;
  background-color: #fff;
  animation: wave 5s linear infinite;
}
.loader:before {
  border-radius: 30%;
  background: rgba(255, 255, 255, 0.4);
  animation: wave 5s linear infinite;
}
@keyframes wave {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
