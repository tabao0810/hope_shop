import axios from "axios";

export const getAllBlogsApi = async () => {
    const res = await axios({
        method: "GET",
        url:"http://localhost:5035/api/blogs",
    });
    return res.data.Blog;
};
export const getSingleBlogApi = async(blogId) => {
    const res = await axios({
        method:"GET",
        url:`http://localhost:5035/api/blogs/${blogId}`,       
    });
    return res.data.Blog;
}
export const updateBlogApi = async(blog) =>{
    const res = await axios({
        method:"PUT",
        url:`http://localhost:5035/api/blogs/${blog._id}/update`,
        data:blog
    });
    return res;
}