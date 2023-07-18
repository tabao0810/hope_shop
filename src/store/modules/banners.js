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
  async getAllBannerAction({ commit }, { loading }) {
    await getAllBannerApi()
      .then((res) => {
        commit("setAllBannerMutation", res);
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
      .finally(() => {
        loading();
      })
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
