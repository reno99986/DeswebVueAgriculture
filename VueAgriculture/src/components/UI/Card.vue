<script setup>
import { defineProps } from 'vue';

defineProps(['head' , 'sub', 'image']);
</script>
<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body p-4 w-full">
      <div class="flex justify-center items-center">
        <img v-bind:src="image" class="w-1/5 h-1/5 ">
      </div>
      <h2 class="prose-lg font-bold text-center">{{ head }}</h2>
      <p class="prose-sm text-center">{{ sub }}</p>
    </div>
  </div>
</template>