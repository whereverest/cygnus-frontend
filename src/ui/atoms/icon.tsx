import React from "react";

// images
import searchImage from "../../assets/images/search.svg";
import tilesImage from "../../assets/images/tiles.svg";
import linesImage from "../../assets/images/lines.svg";

interface IconProps {
  name: "search" | "tiles" | 'lines';
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
    search: searchImage,
    tiles: tilesImage,
    lines: linesImage
  };

  return (
    <img
      className={["atom-icon", classNames[size]].join(" ")}
      src={images[name]}
    />
  );
};

export default Icon;
