import {createOrderApi, getAllOrdersApi} from "../../apis/order";
import {  GetUserApi } from "@/apis/user";
import { getAllProductsApi,getSingleProductsApi,updateProductApi } from "@/apis/products";

const state= ()=>{
    return{
        Orders:[

        ],
        userId:"",
    }
}
const getters={
    getOrderByUser(state){  
        const {Orders,userId} = state   
           
        return Orders.filter((order) => order.userId === userId)
    }
}
const mutations={
    setAllOrder(state,payload){
        state.Orders = payload.reverse();
    },
    setUserLoginFromLocalStorage(state,payload){
        state.userId = payload._id       
    }
}

const actions ={
    async createOrderAction(context,{data,router}){
        const arrayData = data.carts.map((pro)=>pro._id);
        const payload = await getAllProductsApi();
        const arrayPro = payload.map((pro)=>pro._id)
        for(let i=0;i<arrayData.length;i++){
            for(let j=i+1;j<arrayPro.length;j++){
                if( arrayData[i] == arrayPro[j] ){                    
                    const productDetail =  await getSingleProductsApi(arrayData[i]); 
                    productDetail.quantity = productDetail.quantity - data.carts[i].amount
                    await updateProductApi(productDetail)
                }
            }
        }        
        await createOrderApi(data);   
        router.push('/success');     
    },
    async getAllOrdersActions(context){
        const payload = await getAllOrdersApi();
        context.commit('setAllOrder',payload)
        context.dispatch("loadUserLoginFromLocalStorage")
    },
    async loadUserLoginFromLocalStorage(context){
        let userLoginToken = null;
        if(localStorage.getItem('userLogin')){
            userLoginToken = JSON.parse(localStorage.getItem('userLogin'));
                const userLogin = await GetUserApi(userLoginToken);  
                        
            context.commit('setUserLoginFromLocalStorage',userLogin);           
        }     
    },
}

export default {
    namespaced:true,
    state,  
    getters,  
    mutations,
    actions
}