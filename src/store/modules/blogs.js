import { getAllBlogsApi, getSingleBlogApi, updateBlogApi } from "@/apis/blog";

const state = () => {
  return {
    blogList: [],
    blogDetail: {},
  };
};
const mutations = {
  getAllBlogMutation(state, payload) {
    state.blogList = payload.reverse();
  },

  setBlogDetailMutation(state, payload) {
    state.blogDetail = payload;
  },
  setCommetMutation(state, payload) {
    state.blogDetail.comments.unshift(payload);
  },
};

const actions = {
  async getAllBlogAction(context) {
    const payload = await getAllBlogsApi();
    context.commit("getAllBlogMutation", payload);
  },

  async getSingleBlogAction(context, payload) {
    const blogDetail = await getSingleBlogApi(payload);
    context.commit("setBlogDetailMutation", blogDetail);
  },
  async updateBlogAction({ state }) {
    await updateBlogApi(state.blogDetail);
  },
  addCommentAction(context, payload) {
    context.commit("setCommetMutation", payload);
    context.dispatch("updateBlogAction");
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
