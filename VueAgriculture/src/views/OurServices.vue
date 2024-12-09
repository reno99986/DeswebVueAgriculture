<!-- <script setup>

</script>

<template>
  <div role="tablist" class="tabs tabs-bordered tabs-md 2xl:px-16 xl:px-16 px-12 xs:px-4 py-4">
    <input type="radio" name="my_tabs_1" role="tab" class="tab" checked="checked" aria-label="Pengajuan Nelayan" />
    <div role="tabpanel" class="tab-content ">
      <h3 class="text-2xl font-semibold mb-4 mt-8">Form Pengajuan Nelayan</h3>
      <form class="space-y-4 min-h-[750px]">

        <div>
          <label for="product-name" class="block text-sm font-medium ">Jenis Produk</label>
          <input type="text" id="product-name" name="product-name"
            class="mt-1 block w-full px-4 py-2 border border-gray-300  rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
            required />
        </div>

        <div>
          <label for="product-name" class="block text-sm font-medium ">Nama Produk</label>
          <input type="text" id="product-name" name="product-name"
            class="mt-1 block w-full px-4 py-2 border border-gray-300  rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
            required />
        </div>

        <div>
          <label for="product-description" class="block text-sm font-medium ">Deskripsi Produk</label>
          <textarea id="product-description" name="product-description"
            class="mt-1 block w-full px-4 py-2 border border-gray-300  rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
            rows="12" required></textarea>
        </div>

        <div>
          <label for="product-price" class="block text-sm font-medium ">Harga Produk</label>
          <input type="input" id="product-price" name="product-price"
            class="mt-1 block w-full px-4 py-2 border border-gray-300  rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
            required />
        </div>

        <div>
          <label for="product-photo" class="block text-sm font-medium ">Foto Produk</label>
          <input type="file" id="product-photo" name="product-photo"
            class="mt-1 block w-full px-4 py-2 border border-gray-300  rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
            required />
        </div>

        <div>
          <button type="submit"
            class="w-full py-2 px-4 bg-secondary text-white rounded-md hover:bg-secondary focus:ring-4 focus:ring-secondary focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>

    <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Melaporkan Produk" />
    <div role="tabpanel" class="tab-content">
      <h3 class="text-2xl font-semibold mb-4 mt-8">Form Melaporkan Produk</h3>
      <form class="space-y-4 min-h-[750px]">

        <div>
          <label for="report-description" class="block text-sm font-medium ">Deskripsi Laporan</label>
          <textarea id="report-description" name="report-description"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="10" required></textarea>
        </div>

        <div>
          <label for="product-id" class="block text-sm font-medium ">Nama Produk Produk</label>
          <input type="text" id="product-id" name="product-id"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required />
        </div>

        <div>
          <button type="submit"
            class="w-full py-2 px-4 bg-secondary text-white rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none">
            Kirim Laporan
          </button>
        </div>

      </form>
    </div>
  </div>
</template> -->
<template>
  <div class="profile-page">
    <div class="team-container">
      <ProfileCard
        v-for="member in teamMembers"
        :key="member.id"
        :member="member"
        @show-details="openModal"
      />
    </div>

    <Modal
      :isVisible="isModalOpen"
      :member="currentMember"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import ProfileCard from '../components/pages/Task/task.vue';
import Modal from '../components/pages/Task/taskmodal.vue';

export default {
  components: {
    ProfileCard,
    Modal
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          photo: 'photo1.jpg',
          name: 'Hairul Irawan',
          role: 'Ketua Kelompok',
          technologies: 'Vue, HTML, CSS',
          description: 'PM & Home Page',
          github: 'https://github.com/'
        },
        {
          id: 2,
          photo: 'photo2.jpg',
          name: 'Niko Afandi Saputro',
          role: 'Anggota Kelompok',
          technologies: 'Vue, HTML, CSS',
          description: 'Hasil Tangkapan Page',
          github: 'https://github.com/NikWasHere'
        },
        {
          id: 3,
          photo: 'photo3.jpg',
          name: 'Reno Fahrezi Purnomo',
          role: 'Anggota Kelompok',
          technologies: 'Vue, HTML, CSS',
          description: 'FAQ Page',
          github: 'https://github.com/'
        },
        {
          id: 4,
          photo: 'photo4.jpg',
          name: 'Haikal',
          role: 'Anggota Kelompok',
          technologies: 'Vue, HTML, CSS',
          description: 'Our Service Page',
          github: 'https://github.com/'
        },
      ],
      isModalOpen: false,
      currentMember: {}
    };
  },
  methods: {
    openModal(member) {
      this.currentMember = member;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
</script>

<style scoped>
.profile-page {
  padding: 20px;
}
.team-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .team-container {
    grid-template-columns: 1fr;
  }
}
</style>

