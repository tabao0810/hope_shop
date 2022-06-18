import { getAllBannerApi } from "@/apis/banners";
const state = () => {
  return {
    listBanner: [],
  };
};

const mutations = {
  setAllBannerMutation(state, payload) {
    state.listBanner = payload.reverse();
  },
};

const actions = {
  async getAllBannerAction(context) {
    const payload = await getAllBannerApi();
    context.commit("setAllBannerMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
