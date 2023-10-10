import { computed } from "vue";

export function usePrice(price, sale) {
  const newPrice = computed(() => {
    return price.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  });
  const oldPrice = computed(() => {
    let oldPrice = price - (price * sale) / 100;
    return oldPrice.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  });
  return {
    newPrice,
    oldPrice,
  };
}
