import axios from "../axiosConfig";

export const getConversations = async (token) => {
  try {
    const response = await axios.get('/message/conversation', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMessages = async (receiverId, token, queryParameter = {}) => {
  try {
    const queryString = Object.keys(queryParameter).map(function(key) {
      return `${key}=${queryParameter[key]}`;
    }).join('&');

    const response = await axios.get(`/message/${receiverId}?${queryString}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return {
      ...response.data,
      messages: Object.values(response.data.messages).map(m => {
        m.created_at = new Date(m.created_at)
        m.updated_at = new Date(m.updated_at)
        return m
    })
  };
  } catch (error) {
    throw new Error(error);
  }
};

export const createMessage = async (content, receiver, token) => {
  try {
    const response = await axios.post('/message', {
        content: content,
        receiver: receiver
    }, {
        headers: { Authorization: `Bearer ${token}` }
    });
    response.data.created_at = new Date(response.data.created_at)
    response.data.updated_at = new Date(response.data.updated_at)
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const editMessage = async (token, id, field = {}) => {
  try {
    const response = await axios.patch(`/message/${id}`, field, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteMessage = async (token, id) => {
  try {
    const response = await axios.delete(`/message/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return true;
  } catch (error) {
    throw new Error(error);
  }
};
