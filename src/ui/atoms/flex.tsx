import React from "react";

interface IFlexProps {
  children: JSX.Element | JSX.Element[];
  height?: number;
  flexDirection?: "row" | "column";
  alignItems?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "initial";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "initial";
  gap?: number;
}

const Flex: React.FC<IFlexProps> = ({
  children,
  height,
  flexDirection,
  alignItems = "initial",
  justifyContent = "initial",
  gap = 0
}) => {
  return (
    <div
      className="atom-flex"
      style={{
        display: "flex",
        height: height!== undefined ? `${height}px` : "auto",
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
        gap: `${gap}px`
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
