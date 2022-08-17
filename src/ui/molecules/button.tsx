import React from "react";

import { Box, Text } from "../atoms";

// import Dimension from "../../config/dimension";

interface IButtonProps {
  children: string;
  backgroundColor?: string;
  color?: string;
  padding?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  color,
  padding = 15,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      className="molecule-button"
      backgroundColor={backgroundColor}
      padding={padding}
      borderRadius={10}
    >
      <Text fontSize="SMALL" color={color}>
        {children}
      </Text>
    </Box>
  );
};

export default Button;
