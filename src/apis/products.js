import axios from "axios";

export const getAllProductsApi = async () => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/product/get`,
  });
  return res.data.Product;
};
export const getSingleProductsApi = async (productId) => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/product/${productId}`,
  });
  return res.data.Product;
};
export const updateProductApi = async (product) => {
  const res = await axios({
    method: "PUT",
    url: `${process.env.VUE_APP_API_URL}/api/product/${product._id}`,
    data: product,
  });
  return res;
};
export const getRelatedProductsApi = async (type) => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/product/type/${type}`,
  });
  return res.data.Product;
};
