import React from "react";

import { Box, Flex, Text, Input } from "../atoms";
import { Link } from "../molecules";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

// import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { Button } from "../molecules";

const LendingPoolTab = () => {
  return (
    <Box className="organism-lendingpooltab">
      <Box padding={15} position="relative">
        <Flex justifyContent="space-between" alignItems="center">
          <Box position="absolute" top={7} width="100px" height={55}>
            <TokenPair token1={coinPng} token2={coinPng} />
          </Box>
          <Box />
          <Box />
          <Flex flexDirection="column">
            <Text>VTX</Text>
            <Text>STAKE VTX</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text>APR</Text>
            <Text>4.2%</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text>STAKE VTX</Text>
            <Text>0.0VTX</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text>TVL</Text>
            <Text>$4.2M</Text>
          </Flex>
          <Link iconSrc={coinPng} />
        </Flex>
      </Box>
      <Box backgroundColor="#101027">
        <Flex>
          <Flex
            flex={1}
            justifyContent="center"
            backgroundColor="#24244A"
            paddingVertical={5}
            borderRadius={0}
            borderTop="3px solid #6869E7"
          >
            <Text>STAKE</Text>
          </Flex>
          <Flex
            flex={1}
            justifyContent="center"
            backgroundColor="#101027"
            paddingVertical={5}
            borderRadius={0}
            borderColor="#6869E7"
            borderWidth={0}
          >
            <Text>UNSTAKE</Text>
          </Flex>
          <Flex
            flex={1}
            justifyContent="center"
            backgroundColor="#101027"
            paddingVertical={5}
            borderRadius={0}
            borderColor="#6869E7"
            borderWidth={0}
          >
            <Text>INFO</Text>
          </Flex>
        </Flex>
      </Box>
      <Box backgroundColor="#24244A" padding={20}>
        <Flex flexDirection="column">
          <Text>
            Stake VTX on Vector to earn a portion of the platform's revenue,
            distributed as xPTP and zJOE tokens.
          </Text>
          <Flex paddingVertical={20}>
            <Flex
              flex={1}
              flexDirection="column"
              justifyContent="space-between"
            >
              <Flex justifyContent="space-between">
                <Text color="#C2C2DA">Stake VTX</Text>
                <Text color="#C2C2DA">0.00</Text>
              </Flex>
              <Box
                borderRadius={5}
                borderWidth={2}
                borderColor="white"
                padding={2}
                backgroundColor="#111111"
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Input
                    width="70%"
                    height="45px"
                    placeholder="Enter An Amount"
                  />
                  <Box
                    backgroundColor="black"
                    borderRadius={5}
                    borderColor="white"
                    borderWidth={2}
                    paddingVertical={10}
                    paddingHorizontal={20}
                  >
                    <Text center>MAX</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex
              flex={1}
              flexDirection="column"
              justifyContent="space-between"
              gap={10}
            >
              <Flex justifyContent="center" alignItems="center">
                <Flex flex={1}>
                  <Box />
                </Flex>
                <Flex
                  borderRadius={50}
                  backgroundColor="#6869E7"
                  width={30}
                  height={30}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text>1</Text>
                </Flex>
                <Flex flex={1} height={2} backgroundColor="#6869E7">
                  <Box />
                </Flex>
                <Flex
                  borderRadius={50}
                  backgroundColor="#6869E7"
                  width={30}
                  height={30}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text>2</Text>
                </Flex>
                <Flex flex={1}>
                  <Box />
                </Flex>
              </Flex>
              <Flex>
                <Flex flex={1} justifyContent="center">
                  <Button backgroundColor="#6869E7">APPROVE</Button>
                </Flex>
                <Flex flex={1} justifyContent="center">
                  <Button backgroundColor="#6869E7">STAKE</Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolTab;
