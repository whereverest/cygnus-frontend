import React from "react";
import { useNavigate } from "react-router-dom";
import coinPng from "../../assets/icons/coin.png";

const Logo = () => {
  const navigate = useNavigate();
  
  return (
    <img
      className="atom-logo"
      onClick={() => {
        navigate("/");
      }}
      src={coinPng}
      alt="logo"
    />
  );
};

export default Logo;
