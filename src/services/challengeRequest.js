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

export const getChallenge = async (id, token) => {
  try {
    const response = await axios.get(`/api/challenge/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getChallengeReviews = async (id, token) => {
  try {
    const response = await axios.get(`/api/challenge/${id}/review`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
