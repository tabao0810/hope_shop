import {
  getAllProductsApi,
  getRelatedProductsApi,
  getSingleProductsApi,
} from "@/apis/products";

const state = () => {
  return {
    productList: [],
    productDetail: {},
    searchName: "",
  };
};

const getters = {
  productListSortAsc(state) {
    const arr = state.productList.sort((a, b) => a.price - b.price);
    return arr;
  },
  productListSortDesc(state) {
    const arr = state.productList.sort((a, b) => b.price - a.price);
    return arr;
  },
  productListfeatured(state) {
    return state.productList.filter((product) => product.color === "gray");
  },
  productListByName(state) {
    const { productList, searchName } = state;
    return productList.filter((product) =>
      product.name.toLowerCase().includes(searchName.toLowerCase())
    );
  },
  productListSale(state) {
    return state.productList.filter((product) => product.isSale === true);
  },

  productListSaleClothing(state) {
    const saleArr = state.productList.filter(
      (product) => product.isSale === true
    );
    return saleArr.filter((product) => product.typeProduct === "Quần áo");
  },
  productListSaleAccessory(state) {
    const saleArr = state.productList.filter(
      (product) => product.isSale === true
    );
    return saleArr.filter((product) => product.typeProduct === "Phụ kiện");
  },
  productListSaleBag(state) {
    const saleArr = state.productList.filter(
      (product) => product.isSale === true
    );
    return saleArr.filter((product) => product.typeProduct === "Túi");
  },
  productListSaleShoe(state) {
    const saleArr = state.productList.filter(
      (product) => product.isSale === true
    );
    return saleArr.filter((product) => product.typeProduct === "Giày");
  },
};

const mutations = {
  searchNameMutation(state, payload) {
    state.searchName = payload;
  },

  setProductsMutation(state, payload) {
    state.productList = payload.reverse();
  },

  setProductDetailMutation(state, payload) {
    state.productDetail = payload;
  },
};

const actions = {
  // Lấy toàn bộ sản phẩm
  async getAllProductsAction(context, { loading }) {
    await getAllProductsApi()
      .then((res) => {
        context.commit("setProductsMutation", res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loading();
      });
  },
  // Lấy 1 sản phẩm
  async getSingleProductsAction({ commit }, { id, loading }) {
    await getSingleProductsApi(id)
      .then((res) => {
        commit("setProductDetailMutation", res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      })
      .finally(() => {
        loading();
      });
  },
  // Tìm kiếm sản phẩm
  searchNameAction(context, { data, router }) {
    context.commit("searchNameMutation", data);
    router.push("/search");
  },
  async getRelatedProductsAction(context, { loading, type }) {
    await getRelatedProductsApi(type)
      .then((res) => {
        context.commit("setProductsMutation", res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loading();
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
