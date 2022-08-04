import React from "react";
import searchImage from "../../assets/images/search-icon.png";

interface IconProps {
  src?: string;
  size: "large" | "normal" | "small" | "tiny";
}

const Icon:React.FC<IconProps> = ({ src, size }) => {
  const sizeClassNames = {
    large: "atom-icon-large",
    normal: "atom-icon-normal",
    small: "atom-icon-small",
    tiny: "atom-icon-tiny",
  };
  return <div className={["atom-icon", sizeClassNames[size]].join(" ")}>
    {/* <img src={process.env.PUBLIC_URL + src} /> */}
    <img src={searchImage} />
  </div>
};

export default Icon;