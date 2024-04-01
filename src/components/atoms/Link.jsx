import React from "react";
import { useNavigate } from "react-router";

const Link = ({ text, link, path }) => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        {text}
        <a
          onClick={() => navigate(path)}
          className="text-lime-400 italic hover:underline cursor-pointer dark:text-lime-500"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default Link;
