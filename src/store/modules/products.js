import { getAllProductsApi, getSingleProductsApi } from "@/apis/products";

const state = () => {
  return {
    productList: [],
    productDetail: {},
    searchName: "",
  };
};

const getters = {
  //Quần áo
  productListClothing(state) {
    return state.productList.filter(
      (product) => product.typeProduct === "Quần áo"
    );
  },
  productListClothingSortAsc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Quần áo"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort;
  },
  productListClothingSortDesc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Quần áo"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort.reverse();
  },

  // Phụ kiện
  productListAccessory(state) {
    return state.productList.filter(
      (product) => product.typeProduct === "Phụ kiện"
    );
  },
  productListAccessorySortAsc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Phụ kiện"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort;
  },
  productListAccessorySortDesc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Phụ kiện"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort.reverse();
  },

  // Túi xách
  productListBag(state) {
    return state.productList.filter((product) => product.typeProduct === "Túi");
  },
  productListBagSortAsc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Túi"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort;
  },
  productListBagSortDesc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Túi"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort.reverse();
  },

  // Giày
  productListShoe(state) {
    return state.productList.filter(
      (product) => product.typeProduct === "Giày"
    );
  },
  productListShoeSortAsc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Giày"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort;
  },
  productListShoeSortDesc(state) {
    const arr = state.productList.filter(
      (product) => product.typeProduct === "Giày"
    );
    const sort = arr.sort((a, b) => a.price - b.price);
    return sort.reverse();
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
  async getAllProductsAction(context) {
    const payload = await getAllProductsApi();
    context.commit("setProductsMutation", payload);
  },
  // Lấy 1 sản phẩm
  async getSingleProductsAction({ commit }, { id, loading }) {
    await getSingleProductsApi(id)
      .then((res) => {
        commit("setProductDetailMutation", res);
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
      .finally(() => {
        loading();
      })
  },
  // Tìm kiếm sản phẩm
  searchNameAction(context, { data, router }) {
    context.commit("searchNameMutation", data);
    router.push("/search");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
