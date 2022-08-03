import React from "react";

interface ITextProps {
  children: string;
  type: "title" | "subtitle" | "paragraph" | "button";
  center? : boolean;
}

const Text: React.FC<ITextProps> = ({ children, type, center}) => {
  const classNames = {
    title: "atom-text-title",
    subtitle: "atom-text-subtitle",
    paragraph: "atom-text-paragraph",
    button: 'atom-text-button'
  };
  return (
    <div className={["atom-text", classNames[type], center && "atom-text-center"].join(" ")}>{children}</div>
  );
};

export default Text;
