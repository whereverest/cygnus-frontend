import React from "react";

interface IBoxProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  color?: string;
  display?: "block" | "inline-block" | "flex";
  borderRadius?: number;
  borderWidth?: number;
  borderStyle?: "solid" | "dashed";
  borderColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  padding?: number;
  backgroundColor?: string;
  width?: string;
  height?: number;
  top?: number;
  position?: "static" | "absolute" | "relative" | "fixed" | "sticky";
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Box: React.FC<IBoxProps> = ({
  children,
  className,
  color = "white",
  width = "auto",
  height = "auto",
  display = "block",
  borderRadius = 0,
  borderWidth = 0,
  borderStyle = "solid",
  borderColor,
  paddingVertical = 0,
  paddingHorizontal = 0,
  padding = 0,
  position = "static",
  backgroundColor = "transparent",
  top = "auto",
  onClick
}) => {
  return (
    <div
      className={["atom-box", className].join(" ")}
      style={{
        color: color,
        display: display,
        width: width,
        height: height,
        position: position,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,
        top: top,
        padding: padding
          ? `${padding}px`
          : `${paddingVertical}px ${paddingHorizontal}px`,
        backgroundColor: backgroundColor,
        // cursor: onClick ? "pointer" : "default",
        overflow: "hidden"
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
