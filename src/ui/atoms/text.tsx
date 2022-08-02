import React from "react";

interface ITextProps {
  children: string;
  type: "title" | "subtitle" | "paragraph";
}

const Text: React.FC<ITextProps> = ({ children, type }) => {
  const classNames = {
    title: "atom-text-title",
    subtitle: "atom-text-subtitle",
    paragraph: "atom-text-paragraph",
  };
  return (
    <div className={["atom-text", classNames[type]].join(" ")}>{children}</div>
  );
};

export default Text;
