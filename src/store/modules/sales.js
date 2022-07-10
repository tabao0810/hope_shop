const state = function () {
  return {
    saleList: [
      {
        id: 1,
        image:
          "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-hien-dai-dep-nhat_113857069.jpg",
        sale: "-35% SALE OFF",
      },
      {
        id: 2,
        image:
          "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/anh-lookbook-thoi-trang_113854100.jpg",
        sale: "-35% SALE OFF",
      },
      {
        id: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxG9AH9-Qx_PN8td6LguylG8OsXzio6gNTA0lYSuIqIDFxDc9AtLTy15UYWvCWci-xcTI&usqp=CAU",
        sale: "-35% SALE OFF",
      },
    ],
  };
};
export default {
  namespaced: true,
  state,
};
