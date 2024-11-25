<script setup>
const props = defineProps({
  product: Object
});

const emit = defineEmits(['close']);
</script>

<template>
  <div 
    class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click.self="$emit('close')"
  >
    <div 
      class="modal-content bg-white rounded-lg shadow-lg p-6 relative xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
    >
      <button 
        class="close-btn absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        @click="$emit('close')"
      >
        ✕
      </button>

      <div 
        class="modal-image-container grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-rows-1 gap-4 p-4"
      >
        <img 
          :src="product.image" 
          alt="Gambar produk" 
          class="modal-image w-full h-auto rounded-md"
        />
      </div>

      <p 
        class="product-description text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 mt-4"
      >
        {{ product.description }}
      </p>

      <p 
        class="product-price text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-600 mt-2"
      >
        Harga: Rp {{ product.price }}
      </p>

      <a 
        :href="product.waLink" 
        target="_blank" 
        class="chat-btn block text-center mt-6 py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
      >
        Chat Now
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@tailwind utilities;

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f44336;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.close-btn:hover {
  background-color: #e53935;
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 15px;
}

.product-description {
  margin: 10px 0;
  font-size: 14px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
}

.chat-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #377CFB;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.chat-btn:hover {
  background-color: #2a5bb3;
}
</style>
