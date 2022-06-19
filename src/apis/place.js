import axios from "axios";

export const getAllCityApi = async () => {
  const res = await axios({
    method: "GET",
    url: "https://provinces.open-api.vn/api/?depth=3",
  });
  return res.data;
};
