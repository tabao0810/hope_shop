import axios from "axios";

export const SignInApi = async(userInfo) =>{
    const res = await axios({
        method : "POST",
        url:'http://localhost:5035/api/users',
        data:userInfo
    });
    return res.data;
}

export const LoginPageApi = async (userInfo) =>{
    const res = await axios({
        method:"POST",
        url:'http://localhost:5035/api/users/login',  
        data: userInfo     
    });
    return res.data;
}

export const GetUserApi  = async(token) =>{
    const res = await axios({
        method: "GET",
        url:'http://localhost:5035/api/users/me',
        headers:{
            'Authorization': `Bearer ${token}`
        }        
    });
    return res.data;
}

export const LogoutPageApi  = async (token) =>{
    const res = await axios({
        method: "POST",
        url:'http://localhost:5035/api/users/me/logout',  
        headers:{
            'Authorization': `Bearer ${token}`
        }      
    });
    return res;
}
export const updateUserApi = async(user) =>{
    const res = await axios({
        method:"PUT",
        url:`http://localhost:5035/api/users/${user._id}/update`,
        data:user
    });
    return res;
}