export const FormatPrice = (price) => {
  return (price = price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  }));
};
