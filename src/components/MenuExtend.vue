<script setup>
import { ref, watch } from "vue";
import { defineProps } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const showMenuProduct = ref(false);
const props = defineProps({
  routes: {
    type: Array,
    required: true,
  },
});
watch(route, () => {
  showMenuProduct.value = false;
});
</script>

<template>
  <div class="toolbar">
    <div class="extend_sidebar">
      <button
        class="icon_extend"
        @click.prevent="showMenuProduct = !showMenuProduct"
        v-if="!showMenuProduct"
      >
        <i class="fas fa-bars"></i>
      </button>
      <button
        class="icon_extend"
        @click.prevent="showMenuProduct = !showMenuProduct"
        v-else
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
    <slot></slot>
  </div>
  <Transition>
    <div class="menu_extend_product" v-if="showMenuProduct">
      <ul>
        <li v-for="(item, index) in props.routes" :key="index">
          <router-link :to="item.to">{{ item.route }}</router-link>
        </li>
      </ul>
    </div></Transition
  >
</template>

<style lang="scss">
.toolbar {
  border-bottom: 1px solid #ddd;
  margin-bottom: 12px;
  padding-bottom: 12px;
  overflow: hidden;
  .form-horizontal {
    float: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    select {
      background: #f0f0f0 none repeat scroll 0 0;
      border: 1px solid #e5e5e5;
      border-radius: 0;
      padding: 5px 10px;
      cursor: pointer;
      outline: none;
      option {
        color: #111;
        background-color: #fff;
        padding: 50px;
      }
    }
  }
}
</style>
