import axios from "axios";

export const getAllBannerApi = async () => {
    const res = await axios({
        method: "GET",
        url:"http://localhost:5035/api/banners",
    });
    return res.data.Banner;
};
