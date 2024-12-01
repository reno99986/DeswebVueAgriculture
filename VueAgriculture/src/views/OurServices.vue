<script setup>
import { ref } from 'vue';

const tabActive = ref(1);
</script>

<template>
  <div role="tablist" class="tabs tabs-bordered tabs-md 2xl:px-16 xl:px-16 px-12 xs:px-4 py-4">
    <input type="radio" name="my_tabs_1" role="tab" class="tab w-full" :checked="tabActive === 1"
      @change="tabActive = 1" aria-label="Pengajuan Nelayan" />
    <div role="tabpanel" class="tab-content " v-if="tabActive === 1">
      <h3 class="text-2xl font-semibold mb-4 mt-8">Form Pengajuan Nelayan</h3>
      <form class="space-y-4">

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
            rows="10" required></textarea>
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

    <input type="radio" name="my_tabs_1" role="tab" class="tab" :checked="tabActive === 2" @change="tabActive = 2"
      aria-label="Melaporkan Produk" />
    <div role="tabpanel" class="tab-content" v-if="tabActive === 2">
      <h3 class="text-2xl font-semibold mb-4 mt-8">Form Melaporkan Produk</h3>
      <form class="space-y-4">

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
</template>
