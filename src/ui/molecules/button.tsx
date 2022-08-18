import React from "react";

import { Box, Text } from "../atoms";

// import Dimension from "../../config/dimension";

interface IButtonProps {
  children: string;
  backgroundColor?: string;
  color?: string;
  padding?: number;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  color,
  padding = 15,
  height = "auto",
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      className="molecule-button"
      backgroundColor={backgroundColor}
      padding={padding}
      borderRadius={5}
      height={height}
    >
      <Text fontSize="SMALL" color={color} center>
        {children}
      </Text>
    </Box>
  );
};

export default Button;
