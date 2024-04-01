import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Base from "./Base";

const Course = () => {
  const { username } = useContext(AuthContext);

  return (
    <Base>
        <h1>Connecté en tant {username} dans course</h1>
    </Base>
  )
};

export default Course;
