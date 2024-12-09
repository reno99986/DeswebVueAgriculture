<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// State untuk menampilkan menu hamburger
const isMenuOpen = ref(false);

// Fungsi untuk toggle menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav
    class="flex flex-row place-content-between 2xl:px-16 xl:px-16 px-12 xs:px-4 py-4 gap-20 lg:gap-10 bg-base-100 border-b-2 border-base-200">
    <div class="flex flex-row gap-20 lg:gap-10 w-fit h-fit place-self-center">
      <RouterLink to="/">
        <div class="inline-flex flex-row gap-1">
          <img alt="Wonderful Tarakan" class="" src="/src/assets/logo.svg" />
          <p class="basis-0 prose-sm text-secondary content-center">
            Wonderful Tarakan
          </p>
        </div>
      </RouterLink>
      <button
        class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
        <RouterLink to="/">Home</RouterLink>
      </button>
      <button
        class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
        <RouterLink to="/about">Pengenalan</RouterLink>
      </button>
      <button
        class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
        <RouterLink to="/market">Hasil Tangkapan</RouterLink>
      </button>
      <button
        class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
        <RouterLink to="/FAQ">Tanya Jawab</RouterLink>
      </button>
      <button
        class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
        <RouterLink to="/services">Layanan Kami</RouterLink>
      </button>
      <button
        class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
        <RouterLink to="/profile">Profile</RouterLink>
      </button>
    </div>

    <div class="dropdown dropdown-end md:hidden sm:hidden xs:hidden">
      <div tabindex="0" role="button" class="btn m-1 bg-base-100 border-transparent shadow-transparent">
        <div class="flex flex-row gap-4 justify-end">
          <div class="flex flex-row gap-4 md:hidden sm:hidden xs:hidden">
            <label class="swap swap-rotate">
              <!-- this hidden checkbox controls the state -->
              <input type="checkbox" class="theme-controller" value="night" />
              <!-- sun icon -->
              <svg class="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <!-- moon icon -->
              <svg class="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Hamburger Menu -->
    <div class="2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex" @click="toggleMenu">
      <img src="/src/assets/menu.svg" alt="" class="w-10" />
    </div>

    <!-- Dropdown Menu (Mobile) -->
    <div v-if="isMenuOpen"
      class="2xl:hidden xl:hidden lg:hidden absolute top-16 right-0 bg-base-100 p-4 shadow-lg rounded-lg w-screen flex flex-col z-50 ">
      <RouterLink to="/" class="block py-2">Home</RouterLink>
      <RouterLink to="/about" class="block py-2">Pengenalan</RouterLink>
      <RouterLink to="/market" class="block py-2">Hasil Tangkapan</RouterLink>
      <RouterLink to="/FAQ" class="block py-2">Tanya Jawab</RouterLink>
      <RouterLink to="/services" class="block py-2">Layanan Kami</RouterLink>
      <RouterLink to="/profile" class="block py-2">Profile</RouterLink>
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="night" />
        <!-- sun icon -->
        <svg class="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <!-- moon icon -->
        <svg class="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  </nav>
</template>
