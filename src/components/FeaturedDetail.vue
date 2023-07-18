<template>
  <div class="box-detail">
    <div class="img-detail">
      <img :src="featuredDetail.image" class="img" alt="" />
    </div>
    <div class="text-detail">
      <h4>{{ featuredDetail.name }}</h4>
      <h2 class="text-danger" v-if="!isSaleDetail">
        {{ FormatPrice(featuredDetail.price) }}
      </h2>
      <h2 class="text-danger" v-else>
        {{ FormatOldPrice(featuredDetail.price, featuredDetail.sale)
        }}<span class="oldPrice ml-1">{{
          FormatPrice(featuredDetail.price)
        }}</span>
      </h2>
      <p>
        <a href="" @click.prevent="handleToDetail(featuredDetail._id)"
          >Xem chi tiết sản phẩm</a
        >
      </p>
      <hr />
      <pre>{{ featuredDetail.description }}</pre>
      <hr />
    </div>
  </div>
</template>

<script>
import { FormatPrice, FormatOldPrice } from "@/utils/constant";
export default {
  data() {
    return {
      size: this.featuredDetail.sizeClothing,
    };
  },
  props: {
    featuredDetail: {
      type: Object,
    },
    isSaleDetail: {
      type: Boolean,
    },
  },
  setup() {
    return {
      FormatPrice,
      FormatOldPrice,
    };
  },
  methods: {
    handleToDetail(a) {
      this.$router.push(`/product-detail/${a}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.box-detail {
  display: flex;
  align-items: flex-start;
  transition: all linear 0.5s;
}
.img-detail {
  flex: 0.4;
  width: 100%;
  height: 100%;
}
.img {
  width: 90%;
  object-fit: fill;
}
.text-detail {
  flex: 0.6;
  flex-wrap: wrap;
}
.oldPrice {
  text-decoration: line-through;
  color: black;
  font-size: 16px;
}
.form-control {
  max-width: 50%;
}
.quantity {
  width: 10%;
  padding: 4px;
  border-radius: 4px;
}
pre {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  line-height: 1.6;
  font-size: 16px;
  word-wrap: break-word;
  max-width: 100%;
  text-indent: 0px;
}
</style>
<style scoped>
:root {
  --white: #ffffff;
  --light: #f0eff3;
  --black: #000000;
  --dark-blue: #1f2029;
  --dark-light: #353746;
  --red: #da2c4d;
  --yellow: #f8ab37;
  --grey: #ecedf3;
}
.box-detail {
  text-align: left;
}
.btn:hover {
  background-color: #000000;
  border-color: #000000;
  color: white;
}
.selectSize {
  display: flex;
  align-items: center;
}
.selectSize > p {
  font-size: 20px;
  font-weight: 500;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label {
  position: relative;
  display: inline-block;
  padding: 6px;
  width: 50px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--white);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  font-weight: bold;
}
.checkbox-tools:not(:checked) + label {
  background-color: #353746;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label {
  background-color: #dc3545;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: linear-gradient(90deg, #f86983, var(--red));
  z-index: -1;
}
</style>
