import axios from "axios";

export const getAllBannerApi = async () => {
    const res = await axios({
        method: "GET",
        url:"https://api-hope.herokuapp.com/api/banners",
    });
    return res.data.Banner;
};
