<script setup>
import { ref, computed } from 'vue';
import MarketItem from '../../components/MarketItem.vue';

const categories = ['Semua', 'Ikan', 'Udang', 'Kepiting', 'Rumput Laut'];
const selectedCategory = ref('Semua');

const products = [
  { name: 'Ikan Tuna', category: 'Ikan', image: 'link-gambar', waLink: 'https://wa.me/nomor1' },
  { name: 'Ikan Kerapu', category: 'Ikan', image: 'link-gambar', waLink: 'https://wa.me/nomor2' },
  { name: 'Ikan Kakap Merah', category: 'Ikan', image: 'link-gambar', waLink: 'https://wa.me/nomor3' },
  { name: 'Ikan Tenggiri', category: 'Ikan', image: 'link-gambar', waLink: 'https://wa.me/nomor4' },
  { name: 'Ikan Cakalang', category: 'Ikan', image: 'link-gambar', waLink: 'https://wa.me/nomor5' },
  { name: 'Udang Vannamei', category: 'Udang', image: 'link-gambar', waLink: 'https://wa.me/nomor6' },
  { name: 'Lobster', category: 'Udang', image: 'link-gambar', waLink: 'https://wa.me/nomor7' },
  { name: 'Udang Galah', category: 'Udang', image: 'link-gambar', waLink: 'https://wa.me/nomor8' },
  { name: 'Kepiting Rajungan', category: 'Kepiting', image: 'link-gambar', waLink: 'https://wa.me/nomor9' },
  { name: 'Kepiting Bakau', category: 'Kepiting', image: 'link-gambar', waLink: 'https://wa.me/nomor10' },
  { name: 'Rumput Laut Segar', category: 'Rumput Laut', image: 'link-gambar', waLink: 'https://wa.me/nomor11' },
  { name: 'Rumput Laut Hijau', category: 'Rumput Laut', image: 'link-gambar', waLink: 'https://wa.me/nomor12' },
];

const filteredProducts = computed(() => {
  return selectedCategory.value === 'Semua'
    ? products
    : products.filter(product => product.category === selectedCategory.value);
});

function filterCategory(category) {
  selectedCategory.value = category;
}
</script>

<template>
  <!-- Header Section -->
  <div class="text-center bg-[#377CFB] text-white py-10 px-4">
  <h1 class="text-4xl font-bold">Hasil Tangkapan</h1>
  <p class="mt-2 max-w-2xl mx-auto">
    Rasakan Kesegaran Sejati dari Laut! Dapatkan Hasil Laut Berkualitas Tinggi dengan Harga Terjangkau, Langsung dari Nelayan Lokal untuk Anda. Pilih, Pesan, dan Nikmati Hasil Tangkapan Segar yang Dijamin Lebih Nikmat!
  </p>
  </div>


  <!-- Filter Buttons -->
  <div class="flex justify-center space-x-4 mt-8 overflow-x-auto">
    <button 
      v-for="category in categories" 
      :key="category" 
      @click="filterCategory(category)"
      :class="['py-2 px-4 rounded-full', selectedCategory === category ? 'bg-[#377CFB] text-white' : 'bg-gray-200']">
      {{ category }}
    </button>
  </div>

  <!-- Product Grid -->
  <div class="product-grid mt-8">
    <MarketItem
      v-for="(product, index) in filteredProducts"
      :key="index"
      :product="product"
    />
  </div>
</template>

<style scoped>
.product-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
