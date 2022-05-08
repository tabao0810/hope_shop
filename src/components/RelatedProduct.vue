<template>
  <div>
    <a href=""
      ><img
        :src="productItem.image"
        alt=""
        class="product-item-image"
        @click="handleToDetail(productItem._id)"
    /></a>
    <h2 class="product-item-name">
      <a href="" @click="handleToDetail(productItem._id)">{{
        productItem.name
      }}</a>
    </h2>
    <h6 class="card-title small text-warning">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
    </h6>
    <div class="product-item-price">
      <p class="product-item-price-new">
        {{ formatPriceDetail(productItem) }}
      </p>
      <p v-if="productItem.isSale == true" class="product-item-price-old">
        {{ formatPriceDetailOld(productItem.price) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productItem: {
      type: Object,
    },
  },
  methods: {
    formatPriceDetail(a) {
      if (a.isSale == true) {
        let x = a.price - a.price * (a.sale / 100);
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      } else {
        let x = a.price;
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      }
    },
    formatPriceDetailOld(x) {
      return x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    },
    handleToDetail(a) {
      this.$router.push(`/product-detail/${a}`);
    },
  },
};
</script>

<style>
.product-item-image {
  width: 100%;
  cursor: pointer;
}
.product-item-name {
  margin-top: 10px;
  font-size: 20px;
  line-height: 28px;
  height: 28px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-weight: 500;
  text-align: center;
}
.product-item-name > a {
  color: black;
}
.product-item-name > a:hover {
  text-decoration: none;
  color: #ff343b;
  transition: all linear 0.3s;
}
.product-item-price {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-item-price-new {
  font-size: 16px;
  font-weight: bold;
  color: #ff343b;
  margin-right: 6px;
}
.product-item-price-old {
  font-size: 14px;
  text-decoration: line-through;
  color: #aaa;
}
</style>
