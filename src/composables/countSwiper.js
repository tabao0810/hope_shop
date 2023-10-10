import { computed } from "vue";

export function useCount(index) {
  const countSwiper = computed(() => {
    if (index < 719) {
      return 1;
    } else if (index > 1024) {
      return 4;
    } else {
      return 2;
    }
  });
  return {
    countSwiper,
  };
}
