import axios from "axios";

export const getAllBrandApi = async () => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/brands`,
  });
  return res.data.Brand;
};
