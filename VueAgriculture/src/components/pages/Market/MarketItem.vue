<script setup>
import { ref } from 'vue';
import ProductModal from './ProductModal.vue';

const props = defineProps({
  product: Object
});

const showModal = ref(false);

// function openModal() {
//   showModal.value = true;
// }

function closeModal() {
  showModal.value = false;
}
</script>

<template>  
  <div
    class="product-item p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-10"
  >
    <a @click="openModal" href="javascript:void(0)" class="block group">
      <img
        :src="product.image"
        alt="Gambar produk"
        class="w-full h-auto rounded-lg shadow-md transform group-hover:scale-105 transition duration-300"
      />
    </a>

    <div
      class="product-details mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 2xl:mt-10 text-center md:text-left"
    >
      <p
        class="category text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-semibold uppercase tracking-wide"
      >
        {{ product.category }}
      </p>
      <a
        @click="openModal"
        href="javascript:void(0)"
        class="product-name text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-800 hover:text-blue-500 transition"
      >
        {{ product.name }}
      </a>
    </div>

    <!-- Modal Component -->
    <ProductModal
      v-if="showModal"
      :product="product"
      @close="closeModal"
      class="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    />
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
