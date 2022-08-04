import React from "react";

// images
import searchImage from "../../assets/images/search-icon.png";

interface IconProps {
  name: string;
  size: "large" | "normal" | "small" | "tiny";
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  const classNames = {
    large: "atom-icon-large",
    normal: "atom-icon-normal",
    small: "atom-icon-small",
    tiny: "atom-icon-tiny"
  };

  const images = {
    search: searchImage
  };

  return (
    <img
      className={["atom-icon", classNames[size]].join(" ")}
      src={images["search"]}
    />
  );
};

export default Icon;
