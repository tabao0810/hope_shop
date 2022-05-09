import axios from "axios";

export const getAllBlogsApi = async () => {
    const res = await axios({
        method: "GET",
        url:"https://api-hope.herokuapp.com/api/blogs",
    });
    return res.data.Blog;
};
export const getSingleBlogApi = async(blogId) => {
    const res = await axios({
        method:"GET",
        url:`https://api-hope.herokuapp.com/api/blogs/${blogId}`,       
    });
    return res.data.Blog;
}
export const updateBlogApi = async(blog) =>{
    const res = await axios({
        method:"PUT",
        url:`https://api-hope.herokuapp.com/api/blogs/${blog._id}/update`,
        data:blog
    });
    return res;
}