import React from "react";
import ymentorsDark from "../icons/Mode_Isolation.svg";
import { useNavigate } from "react-router";
const Navbar = ({ children }) => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-14 flex justify-between align-center bg-black/40 backdrop-blur-md lg:px-8">
      <img
        className="h-9 cursor-pointer mt-2"
        src={ymentorsDark}
        alt="logo de ymentors"
        onClick={() => navigate('/')}
      />
      <div className="flex sm:flex-row flex-col items-center justify-center my-2 sm:my-4 gap-2 sm:gap-4 mx-2 sm:mx-4">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
