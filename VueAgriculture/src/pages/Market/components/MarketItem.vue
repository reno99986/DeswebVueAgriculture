<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  product: Object
});
</script>

<template>
  <div class="product-item">
    <!-- Tambahkan link pada gambar untuk menuju ke WhatsApp -->
    <a :href="product.waLink" target="_blank">
      <img :src="product.imageSrc" alt="Gambar produk" />
    </a>
    <div class="product-details">
      <!-- Tampilkan kategori tanpa fungsi klik -->
      <p class="category">{{ product.category }}</p>
      <!-- Tampilkan nama produk sebagai deskripsi yang bisa diklik -->
      <a :href="product.waLink" target="_blank" class="product-name">{{ product.name }}</a>
    </div>
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
