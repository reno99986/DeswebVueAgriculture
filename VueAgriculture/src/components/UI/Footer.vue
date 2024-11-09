<script setup>
import { onMounted, onUpdated } from "vue";
const checkFooterHeight = () => {
  if (document.documentElement.scrollHeight <= window.innerHeight+5) {
    document.querySelector("footer").classList.add("fixed", "bottom-0");
  } else {
    document.querySelector("footer").classList.remove("fixed", "bottom-0");
  }
};

onMounted(() => {
  checkFooterHeight();
  window.addEventListener("resize", checkFooterHeight);
});

onUpdated(() => {
  checkFooterHeight();
});
</script>

<template>
  <footer class="footer footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © 2024 - All right reserved by Wonderful Tarakan</p>
    </aside>
  </footer>
</template>
