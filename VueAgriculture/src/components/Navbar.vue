<script setup></script>

<template>
  <div
    class="flex flex-row place-content-between px-16 lg:px-12 md:px-4 sm:px-4 xs:px-4 py-4 border-b-2 border-base-200">
    <div class="flex flex-row gap-20 justify-start">
      <div class="flex flex-row gap-1">
        <img alt="Desweb logo" class="" src="/src/assets/logo.svg" />
        <p class="prose-sm text-secondary md:content-center sm:content-center xs:content-center">
          Wonderful Tarakan
        </p>
      </div>
      <button class="btn btn-ghost prose-sm content-center p-0 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden">
        Pengenalan
      </button>
      <button class="btn btn-ghost prose-sm content-center p-0 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden">
        Home
      </button>
      <button class="btn btn-ghost prose-sm content-center p-0 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden">
        Hasil Tangkapan
      </button>
    </div>

    <div class="flex flex-row gap-4 justify-end">
      <div class="flex flex-row gap-4 md:hidden sm:hidden xs:hidden">
        <div class="content-center">
          <img src="/src/assets/Indo.svg" alt="" class="w-[1/2] h-5" />
        </div>
        <div class="flex flex-row gap-1">
          <p class="prose-sm content-center">Indonesia</p>
        </div>
      </div>
      <button class="btn btn-secondary md:hidden sm:hidden xs:hidden">
        Hubungi Kami
      </button>
    </div>
    <div class="2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex">
      <img src="/src/assets/menu.svg" alt="" />
    </div>
  </div>
</template>
