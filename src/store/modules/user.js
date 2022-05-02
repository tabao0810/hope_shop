import { SignInApi, LoginPageApi, GetUserApi, LogoutPageApi,updateUserApi } from "@/apis/user";

const state = ()=>{
    return{
        userInfo:{

        }, 
        userCarts:[

        ],  
        userWishes:[

        ]       
          
    }
}
const mutations={

    // Lưu thông tin user vào local storage
    setUserInfoMutation(state,payload){
        state.userInfo = payload.user;
        state.userCarts = payload.user.carts;        
        state.userWishes = payload.user.wishes;        
        localStorage.setItem("userLogin", JSON.stringify(payload.token));
    },
    
    loginFailed(state,payload){
         state.errMes = JSON.stringify(payload);
    },   

    setUserLoginFromLocalStorage(state,payload){
        if(localStorage.getItem("userLogin")){
            state.userInfo = payload; 
             state.userCarts = payload.carts;       
             state.userWishes = payload.wishes;       
        }else{
            state.userInfo = null;
        }
    },  

     addCartMutation(state,payload){
        try{
        const index = state.userInfo.carts.findIndex((cart) => cart._id === payload._id)
        const size = state.userInfo.carts.findIndex((cart) => cart.sizeClothing === payload.sizeClothing)
        const sizeShoe = state.userInfo.carts.findIndex((cart) => cart.sizeShoe === payload.sizeShoe)
        const color = state.userInfo.carts.findIndex((cart) => cart.color === payload.color)
       
        if(index !== -1 && size !== -1 && color!==-1 && sizeShoe !== -1)        {
            state.userInfo.carts[index].amount += 1;
                               
        }else{
            state.userInfo.carts.push(payload);  
        } 
        
        }catch(err){
            alert("Bạn cần phải đăng nhập trước khi mua hàng")
        }
        
    },

    removeCartMutation(state,payload){
        const index = state.userInfo.carts.findIndex((cart) => cart._id === payload._id)
        const size = state.userInfo.carts.findIndex((cart) => cart.sizeClothing === payload.sizeClothing)
        const color = state.userInfo.carts.findIndex((cart) => cart.color === payload.color)
        if(index !== -1 && size !== -1 && color!==-1) {
            state.userInfo.carts.splice(index, 1);
        }else{
            alert("Loi")
        }
    },

    addWishListMutation(state,payload){
          const index = state.userInfo.wishes.findIndex((cart) => cart._id === payload._id)
        if(index !== -1){
            alert("Sản phẩm đã có trong danh sách yêu thích!!!!")
        }else{
            state.userInfo.wishes.push(payload);
            alert("Sản phẩm được thêm trong danh sách yêu thích!!!!")
            
        }
    },

     removeWishMutation(state,payload){
        const index = state.userInfo.wishes.findIndex((cart) => cart._id === payload)
        if(index !== -1){
            state.userInfo.wishes[index].isWish = false
            state.userInfo.wishes.splice(index, 1)
        }else{
            alert("loi")
        }
    },

    handleDownMutation(state,payload){
        const index = state.userInfo.carts.findIndex((cart) => cart._id === payload._id)
        const size = state.userInfo.carts.findIndex((cart) => cart.sizeClothing === payload.sizeClothing)
        const color = state.userInfo.carts.findIndex((cart) => cart.color === payload.color)
        if(index !== -1 && size !== -1 && color!==-1) {
            state.userInfo.carts[index].amount -= 1;
            payload.quantity +=1; 
            if(state.userInfo.carts[index].amount === 0){
                if(confirm('Bạn có chắc chắn xóa sản phẩm này không?') == true){
                    state.userInfo.carts.splice(index, 1);
                }else{
                    state.userInfo.carts[index].amount = 1;
                }
            }
        }else{
            alert('loi')
        }
    },

    handleUpMutation(state,payload){
        const index = state.userInfo.carts.findIndex((cart) => cart._id === payload._id)
        const size = state.userInfo.carts.findIndex((cart) => cart.sizeClothing === payload.sizeClothing)
        const color = state.userInfo.carts.findIndex((cart) => cart.color === payload.color)
        if(index !== -1 && size !== -1 && color!==-1) {
            state.userInfo.carts[index].amount += 1;
            payload.quantity -=1; 
        }else{
            alert('loi')
        }
    },
    orderMutation(state){
        return state.userCarts
    },
    removeAllCartMutation(state){
        state.userInfo.carts = [],
        state.userCarts = []
    }
   


}
const actions={

    // Đăng ký tài khoản
    async SignInAction(context,{data , router}){       
        try{
            await SignInApi(data);
            router.push("/login")            
        }catch(error){
            alert("Email này đã được sử dụng")
        }
    },

    // Đăng nhập vào trang web
    async LoginPageAction(context,{data, router}){
        try{
            const userLogin = await LoginPageApi(data)
            await GetUserApi(userLogin.token);
            context.commit("setUserInfoMutation",userLogin);       
            router.push('/') ;        
        }catch(error){
            context.commit("loginFailed",error)
        }
    },

    // Render thông tin user từ local storage
    async loadUserLoginFromLocalStorage(context){
        let userLoginToken = null;
        if(localStorage.getItem('userLogin')){
            userLoginToken = JSON.parse(localStorage.getItem('userLogin'));
                const userLogin = await GetUserApi(userLoginToken);                
            context.commit('setUserLoginFromLocalStorage',userLogin);           
        }     
    },

    // Đăng xuất
    async logoutUser(context){
        if(confirm('Bạn có chắc chắn xóa sản phẩm này không?') == true){
             const userLogout = JSON.parse(localStorage.getItem('userLogin'));        
         if(localStorage.getItem('userLogin')){
            await LogoutPageApi(userLogout)
            localStorage.removeItem('userLogin')
        }
        }else{
            context.dispatch("loadUserLoginFromLocalStorage")
        }
       
    },

    // Thêm sản phẩm vào giỏ hàng
     addCartAction(context,payload){
        // const newCart = {...payload, amount:1}        
        context.commit("addCartMutation",payload);
       context.dispatch("updateUser");       
               
    },

    // Xóa sản phẩm khỏi giỏ hàng
    removeCartAction(context,payload){
        context.commit("removeCartMutation",payload);
        context.dispatch("updateUser")
    },

    // Thêm sản phẩm vào danh sách yêu thích
    addWishListAction(context,payload){
        const newCart = {...payload, isWish : true}
        context.commit("addWishListMutation",newCart); 
         context.dispatch("updateUser")    
    },
    // Xóa sản phẩm khỏi danh sách yêu thích
    removeWishAction(context,payload){
        context.commit("removeWishMutation",payload)
         context.dispatch("updateUser") 
    },

    // Giảm số lượng trong giỏ hàng
    handleDownAction(context,payload){
        context.commit("handleDownMutation",payload),
        context.dispatch("updateUser")
    },  
    
    // Tăng số lượng trong giỏ hàng
    handleUpAction(context,payload){
        context.commit("handleUpMutation",payload),
        context.dispatch("updateUser")
    },

    // Cập nhật user
    async updateUser({state}){        
        await updateUserApi(state.userInfo);
    },

    orderActions(context){
       context.commit('orderMutation')
    },
    removeAllCartActions(context){
        context.commit('removeAllCartMutation')
        context.dispatch("updateUser")
    }      

}

export default{
    namespaced:true, 
    state,
    mutations,
    actions
}