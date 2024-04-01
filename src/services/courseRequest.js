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
    const sections = await axios.get(`/api/course/${id}/sections`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await axios.get(`/api/section/${id}/responses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {sections: sections.data, responses: response.data};
  } catch (error) {
    throw error.response.data;
  }
};

export const getSectionResponses = async (id, token) => {
  try {
    const response = await axios.get(`/api/section/${id}/responses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

