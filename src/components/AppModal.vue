<template>
  <div class="moda" v-if="isOpen" @click="handleCloseDetail">
    <div class="modal__container" @click.stop>
      <div class="modal__header">
        <div class="modal__close" @click="handleCloseDetail">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="modal__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    handleCloseDetail: {
      type: Function,
    },
  },
  methods: {
    handleClose() {
      this.handleClose();
    },
  },
};
</script>

<style>
.moda {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.modal__container {
  width: 830px;
  margin: auto;
  margin-top: 100px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px 20px;
  display: block;
}
.modal__header {
  display: flex;
  justify-content: flex-end;
}
.modal__close {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  position: absolute;
}
.modal__close:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
}
</style>
