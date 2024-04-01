import axios from "../axiosConfig";

export const getChallenges = async (token) => {
  try {
    const response = await axios.get(`/api/challenge`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
