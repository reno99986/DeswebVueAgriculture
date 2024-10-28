<script setup>
import { defineProps } from 'vue';

defineProps(['head' , 'sub', 'image']);
</script>
<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body p-4 w-full">
      <div class="flex xs:justify-center sm:justify-center">
        <img v-bind:src="image" class="">
      </div>
      <h2 class="prose-lg font-bold xs:text-center sm:text-center lg:prose-2xl">{{ head }}</h2>
      <p class="prose-sm xs:text-center sm:text-center lg:text-base">{{ sub }}</p>
    </div>
  </div>
</template>