import React from "react";

import { Box, Flex, Icon } from "../atoms";

interface ITokenPairProps {
  token1: string;
  token2: string;
}

const TokenPair:React.FC<ITokenPairProps> = ({token1, token2}) => {
  return (
    <Flex className="molecule-tokenpair">
      <Box className="molecule-tokenpair__token1">
        <Icon size="TOKEN" src={token1} border="MEDIUM" />
      </Box>
      <Box className="molecule-tokenpair__token2">
        <Icon size="TOKEN" src={token2} border="MEDIUM" />
      </Box>
    </Flex>
  );
};

export default TokenPair;
