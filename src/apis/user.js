import axios from "axios";

export const SignInApi = async (userInfo) => {
  const res = await axios({
    method: "POST",
    url: `${process.env.VUE_APP_API_URL}/api/users`,
    data: userInfo,
  });
  return res.data;
};

export const LoginPageApi = async (userInfo) => {
  const res = await axios({
    method: "POST",
    url: `${process.env.VUE_APP_API_URL}/api/users/login`,
    data: userInfo,
  });
  return res.data;
};

export const GetUserApi = async (token) => {
  const res = await axios({
    method: "GET",
    url: `${process.env.VUE_APP_API_URL}/api/users/me`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const LogoutPageApi = async (token) => {
  const res = await axios({
    method: "POST",
    url: `${process.env.VUE_APP_API_URL}/api/users/me/logout`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const updateUserApi = async (user) => {
  const res = await axios({
    method: "PUT",
    url: `${process.env.VUE_APP_API_URL}/api/users/${user._id}/update`,
    data: user,
  });
  return res;
};
