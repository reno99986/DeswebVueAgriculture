<script setup>
import HeroQuestion from "../components/pages/FAQ/HeroQuestion.vue";
import Question from "../components/pages/FAQ/Question.vue";
import { onMounted, onUpdated } from "vue";
const checkFooterHeight = () => {
  if (document.documentElement.scrollHeight <= window.innerHeight + 5) {
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
  <HeroQuestion />
  <Question />
  <div class="spacer"></div>
</template>
