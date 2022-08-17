import React from "react";

interface IFlexProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  flexDirection?: "row" | "column";
  alignItems?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "stretch"
    | "initial";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "initial";
  borderRadius?: number;
  gap?: number;
  flex?: number;
  backgroundColor?: string;
  paddingVertical?: number;
  width?: number;
  height?: number;
  borderTop?: string;
}

const Flex: React.FC<IFlexProps> = ({
  children,
  className,
  flexDirection,
  alignItems = "",
  justifyContent = "",
  borderRadius = 10,
  backgroundColor = "transparent",
  paddingVertical = 0,
  flex = "",
  width = "auto",
  height = "auto",
  borderTop = "0px",
  gap = 0
}) => {
  return (
    <div
      className={["atom-flex", className].join(" ")}
      style={{
        display: "flex",
        flexDirection: flexDirection,
        backgroundColor: backgroundColor,
        flex: flex,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        alignItems: alignItems,
        justifyContent: justifyContent,
        borderRadius: borderRadius,
        borderTop: borderTop,
        width: width,
        height: height,
        gap: `${gap}px`
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
