import axios from "../axiosConfig";

export const getUserToken = async (username, password) => {
  try {
    const response = await axios.get(`/api/login_check`, {params: {
      username: username,
      password: password,
      headers: {
        'Content-Type': 'application/json'
    }
    }});
    return response.data;
  } catch (error) {
    throw error.response.data
  }
};
export const getDomains = async () => {
  try {
    const response = await axios.get(`domain`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const getSkills = async (domain) => {
  try {
    const response = await axios.get(`/skills/get-by-domain/${domain}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserData = async (token) => {
  try {
    const response = await axios.get(`/auth/whoami`, {
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
    console.log(error.response)
    throw error.response
  }
};

export const verifyMail = async (verifyToken) => {
  try {
    const response = await axios.get(`auth/verification?token=${verifyToken}`);
    return response.data;
  } catch (error) {
    throw error.response
    ;
  }
};
