<script setup>
import MarketItem from '../components/pages/Market/MarketItem.vue';
import ProductModal from '../components/pages/Market/ProductModal.vue';
import { ref, computed } from 'vue';
import TunaImage from '@/assets/image/Tuna.jpeg';
import KerapuImage from '@/assets/image/Kerapu.jpg';
import KakapImage from '@/assets/image/KakapMerah.jpg';
import TenggiriImage from '@/assets/image/Tenggiri.jpg';
import CakalangImage from '@/assets/image/Cakalang.jpg';
import UdanggImage from '@/assets/image/udanggalah.jpg';
import LobsterImage from '@/assets/image/lobster.jpg';
import RajunganImage from '@/assets/image/rajungan.jpg';
import BakauImage from '@/assets/image/bakau.jpg';
import SegarImage from '@/assets/image/rlaut.jpg';
import HijauImage from '@/assets/image/rhijau.jpg';
import VanemeImage from '@/assets/image/vaneme.jpg';
import MerahImage from '@/assets/image/rmerah.jpg';
import KeranghijauImage from '@/assets/image/khijau.jpg';
import KerangtiramImage from '@/assets/image/ktiram.jpg';
import KeranglautImage from '@/assets/image/klaut.jpg';
import CumiImage from '@/assets/image/cumi.jpg';
import SotongImage from '@/assets/image/sotong.jpg';

const categories = [
  'Semua', 'Ikan', 'Udang', 'Kepiting', 'Rumput Laut',
  'Kerang', 'Cumi-Cumi', 'Kategori 3', 'Kategori 4',
  'Kategori 5', 'Kategori 6', 'Kategori 7', 'Kategori 8', 'Kategori 9'
];
const selectedCategory = ref('Semua');

const products = [
  { name: 'Ikan Tuna Segar', category: 'Ikan', image: TunaImage, price: '50.000/kg', description: 'Nikmati kesegaran Ikan Tuna Segar langsung dari laut tarakan! Dikenal dengan daging yang padat dan kaya akan protein, cocok untuk sashimi, steak ikan, atau olahan lezat lainnya. Dapatkan kualitas terbaik dengan harga terjangkau.', waLink: 'https://wa.me/nomor1' },
  { name: 'Ikan Kerapu', category: 'Ikan', image: KerapuImage, price: '70.000/kg', description: 'Ikan Kerapu adalah pilihan terbaik untuk hidangan ikan panggang atau sup. Daging ikan yang lembut dan gurih ini memiliki cita rasa yang tak tertandingi. Rasakan kelezatannya yang pasti menggugah selera Anda!', waLink: 'https://wa.me/nomor2' },
  { name: 'Ikan Kakap Merah', category: 'Ikan', image: KakapImage, price: '80.000/kg', description: 'Ikan Kakap Merah terkenal dengan tekstur dagingnya yang lembut dan rasa yang manis. Cocok untuk berbagai olahan seperti bakar, goreng, atau kukus. Nikmati sensasi rasanya yang segar dan gurih!', waLink: 'https://wa.me/nomor3' },
  { name: 'Ikan Tenggiri', category: 'Ikan', image: TenggiriImage, price: '60.000/kg', description: 'Ikan Tenggiri adalah pilihan sempurna untuk berbagai masakan. Dikenal dengan daging yang kenyal dan sedikit berlemak, sangat lezat untuk dijadikan pepes, goreng, atau dimasak dengan bumbu khas. Rasakan kenikmatannya sekarang!', waLink: 'https://wa.me/nomor4' },
  { name: 'Ikan Cakalang', category: 'Ikan', image: CakalangImage, price: '55.000/kg', description: 'Ikan Cakalang memiliki cita rasa yang khas, sempurna untuk olahan sambal, pepes, atau ikan bakar. Rasakan kesegarannya yang langsung diambil dari laut dengan harga yang sangat bersahabat.', waLink: 'https://wa.me/nomor5' },
  { name: 'Udang Vannamei', category: 'Udang', image: VanemeImage, price: '80.000/kg', description: 'Udang Vannamei yang segar ini sangat populer di restoran-restoran seafood. Dagingnya yang manis dan kenyal, menjadikannya pilihan terbaik untuk hidangan goreng, rebus, atau bahkan sushi. Kepraktisan dan kesegaran yang selalu memuaskan!', waLink: 'https://wa.me/nomor6' },
  { name: 'Lobster', category: 'Udang', image: LobsterImage, price: '150.000/kg', description: 'Rasakan kelezatan Lobster segar dengan daging yang manis dan kenyal. Cocok untuk berbagai hidangan mewah seperti lobster panggang atau rebus. Hadirkan pengalaman kuliner istimewa di rumah Anda.', waLink: 'https://wa.me/nomor7' },
  { name: 'Udang Galah', category: 'Udang', image: UdanggImage, price: '100.000/kg', description: 'Udang Galah yang besar dan juicy, dengan daging yang lembut dan kenyal, adalah pilihan sempurna untuk berbagai olahan. Nikmati kelezatannya dalam hidangan udang goreng mentega atau rebus dengan bumbu spesial.', waLink: 'https://wa.me/nomor8' },
  { name: 'Kepiting Rajungan', category: 'Kepiting', image: RajunganImage, price: '120.000/kg', description: 'Kepiting Rajungan menawarkan rasa manis alami dari daging kepiting yang lembut dan penuh gizi. Sangat cocok untuk diolah menjadi kepiting saus tiram, kepiting rebus, atau kepiting bakar yang menggugah selera.', waLink: 'https://wa.me/nomor9' },
  { name: 'Kepiting Bakau', category: 'Kepiting', image: BakauImage, price: '100.000/kg', description: 'Kepiting Bakau memiliki daging yang kenyal dan cita rasa yang khas. Dengan harga yang terjangkau, Anda bisa menikmati hidangan kepiting yang lezat dan bergizi di rumah.', waLink: 'https://wa.me/nomor10' },
  { name: 'Rumput Laut Segar', category: 'Rumput Laut', image: SegarImage, price: '30.000/kg', description: 'Rumput Laut Segar adalah pilihan sehat yang kaya akan serat, vitamin, dan mineral. Cocok untuk dijadikan salad atau bahan tambahan untuk sup atau sushi. Nikmati kesegaran alami dari laut dengan harga yang sangat terjangkau!', waLink: 'https://wa.me/nomor11' },
  { name: 'Rumput Laut Hijau', category: 'Rumput Laut', image: HijauImage, price: '35.000/kg', description: 'Rumput Laut Hijau kaya akan nutrisi dan sangat bermanfaat untuk kesehatan kulit dan tubuh. Gunakan rumput laut hijau dalam hidangan salad, sup, atau bahkan dimakan langsung. Menyehatkan dan lezat!', waLink: 'https://wa.me/nomor12' },
  { name: 'Rumput Laut Merah', category: 'Rumput Laut', image: MerahImage, price: '40.000/kg', description: 'Rumput Laut Merah memiliki rasa yang lezat dan kaya akan manfaat. Sering digunakan dalam hidangan tradisional maupun modern seperti salad, sambal, atau hidangan sup. Menawarkan banyak nutrisi penting dengan harga yang bersahabat.', waLink: 'https://wa.me/nomor13' },
  { name: 'Kerang Hijau', category: 'Kerang', image: KeranghijauImage, price: '60.000/kg', description: 'Kerang Hijau dengan daging yang empuk dan lezat, sempurna untuk olahan masakan seperti kerang bakar, rebus, atau dimasak dengan saus tiram. Rasakan kenikmatannya yang kaya akan protein dan mineral.', waLink: 'https://wa.me/nomor14' },
  { name: 'Kerang Tiram', category: 'Kerang', image: KerangtiramImage, price: '70.000/kg', description: 'Nikmati Kerang Tiram yang segar dan lezat. Dengan rasa gurih alami, kerang tiram cocok untuk dimakan mentah, dipanggang, atau dibuat sup. Keistimewaan rasanya akan membawa sensasi rasa yang tak terlupakan.', waLink: 'https://wa.me/nomor15' },
  { name: 'Kerang Laut', category: 'Kerang', image: KeranglautImage, price: '50.000/kg', description: 'Kerang Laut memiliki tekstur yang kenyal dan rasa gurih alami. Cocok untuk diolah menjadi kerang bakar atau dimasak dengan saus tomat yang pedas. Pilihan yang sempurna untuk hidangan laut yang memanjakan lidah!', waLink: 'https://wa.me/nomor16' },
  { name: 'Cumi-Cumi', category: 'Cumi-Cumi', image: CumiImage, price: '70.000/kg', description: 'Cumi-Cumi segar yang kenyal dan penuh rasa, cocok untuk berbagai jenis hidangan seperti cumi bakar, cumi goreng tepung, atau cumi saus hitam. Dengan harga yang pas, cumi ini bisa menjadi hidangan istimewa di meja makan Anda.', waLink: 'https://wa.me/nomor17' },
  { name: 'Sotong', category: 'Cumi-Cumi', image: SotongImage, price: '60.000/kg', description: 'Sotong memiliki daging yang kenyal dan rasa manis alami. Sangat cocok untuk dibuat tumis pedas, panggang, atau digoreng. Sotong segar ini pasti menjadi pilihan tepat untuk hidangan laut yang kaya rasa!', waLink: 'https://wa.me/nomor18' }
];

