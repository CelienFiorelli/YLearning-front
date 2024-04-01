import React, { createContext, useEffect, useState } from "react";
import { getUserToken, createUserPersonna, getUserData } from "../../services/userRequest";

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken && !token) {
      setToken(localToken);
      (async () => {
        const { id, username } = await getUserData(localToken);
        setUsername(username);
        setUserId(id);
      })();
    }
  }, []);

  const login = async (usernamePost, password) => {
    try {
      const { token } = await getUserToken(usernamePost, password);
      setToken(token);
      const { id, username } = await getUserData(token);
      setUsername(username)
      setUserId(id)
      localStorage.setItem("token", token);
      return true;
    } catch (error) {
      setErrorMessage(error.message);
      return false;
    }
  };

  const register = async (email, username, phone, password) => {
    try {
      const user = await createUserPersonna(email, username, phone, password);
      user && login(username, password);

      return user;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, register, token, username, userId, errorMessage }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
