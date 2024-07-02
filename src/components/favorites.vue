<script setup>
import ProductCard from "./ProductCard.vue";
import { defineProps } from "vue";

const props = defineProps({
  products: Array,
});

</script>

<template>
  <div>
    <div class="container">
      <h1 class="text-center">Favorites</h1>
      <ProductCard :products="props.products" />
    </div>
  </div>
</template>

<style scoped></style>
