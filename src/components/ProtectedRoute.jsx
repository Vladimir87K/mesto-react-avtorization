import React from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate()

  return (
   props.loggedIn ? props.children : navigate("/register")
  );
};

export default ProtectedRoute; 