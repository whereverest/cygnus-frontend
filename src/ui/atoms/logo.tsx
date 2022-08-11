import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  
  return (
    <img
      className="atom-logo"
      onClick={() => {
        navigate("/");
      }}
      src=""
      alt="logo"
    />
  );
};

export default Logo;
