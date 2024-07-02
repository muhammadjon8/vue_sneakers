<script setup></script>

<template>
  <div class="pb-10">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2 cursor-pointer">
        <img src="/logo.png" alt="" class="w-10 h-10" />
        <div class="">
          <h2 class="brand_name text-2xl font-bold">Vue Sneakers</h2>
          <p class="font-normal text-[#9D9D9D] text-[14px]">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div class="flex gap-9 items-center cursor-pointer">
        <div class="flex gap-2 items-center">
          <span
            class="icon-[solar--cart-large-2-outline]"
            style="width: 24px; height: 24px; color: #9b9b9b"
          ></span>
          <p class="text-[#9b9b9b] text-[18px]">1205 руб.</p>
        </div>
        <div class="flex gap-2 items-center">
          <span
            class="icon-[ph--heart-bold]"
            style="width: 24px; height: 24px; color: #9b9b9b"
          ></span>
          <p class="text-[#9b9b9b] text-[18px]">Закладки</p>
        </div>
        <div class="flex gap-2 items-center cursor-pointer">
          <span class="icon-[ri--account-circle-line]" style="width: 24px; height: 24px; color: #9B9B9B;"></span>
          <p class="text-[#9b9b9b] text-[18px]">Профиль</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brand_name {
  font-family: "Playwrite IT Moderna";
}
</style>
