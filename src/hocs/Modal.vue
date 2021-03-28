<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div :class="`modal-container ${addClass}`" :style="`width: ${width}`">
          <div class="modal-header">
            <slot name="header"> </slot>
            <button
              v-if="isHaveCloseBtn"
              @click="closeModal"
              class="modal-header-close"
            >
              <img src="../assets/icons/close.svg" alt="close" />
            </button>
          </div>
          <div class="modal-body">
            <slot name="body"> </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class Modal extends Vue {
  @Prop() isHaveCloseBtn!: boolean;
  @Prop() width!: number | string;
  @Prop() addClass?: string;

  closeModal() {
    this.$emit("closeModal");
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-header {
  position: relative;
  &-close {
    position: absolute;
    outline: none;
    cursor: pointer;
    top: 0;
    right: 0;
    background: none;
    border: none;
  }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 10px;
  background: var(--white);
  transition: all 0.3s ease;
}
</style>
