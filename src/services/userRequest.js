import axios from "../axiosConfig";

export const getUserToken = async (username, password) => {
  try {
    const response = await axios.post(`/api/login_check`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createUserPersonna = async (email, username, phone, password) => {
  try {
    const response = await axios.post(`/api/register`, {
      email: email,
      username: username,
      phone: phone,
      password: password,
    });
    getUserToken(username, password);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserData = async (token) => {
  try {
    const response = await axios.get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`auth/register`, user);
    return response.status;
  } catch (error) {
    console.log(error.response);
    throw error.response;
  }
};
