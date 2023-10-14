<template>
  <div>
    <input
      class="checkbox"
      type="checkbox"
      name=""
      id=""
      v-model="statusCheck"
    />
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    status: {
      type: Boolean,
    },
  },
  emits: ["update:status"],
  setup(props, { emit }) {
    const statusCheck = computed({
      get() {
        return props.status;
      },
      set(value) {
        emit("update:status", value);
      },
    });
    return {
      statusCheck,
    };
  },
};
</script>

<style scoped>
.checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.hamburger-lines {
  display: block;
  height: 20px;
  width: 28px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-lines .line {
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: white;
}

.hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(40deg);
}

input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-40deg);
}
</style>
