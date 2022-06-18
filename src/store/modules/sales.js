const state = function () {
  return {
    saleList: [
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/h-banner-1.jpg?v=13228227290046841073",
        sale: "-35% SALE OFF",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/h-banner-2.jpg?v=2161217510346950624",
        sale: "-35% SALE OFF",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/h-banner-3.jpg?v=10860493920640028538",
        sale: "-35% SALE OFF",
      },
    ],
  };
};
export default {
  namespaced: true,
  state,
};
