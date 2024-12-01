<script setup>
const faqData = [
  {
    question: "Apa itu Ikan Tarakan?",
    answer:
      "Ikan Tarakan adalah jenis ikan yang terkenal di daerah Tarakan dan menjadi komoditas penting bagi para nelayan lokal.",
  },
  {
    question: "Bagaimana cara menghubungi nelayan di Tarakan?",
    answer:
      "Anda dapat menghubungi nelayan di Tarakan melalui koperasi nelayan setempat atau menggunakan platform online yang menyediakan informasi kontak nelayan.",
  },
  {
    question: "Apa jenis ikan yang biasa ditangkap oleh nelayan di Tarakan?",
    answer:
      "Nelayan di Tarakan umumnya menangkap berbagai jenis ikan, termasuk ikan tenggiri, ikan kerapu, dan ikan laut lainnya.",
  },
  {
    question: "Bagaimana cara membeli ikan langsung dari nelayan?",
    answer:
      "Anda bisa membeli ikan langsung dari nelayan dengan mengunjungi pelabuhan atau tempat pendaratan ikan, atau melalui pasar ikan lokal.",
  },
  {
    question: "Apakah ada jadwal tertentu untuk menangkap ikan?",
    answer:
      "Ya, nelayan biasanya mengikuti jadwal tertentu berdasarkan musim, cuaca, dan kondisi laut untuk hasil tangkapan yang optimal.",
  },
  {
    question: "Apakah harga ikan di Tarakan bisa ditawar?",
    answer:
      "Ya, harga ikan di Tarakan biasanya bisa ditawar, terutama jika Anda membeli langsung dari nelayan di pelabuhan atau pasar ikan lokal.",
  },
  {
    question: "Bagaimana cara memastikan ikan yang dibeli masih segar?",
    answer:
      "Untuk memastikan ikan segar, perhatikan warna kulit ikan yang cerah, mata yang jernih, dan daging yang kenyal saat ditekan.",
  },
  {
    question:
      "Apakah nelayan di Tarakan menerima pesanan ikan dalam jumlah besar?",
    answer:
      "Ya, banyak nelayan di Tarakan yang menerima pesanan ikan dalam jumlah besar, terutama untuk restoran atau usaha katering. Anda dapat menghubungi mereka sebelumnya untuk memastikan ketersediaan.",
  },
  {
    question: "Apakah ada layanan pengiriman ikan dari Tarakan ke kota lain?",
    answer:
      "Beberapa nelayan atau koperasi di Tarakan menyediakan layanan pengiriman ikan segar ke kota lain menggunakan jasa ekspedisi khusus seafood.",
  },
  {
    question: "Bagaimana cara mengetahui kualitas ikan sebelum membeli?",
    answer:
      "Selain memeriksa kesegaran, Anda juga dapat bertanya kepada penjual tentang metode penyimpanan dan asal ikan untuk memastikan kualitasnya.",
  },
];
</script>

<template>
  <main
    class="sm:flex-col gap-10 2xl:gap-40 xl:gap-40 2xl:px-56 xl:px-48 px-12 xs:px-4 py-4 emerald:bg-neutral-content place-content-between border border-b-2 border-base-200"
  >
    <div
      v-for="(item, index) in faqData"
      :key="index"
      class="collapse collapse-arrow bg-base-200 my-3"
    >
      <input type="checkbox" class="peer" />
      <div
        class="collapse-title text-xl font-medium peer-checked:bg-blue-500 peer-checked:text-white"
      >
        {{ item.question }}
      </div>
      <div
        class="collapse-content peer-checked:bg-blue-500 peer-checked:text-white"
      >
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </main>
</template>