const showModal = ref(false);
const currentProduct = ref(null);

const filteredProducts = computed(() => {
  return selectedCategory.value === 'Semua'
    ? products
    : products.filter(product => product.category === selectedCategory.value);
});

function filterCategory(category) {
  selectedCategory.value = category;
}

function openModal(product) {
  currentProduct.value = product;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <!-- Header Section -->
  <div class="text-center bg-[#377CFB] text-white py-10 px-4">
    <h1 class="text-4xl font-bold">Hasil Tangkapan</h1>
    <p class="mt-2 max-w-2xl mx-auto">
      Rasakan Kesegaran Sejati dari Laut! Dapatkan Hasil Laut Berkualitas Tinggi dengan Harga Terjangkau.
    </p>
  </div>

  <!-- Categories Section -->
  <div class="container mx-auto px-4">
    <div class="relative mt-8 px-4">
      <div class="flex space-x-4 overflow-x-auto px-4 categories-container">
        <button v-for="category in categories" :key="category" @click="filterCategory(category)"
          :class="['py-1 px-6 rounded-full whitespace-nowrap', selectedCategory.value === category ? 'bg-[#377CFB] text-white' : 'bg-gray-200']">
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Product Grid Section -->
    <div class="mt-8 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      <MarketItem v-for="(product, index) in filteredProducts" :key="index" :product="product" @click="openModal(product)" />
    </div>
  </div>
  
  <!-- Product Modal -->
  <ProductModal v-if="showModal" :product="currentProduct" @close="closeModal" />
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.categories-container {
  scrollbar-color: #377CFB #e0e0e0;
  scrollbar-width: thin;
  overflow-y: hidden;
  padding-bottom: 10px;
}

.categories-container::-webkit-scrollbar {
  height: 8px;
}

.categories-container::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 8px;
}

.categories-container::-webkit-scrollbar-thumb {
  background-color: #377CFB;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}
</style>
