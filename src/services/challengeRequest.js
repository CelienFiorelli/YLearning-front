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

export const getTechnologies = async (token) => {
  try {
    const response = await axios.get(`/api/technologie`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createChallengeComplete = async (technologie, challenge, token) => {
  try {
    const response = await axios.post(`/api/challenge/complete`, {
      technologie: technologie,
      challenge: challenge,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getChallengeComplete = async (id, token) => {
  try {
    const response = await axios.get(`/api/challenge/complete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getChallengeCompletes = async (userId, token) => {
  try {
    const response = await axios.get(`/api/user/${userId}/challenge`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateChallengeComplete = async (id, response, token) => {
  try {
    const responseData = await axios.put(`/api/challenge/complete/${id}`, {
      response: response
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return responseData.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const finishChallenge = async (id, token) => {
  try {
    const responseData = await axios.post(`api/challenge/complete/${id}/finish`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return responseData.data;
  } catch (error) {
    throw error.response.data;
  }
};
