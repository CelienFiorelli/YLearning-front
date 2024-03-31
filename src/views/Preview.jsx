import React from "react";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useParams, useNavigate } from "react-router";

const Preview = () => {
  const { verifyToken } = useParams();
  const {connect, token} = useContext(AuthContext)
  const navigate = useNavigate()
  
  if (token) {
    navigate("/chat");
  }

  return (
    <div className="w-full justify-center">
      <a className="hover:cursor-pointer text-blue -400 hover:underline dark:text-blue-500" onClick={async () => await connect(verifyToken) && navigate("/dashboard")}> Verifier mon mail </a>
    </div>
  );
};

export default Preview;
