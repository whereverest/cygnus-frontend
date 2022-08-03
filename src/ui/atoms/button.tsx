import React from "react";
import Text from "./text";

interface IButtonProps {
  children: string;
  type: "nav" | "normal" | "connect";
  handler?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, type, handler }) => {
  const classNames = {
    nav: "atom-button-nav",
    normal: "atom-button-normal",
    connect: "atom-button-connect",
  };
  return (
    <div
      onClick={handler}
      className={["atom-button", classNames[type]].join(" ")}
    >
      <Text type="button">{children}</Text>
    </div>
  );
};

export default Button;
