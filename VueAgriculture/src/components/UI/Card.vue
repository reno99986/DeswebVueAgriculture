<script setup>
import { defineProps } from 'vue';

defineProps(['head' , 'sub', 'image']);
</script>
<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body w-fit">
      <div class="flex xs:justify-center sm:justify-center w-full">
        <img v-bind:src="image" class="">
      </div>
      <h2 class="prose-lg font-bold xs:text-center sm:text-center sm:prose-xl lg:prose-2xl xl:prose-2xl 2xl:prose-2xl w-full">{{ head }}</h2>
      <p class="prose-sm xs:text-center sm:text-center sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl w-full">{{ sub }}</p>
    </div>
  </div>
</template>