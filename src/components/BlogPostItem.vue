<template>
  <h1 class="blog__heading">Tin tức</h1>
</template>

<script>
export default {};
</script>
<style>
.blog__heading::before {
  content: "";
  width: 102px;
  height: 25px;
  display: inline-block;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bkg_title.png)
    no-repeat 50% 50%;
  margin-right: 15px;
}
.blog__heading::after {
  content: "";
  width: 102px;
  height: 25px;
  display: inline-block;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bkg_title.png)
    no-repeat 50% 50%;
  margin-left: 15px;
  transform: rotate(180deg);
}
.blog__heading {
  font-weight: bold;
  padding-bottom: 20px;
}
@media (max-width: 767.98px) {
  .blog__heading::before,
  .blog__heading::after {
    display: none;
  }
}
</style>
