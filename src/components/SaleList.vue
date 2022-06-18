<template>
  <section class="sale-list">
    <div class="row">
      <h6
        class="container text-sale-list mt-3 col-xs-12 col-sm-12 col-12 text-uppercase"
      >
        Các sản phẩm bắt nhịp quốc tế, thời thượng không nên bỏ lỡ
      </h6>
      <div class="col-xs-12 col-sm-12 col-12">
        <div class="pro-list row">
          <div
            class="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12"
            v-for="sale in saleList"
            :key="sale.id"
          >
            <sale-item :saleItem="sale" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SaleItem from "./SaleItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const saleList = computed(() => store.state.sales.saleList);
    return {
      saleList,
    };
  },
  components: {
    SaleItem,
  },
};
</script>

<style>
@media (max-width: 580px) {
  .sale-list {
    padding-left: 50px;
    padding-right: 50px;
  }
  .text-center > p {
    font-size: 18px;
  }
  .text-sale-list {
    font-size: 14px;
  }
}
</style>
