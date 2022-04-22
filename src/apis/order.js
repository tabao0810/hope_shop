import axios from "axios";

export const createOrderApi = async(order)=>{
    const res = await axios({
        method:"POST",
        url:"http://localhost:5035/api/order/create",
       data:order
    })
    return res.data
}
export const getAllOrdersApi = async() => {
    const res = await axios({
        method:"GET",
        url:"http://localhost:5035/api/order/getOrder",
    });
    return res.data.Orders;
}