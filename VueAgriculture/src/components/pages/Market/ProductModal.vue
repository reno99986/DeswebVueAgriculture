<script setup>
const props = defineProps({
  product: Object
});

const emit = defineEmits(['close']);
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="emit('close')">X</button>
      <img :src="product.image" alt="Gambar produk" class="modal-image" />
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">Harga: Rp {{ product.price }}</p>
      <a :href="product.waLink" target="_blank" class="chat-btn">Chat Now</a>
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
