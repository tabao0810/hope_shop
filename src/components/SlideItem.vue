<template>
  <img :src="img.image" class="img-slide" alt="Responsive image" />
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

<style></style>
