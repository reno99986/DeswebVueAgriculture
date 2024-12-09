<!-- <template>
    <header class="bg-blue-600 text-white p-4">
      <nav class="container mx-auto flex justify-between">
        <h1 class="text-xl font-bold">Profil Pengembang</h1>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template> -->
  
  <!-- <script>
  export default {
    name: 'Header'
  }
  </script> -->
  
  <style scoped>
  </style>
<template>
    <div class="card">
      <img :src="image" alt="Card image" class="card-image" />
      <div class="card-content">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
        <button @click="handleClick" class="card-button">Learn More</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    },
    methods: {
      handleClick() {
        alert(`You clicked on ${this.title}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    max-width: 300px;
    margin: 20px;
  }
  
  .card-image {
    width: 100%;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .card-description {
    font-size: 1em;
    margin-bottom: 20px;
  }
  
  .card-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .card-button:hover {
    background-color: #0056b3;
  }
  </style>


<template>
    <div class="bg-white shadow-md rounded-lg p-4 m-4">
      <img :src="photo" alt="Profile Photo" class="rounded-full w-32 h-32 mx-auto" />
      <h2 class="text-lg font-semibold text-center mt-2">{{ name }}</h2>
      <p class="text-center text-gray-600">{{ role }}</p>
      <p class="text-center text-gray-500">{{ mainTech }}</p>
      <button @click="showModal" class="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Detail</button>
  
      <modal v-if="isModalOpen" @close="isModalOpen = false" :description="description" :socialLinks="socialLinks"/>
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue';
  
  export default {
    name: 'ProfileCard',
    components: { Modal },
    props: {
      photo: String,
      name: String,
      role: String,
      mainTech: String,
      description: String,
      socialLinks: Array
    },
    data() {
      return {
        isModalOpen: false
      };
    },
    methods: {
      showModal() {
        this.isModalOpen = true;
      }
    }
  }
  </script>
  
  <style scoped>
  </style>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
        <h2 class="text-lg font-bold">Detail Anggota Tim</h2>
        <p>{{ description }}</p>
        <div class="mt-4">
          <h3 class="font-semibold">Sosial Media:</h3>
          <div class="flex space-x-4">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" class="text-blue-600 hover:underline">
              {{ link.name }}
            </a>
          </div>
        </div>
        <button @click="$emit('close')" class="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
      description: String,
      socialLinks: Array
    }
  }
  </script>
  
  <style scoped>
  </style>