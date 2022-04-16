<template>
  <ul class="catagory">
    <li v-for="tab in tabs" :key="tab" :class="{ active: tab === selected }">
      <a @click="setTab(tab)"> <i class="fa fa-angle-right"></i>{{ tab }} </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style></style>
<style scoped>
.catagory li.active a {
  position: relative;
  left: 10px;
  color: red;
}
.catagory li {
  color: #666;
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.catagory li a {
  font-size: 12px;
  text-transform: uppercase;
  color: #666;
  text-decoration: none;
  font-weight: bold;
  transition: all linear 0.3s;
  text-align: left;
}
.catagory li i {
  margin-right: 5px;
}
.catagory li a:hover {
  color: #ff343b;
}
</style>
