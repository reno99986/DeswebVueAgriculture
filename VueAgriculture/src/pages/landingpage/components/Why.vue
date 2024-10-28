<script setup>
import { ref } from "vue";
import Card from "/src/components/UI/Card.vue";

const card = ref([
  {
    image: "/src/assets/family_star.svg",
    head: "Kualitas yang Lebih Baik",
    sub: "Ikan yang dibeli langsung dari nelayan lebih segar karena baru ditangkap dan tidak melalui banyak proses distribusi.",
  },
  {
    image: "/src/assets/savings.svg",
    head: "Harga yang Terjangkau",
    sub: "Membeli langsung dari nelayan  bisa lebih murah dibandingkan dengan membeli di pasar atau supermarket",
  },
  {
    image: "/src/assets/phishing.svg",
    head: "Kualitas dan Varietas",
    sub: "seringkali nelayan bisa memberikan informasi tentang cara memasak atau menyimpan ikan yang baik.",
  },
]);
</script>

<template>
  <div
    class="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-6 xs:px-4 px-12 xl:px-16 2xl:px-16 pt-4 2xl:py-16 pb-6 border border-b-2 border-base-200 place-content-between">
    <h1 class="font-bold 2xl:text-left xl:text-left lg:text-left text-center 2xl:text-4xl xl:text-4xl lg:text-4xl text-2xl text-secondary content-center">
      Mengapa penting membeli dari tangan pertama?
    </h1>
    <div class="flex xs:flex-col sm:flex-col flex-row gap-6">
      <Card v-for="items in card" :image="items.image" :head="items.head" :sub="items.sub" />
    </div>
  </div>
</template>