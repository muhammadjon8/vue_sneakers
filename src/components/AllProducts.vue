<script setup>
import { ref, onMounted, computed } from "vue";
import ProductCard from "./ProductCard.vue";

const data = ref([]);
const likedProducts = ref(
  JSON.parse(localStorage.getItem("likedProducts")) || []
);
const showFavourites = ref(false);

// Sample fetch function to simulate API call
const fetchProducts = () => {
  return Promise.resolve([
    {
      id: 1,
      price: 12999,
      image: "/product images/1.png",
      description: "Мужские Кроссовки Nike Blazer Mid Suede",
    },
    {
      id: 2,
      price: 12999,
      image: "/product images/2.png",
      description: "Мужские Кроссовки Nike Air Max 270",
    },
    {
      id: 3,
      price: 8499,
      image: "/product images/3.png",
      description: "Мужские Кроссовки Nike Blazer Mid Suede",
    },
    {
      id: 4,
      price: 8999,
      image: "/product images/4.png",
      description: "Кроссовки Puma X Aka Boku Future Rider",
    },
    {
      id: 5,
      price: 15199,
      image: "/product images/5.png",
      description: "Мужские Кроссовки Under Armour Curry 8",
    },
    {
      id: 6,
      price: 11299,
      image: "/product images/6.png",
      description: "Мужские Кроссовки Nike Kyrie 7",
    },
    {
      id: 7,
      price: 10799,
      image: "/product images/7.png",
      description: "Мужские Кроссовки Jordan Air Jordan 11",
    },
    {
      id: 8,
      price: 16499,
      image: "/product images/8.png",
      description: "Мужские Кроссовки Nike LeBron XVIII",
    },
    {
      id: 9,
      price: 13999,
      image: "/product images/9.png",
      description: "Мужские Кроссовки Nike Lebron XVIII Low",
    },
    {
      id: 10,
      price: 8499,
      image: "/product images/10.png",
      description: "Мужские Кроссовки Nike Blazer Mid Suede",
    },
    {
      id: 11,
      price: 8999,
      image: "/product images/11.png",
      description: "Кроссовки Puma X Aka Boku Future Rider",
    },
    {
      id: 12,
      price: 11299,
      image: "/product images/12.png",
      description: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    },
  ]);
};

const searchQuery = ref("");
const filteredProducts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return (showFavourites.value ? likedProducts.value : data.value).filter(
    (product) => product.description.toLowerCase().includes(query)
  );
});

onMounted(async () => {
  const products = await fetchProducts();
  data.value = products.map((product) => ({
    ...product,
    liked: likedProducts.value.some((p) => p.id === product.id), // Initialize liked state from localStorage
  }));
});

const toggleLike = (productId) => {
  const product = data.value.find((p) => p.id === productId);
  if (product) {
    product.liked = !product.liked;
    if (product.liked) {
      likedProducts.value.push(product);
    } else {
      likedProducts.value = likedProducts.value.filter(
        (p) => p.id !== productId
      );
    }
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts.value));
  }
};

const toggleView = () => {
  showFavourites.value = !showFavourites.value;
};
</script>

<template>
  <div>
    <div class="flex justify-between items-center py-4">
      <h3 class="text-3xl font-bold">
        {{ showFavourites ? "Избранные кроссовки" : "Все кроссовки" }}
      </h3>
      <button class="border p-2 rounded hover:bg-green-400" @click="toggleView">
        {{ showFavourites ? "Показать все" : "Избранное" }}
      </button>
      <div class="flex items-center border border-[#F3F3F3] rounded-xl p-2">
        <span
          class="icon-[ic--baseline-search] px-4"
          style="width: 24px; height: 24px; color: #9b9b9b"
        ></span>
        <input
          type="text"
          class="outline-none px-2"
          v-model="searchQuery"
          placeholder="Search products..."
        />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @toggle-like="toggleLike"
      />
    </div>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
