import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="atom-logo"
      onClick={() => {
        navigate("/");
      }}
    >
      C Y G N U S
    </div>
  );
};

export default Logo;
