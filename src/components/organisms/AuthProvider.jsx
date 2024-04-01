import React, { createContext, useEffect, useState } from "react";
import { getUserToken, createUserPersonna } from "../../services/userRequest";

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken && !token) {
      setToken(localToken);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const { token } = await getUserToken(username, password);
      setToken(token);
      setUsername(username);
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
      value={{ login, register, token, username, errorMessage }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
