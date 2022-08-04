import React from "react";

// atoms
import Icon from "../atoms/icon";

interface LinkProps {
  url: string;
}

const Link: React.FC<LinkProps> = ({ url }) => {
  return <div className="molecule-link">
    <a href={url} target="_blank">
      <Icon size="normal" />
    </a>
  </div>;
};

export default Link;
