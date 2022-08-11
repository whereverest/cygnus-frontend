import React from "react";

interface InputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input className="atom-input" placeholder={placeholder} />;
};

export default Input;
