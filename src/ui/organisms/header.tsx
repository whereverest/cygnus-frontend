import React from "react";

import { Flex, Container } from "../atoms";
import { Button } from "../molecules";

const Header = () => {
  return (
    <Container>
      <Flex flexDirection="row" alignItems="center" justifyContent="flex-end">
        <Button>Connect</Button>
      </Flex>
    </Container>
  );
};

export default Header;
