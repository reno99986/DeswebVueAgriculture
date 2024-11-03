<script setup>
import { defineProps } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  testimoni: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure class="px-10 pt-10">
      <img :src="url" alt="Shoes" class="rounded-xl w-full h-48 object-cover" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ nama }}</h2>
      <p>{{ testimoni }}</p>
    </div>
  </div>
</template>
