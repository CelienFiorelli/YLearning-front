import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Base from "./Base";

const Challenge = () => {
  const { username } = useContext(AuthContext);

  return (
    <Base>
        <h1>Connecté en tant {username} dans challenge</h1>
    </Base>
  )
};

export default Challenge;
