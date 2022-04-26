import axios from "axios";

export const getAllBrandApi = async () => {
    const res = await axios({
        method: "GET",
        url:"http://localhost:5035/api/brands",
    });
    return res.data.Brand;
};
