import axios from "axios";

export const createOrderApi = async (order) => {
  const res = await axios({
    method: "POST",
    url: "https://api-hope.herokuapp.com/api/order/create",
    data: order,
  });
  return res.data;
};
export const getAllOrdersApi = async () => {
  const res = await axios({
    method: "GET",
    url: "https://api-hope.herokuapp.com/api/order/getOrder",
  });
  return res.data.Orders;
};
export const updateOrderApi = async (product) => {
  const res = await axios({
    method: "PUT",
    url: `https://api-hope.herokuapp.com/api/order/update/${product._id}`,
    data: product,
  });
  return res;
};
