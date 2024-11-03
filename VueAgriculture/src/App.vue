<script setup>
import Navbar from './components/UI/Navbar.vue';
import Footer from './components/UI/Footer.vue';
</script>

<template>
<Header>
  <Navbar />
</Header>
<RouterView />
<Footer />
</template>

<style scoped>
</style>