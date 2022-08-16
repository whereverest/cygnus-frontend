import React from "react";

import { Box, Text } from "../atoms";

import Dimension from "../../config/dimension";

interface IButtonProps {
  children: string;
  backgroundColor?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  color,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      className="molecule-button"
      backgroundColor={backgroundColor}
      padding={15}
      borderRadius={10}
    >
      <Text fontSize="SMALL" color={color}>
        {children}
      </Text>
    </Box>
  );
};

export default Button;
