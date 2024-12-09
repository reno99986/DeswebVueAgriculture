<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))

watch(() => props.isOpen, (newVal) => {
  if (!newVal) {
    emit('modal-close');
  }
});
</script>

<template>
  <div v-if="isOpen" class="modal-mask w-">
    <div class="modal-wrapper">
      <div class="modal-container p-4" ref="target">
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>
        <div class="modal-body">
          <slot name="content"> default content </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div>
              <button @click.stop="emit('modal-close')">Close</button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  width: 300px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}
</style>