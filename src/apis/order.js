import axios from "axios";

export const createOrderApi = async (order) => {
  const res = await axios({
    method: "POST",
    url: `${process.env.VUE_APP_API_URL}/api/order/create`,
    data: order,
  });
  return res.data;
};
export const getAllOrdersApi = async () => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/order/getOrder`,
  });
  return res.data.Orders;
};
export const updateOrderApi = async (product) => {
  const res = await axios({
    method: "PUT",
    url: `${process.env.VUE_APP_API_URL}/api/order/update/${product._id}`,
    data: product,
  });
  return res;
};
