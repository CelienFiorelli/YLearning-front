import React, { useContext, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./organisms/AuthProvider";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
