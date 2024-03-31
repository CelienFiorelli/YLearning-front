import React from "react";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { SideBar } from "./SideBar";
import background from '../icons/background.svg'

const Dashboard = () => {
  const { username } = useContext(AuthContext);

  return (
    <div className="h-screen flex justify-end" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
      <div className="relative ml-2 my-1" style={{ height: 'calc(100% - 8px)', width: 72 }}>
        <SideBar />
      </div>
      <div className="h-full mx-2 backdrop-blur-sm" style={{ height: 'calc(100% - 8px)', width: 'calc(100% - 96px)' }}>
        <h1>Connecté en tant {username}</h1>

      </div>
    </div>
  )
};

export default Dashboard;
