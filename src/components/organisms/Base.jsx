import React from "react";
import { SideBar } from "../molecules/SideBar";

const Base = ({ children }) => {
  return (
    <div className="h-screen flex justify-end">
      <div className="relative" style={{ height: '100%', width: 72 }}>
        <SideBar />
      </div>
      <div className="h-full mx-2 backdrop-blur-sm" style={{ height: '100%', width: 'calc(100% - 88px)' }}>
        {children}
      </div>
    </div>
  )
};

export default Base;
