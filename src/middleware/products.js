import { typePackages } from "@/utils/type-product";

const checkTypeProduct = (to, from, next) => {
  if (
    Object.values(typePackages).includes(to.params.typeProduct) ||
    to.params.typeProduct === "all"
  ) {
    return next();
  } else {
    return next({ name: "PageError" });
  }
};
export default checkTypeProduct;
