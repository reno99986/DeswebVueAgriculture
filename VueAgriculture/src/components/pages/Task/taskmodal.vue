<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-content">
        <h3>{{ member.name }}</h3>
        <p>{{ member.description }}</p>
        <a :href="member.github" class="text-secondary">GitHub</a>
        <p><button @click="closeModal" class="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Close</button></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: Boolean,
      member: Object
    },
    methods: {
      closeModal() {
        this.$emit('close-modal'); 
      }
    }
  }
  </script>
  
  <style scoped>
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
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
  }
  </style>
  