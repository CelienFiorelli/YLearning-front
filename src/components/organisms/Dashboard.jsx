import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Base from "./Base";

const Dashboard = () => {
  const { username } = useContext(AuthContext);

  return (
    <Base>
      <div className="text-white">
          <div className="text-xl font-semibold mt-12">Bienvenue {username}</div>
          <div>Vous pouvez commencer votre navigation en allant voir les cours ou les challenges depuis la barre de navigation</div>
      </div>
    </Base>
  )
};

export default Dashboard;
