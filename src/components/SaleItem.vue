<template>
  <div class="card text-left mt-3 sale-item">
    <img
      class="card-img-top card__img"
      :src="saleItem.image"
      alt=""
      style="width: 100%; height: 100%"
      loading="lazy"
    />
    <div class="card__title text-center">
      <div>
        <a href="" @click="handleToSale">FLASH SALE</a>
      </div>
    </div>
    <figcaption>
      <p>{{ saleItem.sale }}</p>
    </figcaption>
    <a href="" @click="this.$router.push('/sale/all')"></a>
  </div>
</template>

<script>
export default {
  props: {
    saleItem: {
      type: Object,
    },
  },
  methods: {
    handleToSale() {
      this.$router.push("/sale/all");
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.card {
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  background-color: #000000;
}
.card *,
.card *::before,
.card *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.55s ease;
  transition: all 0.55s ease;
}
.card__img {
  max-width: 100%;
  backface-visibility: hidden;
  vertical-align: top;
  opacity: 0.9;
}
.card__title {
  position: absolute;
  top: 35%;
  left: 25px;
  padding: 5px 10px 10px;
}
.card__title::before,
.card__title::after {
  height: 2px;
  width: 400px;
  position: absolute;
  content: "";
  background-color: #ffffff;
}
.card__title::before {
  top: 0;
  left: 10px;
  -webkit-transform: translateX(300%);
  transform: translateX(300%);
}
.card__title::after {
  bottom: 0;
  right: 10px;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.card__title div::before,
.card__title div::after {
  width: 2px;
  height: 300px;
  position: absolute;
  content: "";
  background-color: #ffffff;
}
.card__title div::before {
  top: 10px;
  right: 0;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}
.card__title div::after {
  bottom: 10px;
  left: 0;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
.card__title a {
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 24px;
  text-decoration: none;
  color: aliceblue;
}
figcaption {
  position: absolute;
  bottom: 60%;
  left: 25px;
  text-align: left;
  opacity: 0;
  padding: 5px 60px 5px 10px;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1.5px;
}
figcaption p {
  margin: 0;
}
.sale-item:hover img {
  zoom: 1;
  filter: alpha(opacity=35);
  -webkit-opacity: 0.35;
  opacity: 0.35;
}
.card:hover .card__title::before,
.card:hover .card__title::after,
.card:hover .card__title div::before,
.card:hover .card__title div::after {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.card:hover figcaption {
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
figcaption a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
<style>
.card {
  overflow: hidden;
  border: none;
}
.card__img {
  position: relative;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
.card__img:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transition: all 0.7s ease-in-out;
  cursor: pointer;
}
@media (min-width: 720px) and (max-width: 1024px) {
  .card__title a {
    font-size: 30px;
  }
}
</style>
