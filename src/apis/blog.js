import axios from "axios";

export const getAllBlogsApi = async () => {
    const res = await axios({
        method: "GET",
        url:"http://localhost:5035/api/courses",
    });
    return res.data;
};