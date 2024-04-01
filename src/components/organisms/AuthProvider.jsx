import React, { createContext, useEffect, useState } from "react";
import {
  getUserToken,
  createUser,
  verifyMail,
} from "../../services/userRequest";

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
      setUsername(username)
      localStorage.setItem("token", token);
      return true;
    } catch (error) {
      setErrorMessage(error.message);
      return false;
    }
  };

  const register = async (userinfo) => {
    try {
      const newUser = await createUser(userinfo);
      return newUser;
    } catch (error) {
      return false;
    }
  };

  const connect = async (verifyToken) => {
    try {
      const verification = await verifyMail(verifyToken);
      const { token } = verification;
      if (token) {
        setToken(token);
        console.log(verification);
        localStorage.setItem("token", token);
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, register, connect, token, username, errorMessage }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
