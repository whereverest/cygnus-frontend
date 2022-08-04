import React from "react";

interface InputProps {
  placeholder?: string;
}

const Input:React.FC<InputProps> = ({ placeholder }) => {
  return <div className="atom-input">
    <input placeholder={placeholder} />
  </div>
}

export default Input;