<script setup>
const props = defineProps({
  product: Object
});
</script>

<template>
  <div class="product-item">
    <img :src="product.image" alt="Gambar produk" />
    <h3>{{ product.name }}</h3>
    <a :href="product.waLink" target="_blank" class="whatsapp-link">Hubungi Penjual</a>
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
.whatsapp-link {
  display: inline-block;
  padding: 5px 10px;
  background-color: #377CFB;
  color: white;
  border-radius: 3px;
  text-decoration: none;
}
</style>
