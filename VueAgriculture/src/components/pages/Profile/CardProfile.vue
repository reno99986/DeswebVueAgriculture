<script setup>
import { ref } from 'vue';
import ProfileModal from './ProfileModal.vue';

const profiles = [{
  image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
  nama: 'Hairul',
  peran: 'Front End Developer',
  Teknologi: 'Vue'
},
{
  image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
  nama: 'Reno',
  peran: 'Front End Developer',
  Teknologi: 'Vue'
},
{
  image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
  nama: 'Niko',
  peran: 'Front End Developer',
  Teknologi: 'Vue'
},
{
  image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
  nama: 'Rionando',
  peran: 'Front End Developer',
  Teknologi: 'Vue'
},
{
  image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
  nama: 'Haikal',
  peran: 'Front End Developer',
  Teknologi: 'Vue'
}
]

const isModalOpened = ref(false);
const selectedProfile = ref(null);

const openModal = (profile) => {
  selectedProfile.value = profile;
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const submitHandler = () => {
  //here you do whatever
}

</script>

<template>
  <h1 class="text-4xl text-secondary text-center font-bold my-10"> Profile Pengembang</h1>
  <div class="flex justify-center ">
    <div
      class="mt-8 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 mb-10 xs:px-1 sm:px-1 px-10 justify-items-stretch w-fit ">
      <div v-for="profile in profiles" :key="profile.nama" class="card bg-base-100 w-96 shadow-xl justify-self-auto">
        <figure>
          <img :src="profile.image" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ profile.nama }}</h2>
          <p class="">{{ profile.peran }}</p>
          <p class="text-gray-400">{{ profile.Teknologi }}</p>
          <div class="card-actions justify-end">
            <div>
              <button @click="openModal(profile)" class="btn btn-secondary">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProfileModal :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal" class="pr">
    <template #header>{{ selectedProfile?.nama }}</template>
    <template #content>{{ selectedProfile?.peran }}</template>
    <template #footer>{{ selectedProfile?.Teknologi }}</template>
  </ProfileModal>
</template>