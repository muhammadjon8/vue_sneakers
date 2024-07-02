<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggle-like"]);

const handleLike = () => {
  emit("toggle-like", props.product.id);
};
</script>

<template>
  <div class="p-10 border rounded-3xl shadow-md hover:scale-105 duration-300">
    <button :class="{ liked: product.liked }" @click="handleLike">
      {{ product.liked ? "❤️" : "🤍" }}
    </button>
    <img :src="product.image" alt="" />
    <div class="py-2 h-20">
      <p class="font-normal">{{ product.description }}</p>
    </div>
    <div class="flex justify-between">
      <div>
        <p class="text-[#BDBDBD]">Цена:</p>
        <p class="text-[14px] font-bold leading-[16px]">
          {{ product.price }} руб.
        </p>
      </div>
      <button class="border p-2 rounded">
        <span
          class="icon-[ic--sharp-plus]"
          style="width: 14px; height: 14px; color: black"
        ></span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
