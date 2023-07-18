import axios from "axios";

export const getAllBannerApi = async () => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/banners`,
  });
  return res.data.Banner;
};
