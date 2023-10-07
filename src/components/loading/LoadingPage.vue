<template>
  <span class="loader"></span>
</template>

<script>
export default {};
</script>

<style>
.loader {
  margin: 50px auto;
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
