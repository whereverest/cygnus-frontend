import React from "react";

import { Flex, Container, Logo, Box } from "../atoms";
import { Button, Link } from "../molecules";

const Header = () => {
  return (
    <Box
      className="organism-header"
      paddingVertical={20}
      position="fixed"
      width="100%"
    >
      <Container>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap={30}
          >
            <Link>PRODUCTS</Link>
            <Link>PORTFOLIO</Link>
            <Link>GOVERNANCE</Link>
          </Flex>
          <Button backgroundColor="#08161A" color="#15C7B3">
            CONNECT WALLET
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
