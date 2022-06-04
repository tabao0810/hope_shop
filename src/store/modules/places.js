import { getAllCityApi } from "@/apis/place";

const state = () => {
  return {
    listCities: [],
    listDistricts: [],
    listWards:[],
  };
};

const mutations = {
  getAllCitiesMutation(state, payload) {
    state.listCities = payload;
  },
  getAllDistrictsMutation(state, payload) {
    let arr = state.listCities.filter((item) => item.name === payload);
    state.listDistricts = arr[0].districts;
  },
  getAllWardsMutation(state, payload) {
    let arr = state.listDistricts.filter((item) => item.name === payload);
    state.listWards = arr[0].wards;
  },
};

const actions = {
  async getAllCitiesAction(context) {
    getAllCityApi()
      .then((data) => context.commit("getAllCitiesMutation", data))
      .catch((err) => console.log(err));
  },
  async getAllDistrictsAction(context, data) {
    context.commit("getAllDistrictsMutation", data);
  },
  async getAllWardsAction(context, data) {
    context.commit("getAllWardsMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
