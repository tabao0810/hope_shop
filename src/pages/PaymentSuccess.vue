<template>
  <div class="container mt-5">
    <div>
      <h2>Mua hàng thành công</h2>
      <h6>Cảm ơn bạn đã ủng hộ shop, chúc bạn mua sắm vui vẻ</h6>
      <a href="" @click.prevent="this.$router.push('/history')"
        >Kiểm tra đơn hàng</a
      >
    </div>
    <img :src="img_svg" alt="" class="mt-4" />
  </div>
</template>

<script>
import success from "../../public/image/success.svg";
export default {
  data() {
    return {
      img_svg: success,
    };
  },
};
</script>

<style></style>
