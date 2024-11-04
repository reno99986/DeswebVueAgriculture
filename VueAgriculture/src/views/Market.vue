<script setup>
import MarketItem from '../components/pages/Market/MarketItem.vue';
import { ref, computed } from 'vue';

const categories = [
  'Semua', 'Ikan', 'Udang', 'Kepiting', 'Rumput Laut',
  'Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4',
  'Kategori 5', 'Kategori 6', 'Kategori 7', 'Kategori 8', 'Kategori 9'
];
const selectedCategory = ref('Semua');

const products = [
  { name: 'Ikan Tuna Segar', category: 'Ikan', image: 'link-gambar', waLink: 'https://wa.me/nomor1' },
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
  { name: 'Rumput Laut Hijau', category: 'Rumput Laut', image: 'link-gambar', waLink: 'https://wa.me/nomor12' }
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
      Rasakan Kesegaran Sejati dari Laut! Dapatkan Hasil Laut Berkualitas Tinggi dengan Harga Terjangkau, Langsung dari
      Nelayan Lokal untuk Anda. Pilih, Pesan, dan Nikmati Hasil Tangkapan Segar yang Dijamin Lebih Nikmat!
    </p>
  </div>

  <!-- Main Container -->
  <div class="container mx-auto px-4">
    <!-- Filter Buttons with Visible Scrollbar -->
    <div class="relative mt-8 px-4">
      <div class="flex space-x-4 overflow-x-auto px-4 categories-container">
        <button v-for="category in categories" :key="category" @click="filterCategory(category)"
          :class="['py-1 px-6 rounded-full whitespace-nowrap', selectedCategory.value === category ? 'bg-[#377CFB] text-white' : 'bg-gray-200']">
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="product-grid mt-8">
      <MarketItem v-for="(product, index) in filteredProducts" :key="index" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  /* Atur lebar container */
}

.product-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Styling untuk membuat button kategori lebih pipih */
button {
  font-size: 14px;
  padding: 8px 12px;
}

/* Styling untuk scrollbar yang terlihat */
.categories-container {
  scrollbar-color: #377CFB #e0e0e0;
  /* Warna thumb dan track scrollbar */
  scrollbar-width: thin;
  /* Untuk Firefox */
  overflow-y: hidden;
  /* Hanya scrollbar horizontal */
  padding-bottom: 10px;
  /* Spasi untuk scrollbar */
}

/* Scrollbar Styling for Chrome, Safari, and Edge */
.categories-container::-webkit-scrollbar {
  height: 8px;
}

.categories-container::-webkit-scrollbar-track {
  background: #e0e0e0;
  /* Warna background track */
  border-radius: 8px;
}

.categories-container::-webkit-scrollbar-thumb {
  background-color: #377CFB;
  /* Warna thumb */
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  /* Margin sekitar thumb */
}
</style>
