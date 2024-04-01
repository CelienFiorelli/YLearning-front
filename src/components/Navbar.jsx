import React from "react";


const Navbar = ({ children }) => {
  return (
    <nav className="w-full h-14 flex justify-end align-center bg-black/40 backdrop-blur-md lg:px-8">
      <div className="flex sm:flex-row flex-col items-center justify-center my-2 sm:my-4 gap-2 sm:gap-4 mx-2 sm:mx-4">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
