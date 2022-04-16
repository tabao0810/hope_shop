<template>
  <div v-if="isSelected" class="mt-4">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
