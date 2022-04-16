import { getAllProductsApi, getSingleProductsApi } from "@/apis/products";

const state = () =>{
    return{
        productList:[

        ],
        productDetail:{

        },
         searchName:"",
    }
};

const getters = {
    productListClothing(state){
        return state.productList.filter((product)=> product.typeProduct === 'Quần áo')
    },
    productListClothingSort(state){
        const arr = state.productList.filter((product)=> product.typeProduct === 'Quần áo')
        const sort = arr.sort((a,b)=> a.price-b.price);
        return sort;        
    },
    
    productListAccessory(state){
        return state.productList.filter((product) => product.typeProduct === 'Phụ kiện')
    },
     productListBag(state){
        return state.productList.filter((product) => product.typeProduct === 'Túi')
    },
     productListShoe(state){
        return state.productList.filter((product) => product.typeProduct === 'Giày')
    },
    productListfeatured(state){
        return state.productList.filter((product) => product.color === 'gray')
    },
    productListByName(state){
        const {productList,searchName} = state;
        return productList.filter((product)=> product.name.toLowerCase().includes(searchName.toLowerCase()))
    },
    productListSale(state){
      return state.productList.filter((product) => product.isSale === true)  
    },
    productListSaleMin(state){        
        const saleArr = state.productList.filter((product) => product.isSale === true)
        return saleArr.filter((product) => (product.price - (product.price*(product.sale/100)))< 290000)
    },
    productListSaleMax(state){        
        const saleArr = state.productList.filter((product) => product.isSale === true)
        return saleArr.filter((product) => (product.price - (product.price*(product.sale/100)))> 400000)
    }   
};

const mutations={

    searchNameMutation(state,payload){
        state.searchName = payload
    },

    setProductsMutation(state,payload){
        state.productList = payload
    },

    setProductDetailMutation(state,payload){
        
        state.productDetail = payload;
    }
};

const actions={

    // Lấy toàn bộ sản phẩm
    async getAllProductsAction(context){
        const payload = await getAllProductsApi();
        context.commit("setProductsMutation",payload)
    },

    async getSingleProductsAction(context,payload){   
       const productDetail =  await getSingleProductsApi(payload);      
       context.commit("setProductDetailMutation",productDetail)
    },
    searchNameAction(context,{data,router}){        
        context.commit("searchNameMutation",data)
        router.push('/search')
    }

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}