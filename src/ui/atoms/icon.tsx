import React from "react";

import DIMENSION from "../../config/dimension";

interface IIconProps {
  src?: string;
  size?: "LARGE" | "MEDIUM" | "SMALL" | "TOKEN";
}

const Icon: React.FC<IIconProps> = ({ src, size = "MEDIUM" }) => {
  return (
    <img
      className="atom-icon"
      src={src}
      style={{
        width: DIMENSION.ICON[size],
        height: DIMENSION.ICON[size]
      }}
      alt="icon"
    />
  );
};

export default Icon;
