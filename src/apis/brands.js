import axios from "axios";

export const getAllBrandApi = async () => {
    const res = await axios({
        method: "GET",
        url:"https://api-hope.herokuapp.com/api/brands",
    });
    return res.data.Brand;
};
