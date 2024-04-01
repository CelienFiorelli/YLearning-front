import axios from "../axiosConfig";

export const getCourses = async (token) => {
  try {
    const response = await axios.get(`/api/course`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCourse = async (id, token) => {
  try {
    const response = await axios.get(`/api/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCourseSections = async (id, token) => {
  try {
    const response = await axios.get(`/api/course/${id}/sections`, {
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
