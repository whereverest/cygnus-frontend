import React from "react";

interface ITextProps {
  children: string;
  type: "title" | "caption" | "subtitle" | "paragraph" | "button";
  center? : boolean;
}

const Text: React.FC<ITextProps> = ({ children, type, center}) => {
  const classNames = {
    title: "atom-text-title",
    subtitle: "atom-text-subtitle",
    caption: "atom-text-caption",
    paragraph: "atom-text-paragraph",
    button: 'atom-text-button'
  };
  return (
    <div className={["atom-text", classNames[type], center && "atom-text-center"].join(" ")}>{children}</div>
  );
};

export default Text;
