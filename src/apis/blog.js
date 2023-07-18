import axios from "axios";

export const getAllBlogsApi = async () => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/blogs`,
  });
  return res.data.Blog;
};
export const getSingleBlogApi = async (blogId) => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/blogs/${blogId}`,
  });
  return res.data.Blog;
};
export const updateBlogApi = async (blog) => {
  const res = await axios({
    method: "PUT",
    url: `${process.env.VUE_APP_API_URL}/api/blogs/${blog._id}/update`,
    data: blog,
  });
  return res;
};
