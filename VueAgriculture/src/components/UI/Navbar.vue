<script setup>
import { RouterLink } from 'vue-router';
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
<<<<<<< Updated upstream
      <RouterLink to="/">
        <button
          class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
          Home
        </button>
      </RouterLink>
      <RouterLink to="/about">
        <button
          class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
          Pengenalan
        </button>
      </RouterLink>
      <RouterLink to="/market">
        <button
          class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
          Hasil Tangkapan
        </button>
      </RouterLink>
      <RouterLink to="/FAQ">
        <button
          class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
          Tanya Jawab
        </button>
      </RouterLink>
      <RouterLink to="/services">
        <button
          class="btn btn-ghost text-base lg:text-sm text-base-content font-normal p-0 md:hidden sm:hidden xs:hidden">
          Layanan Kami
        </button>
      </RouterLink>
=======
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
        <RouterLink to="/services">Our Task</RouterLink>
      </button>
>>>>>>> Stashed changes
    </div>

    <div class="dropdown dropdown-end md:hidden sm:hidden xs:hidden">
      <div tabindex="0" role="button" class="btn m-1 bg-base-100 border-transparent shadow-transparent">
        <div class="flex flex-row gap-4 justify-end">
          <div class="flex flex-row gap-4 md:hidden sm:hidden xs:hidden">
            <div class="content-center">
              <img src="/src/assets/Indo.svg" alt="" class="w-[1/2] h-5" />
            </div>
            <div class="flex flex-row">
              <div class="flex flex-row gap-1">
                <p class="prose-sm content-center font-normal">Indonesia</p>
              </div>
              <div class="content-center">
                <img src="/src/assets/keyboard_arrow_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li><a>Indonesia</a></li>
        <li><a>English</a></li>
      </ul>
    </div>
    <div class="2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex">
      <img src="/src/assets/menu.svg" alt="" class="w-10" />
    </div>
  </nav>
</template>
