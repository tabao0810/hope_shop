import { getAllBrandApi } from "@/apis/brands"

const state = ()=>{
    return{
        listBrand: [
            
        ],
    }
}

const mutations={
    setAllBrandMutation(state,payload){
        state.listBrand = payload.reverse();
    }
}

const actions={
    async getAllBrandAction(context){
        const payload = await getAllBrandApi();
        context.commit("setAllBrandMutation",payload);
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}