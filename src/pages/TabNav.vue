<template>
  <ul class="tablist">
    <li v-for="tab in tabs" :key="tab" :class="{ active: tab === selected }">
      <a @click="setTab(tab)">
        {{ tab }}
      </a>
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
