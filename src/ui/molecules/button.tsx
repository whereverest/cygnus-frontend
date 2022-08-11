import React from "react";

import { Box, Text } from "../atoms";

import Dimension from "../../config/dimension";

interface IButtonProps {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <Box onClick={onClick}>
      <Text fontSize="MEDIUM">{children}</Text>
    </Box>
  );
};

export default Button;
