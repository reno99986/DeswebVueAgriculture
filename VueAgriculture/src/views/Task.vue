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
  