<template>
    <div class="card">
      <img :src="member.photo" alt="Profile Picture" />
      <h3>{{ member.name }}</h3>
      <p>{{ member.role }}</p>
      <p>{{ member.technologies }}</p>
      <button @click="showDetails">Detail</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      member: Object
    },
    methods: {
      showDetails() {
        this.$emit('show-details', this.member); 
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    padding: 16px;
    text-align: center;
  }
  
  .card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  
  button {
    margin-top: 10px;
    background-color: #2232df;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>