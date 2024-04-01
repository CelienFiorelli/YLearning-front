import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Base from "./Base";

const Dashboard = () => {
  const { username } = useContext(AuthContext);

  return (
    <Base>
        <h1>Connecté en tant {username} dans dashboard</h1>
    </Base>
  )
};

export default Dashboard;
