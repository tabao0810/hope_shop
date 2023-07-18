<template>
  <img
    :src="img.image"
    class="img-slide"
    alt="Responsive image"
    loading="lazy"
  />
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
