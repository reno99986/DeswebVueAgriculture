<script setup>
import TestimonyCard from "/src/components/UI/TestimonyCard.vue";
</script>

<template>
  <main class="py-12 emerald:bg-neutral-content border border-b-2 border-base-200">
    <div class="text-center mb-12">
      <h2 class="text-2xl 2xl:text-4xl xl:text-3xl lg:text-3xl text-secondary font-bold mb-4">
        Testimoni Dari Platform Kami
      </h2>
      <p class="text-lg xs:text-base sm:text-base md:text-base lg:text-lg">
        Berikut ini adalah beberapa testimoni dari nelayan yang telah terbantu.
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-6 px-4 2xl:px-16 xl:px-16">
      <TestimonyCard
        url="https://awsimages.detik.net.id/community/media/visual/2021/10/05/nelayan-desa-rebo-kabupaten-bangka-2_43.jpeg?w=650"
        nama="Pak Reno Irawan" testimoni="Saya suka aplikasi ini" />
      <TestimonyCard url="https://www.fishbox.id/wp-content/uploads/2021/04/senyum-kita.jpg" nama="Pak Niko Fahrezi"
        testimoni="Saya cinta aplikasi ini" />
      <TestimonyCard
        url="https://cdn.idntimes.com/content-images/community/2023/10/photo-shared-by-fishgo-on-july-30-2018-tagging-at-susipudjiastuti115-15a651153f8ecf7b3313d0a5cb1ecfd2-151d539a4bd8b7bc03906977fcb9a616.jpg"
        nama="Pak Hairul Ridwan" testimoni="Saya suka makan nasi goreng dengan es teh" />
    </div>
    <div class="text-center mt-8">
      Tertarik untuk bekerja untuk dibantu?
      <RouterLink to="/services"><span class='text-secondary'>Hubungi Kami</span></RouterLink>
    </div>
  </main>
</template>
