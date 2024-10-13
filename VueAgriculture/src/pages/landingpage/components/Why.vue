<script setup>
import Card from "/src/components/UI/Card.vue";
</script>

<template>
  <div class="flex flex-col gap-6 px-4 pt-4 pb-6 border border-b-2 border-base-200">
    <h1 class="font-bold text-center text-2xl text-secondary">
      Mengapa penting membeli dari tangan pertama?
    </h1>
    <Card
      image="/src/assets/family_star.svg"
      head="Kualitas yang Lebih Baik"
      sub="Ikan yang dibeli langsung dari nelayan lebih segar karena baru ditangkap dan tidak melalui banyak proses distribusi."
    />
    <Card
      image="/src/assets/savings.svg"
      head="Harga yang Terjangkau"
      sub="Membeli langsung dari nelayan  bisa lebih murah dibandingkan dengan membeli di pasar atau supermarket"
    />
    <Card
      image="/src/assets/phishing.svg"
      head="Kualitas dan Varietas"
      sub="seringkali nelayan bisa memberikan informasi tentang cara memasak atau menyimpan ikan yang baik."
    />
  </div>
</template>