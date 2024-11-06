<script setup>
import { ref } from 'vue';
import ProductModal from './ProductModal.vue';

const props = defineProps({
  product: Object
});

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}
</script>

<template>
  <div class="product-item">
    <a @click="openModal" href="javascript:void(0)">
      <img :src="product.image" alt="Gambar produk" />
    </a>
    <div class="product-details">
      <p class="category">{{ product.category }}</p>
      <a @click="openModal" href="javascript:void(0)" class="product-name">{{ product.name }}</a>
    </div>

    <ProductModal v-if="showModal" :product="product" @close="showModal = false" />
  </div>
</template>

<style scoped>
.product-item {
  width: 200px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

.product-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-details {
  text-align: left;
}

.category {
  font-size: 14px;
  color: gray;
  margin-bottom: 4px;
}

.product-name {
  font-size: 16px;
  color: #2C9A9A;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.product-name:hover {
  color: #1B6B6B;
}
</style>
