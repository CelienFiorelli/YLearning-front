import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Base from "./Base";

const Profile = () => {
  const { username } = useContext(AuthContext);

  return (
    <Base>
        <h1>Connecté en tant {username} dans profile</h1>
    </Base>
  )
};

export default Profile;
