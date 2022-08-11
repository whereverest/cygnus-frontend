import React from "react";

import { Box, Flex, Grid, GridItem, Text, Process, Icon } from "../atoms";

import Images from "../../assets/images";

import Dimension from "../../config/dimension";

const LendingPoolCard = () => {
  return (
    <Box
      borderRadius={Dimension.BORDER_RADIUS.LARGE}
      borderColor="grey"
      borderWidth={2}
      borderStyle="solid"
    >
      <Box backgroundColor="#323640" padding={Dimension.PADDING.MEDIUM}>
        <Text center fontSize="MEDIUM">
          TRADER JOE
        </Text>
      </Box>
      <Box backgroundColor="#323640" padding={Dimension.PADDING.MEDIUM}>
        <div></div>
      </Box>
      <Flex
        flexDirection="row"
        justifyContent="center"
        gap={Dimension.GAP.MEDIUM}
        height={0}
      >
        <Box borderWidth={2} borderColor="red" borderRadius={100}>
          <Icon src={Images.Logo} size="TOKEN" />
        </Box>
        <Box borderWidth={2} borderColor="red" borderRadius={100}>
          <Icon src={Images.Logo} size="TOKEN" />
        </Box>
      </Flex>
      <Box backgroundColor="#212529" padding={Dimension.PADDING.MEDIUM}>
        <div></div>
      </Box>
      <Box backgroundColor="#212529" padding={Dimension.PADDING.MEDIUM}>
        <Flex flexDirection="column" gap={Dimension.GAP.MEDIUM}>
          <Text center fontSize="MEDIUM" fontWeight="BOLD">
            AVAX-ETH
          </Text>
          <Grid gap={Dimension.GAP.LARGE}>
            <GridItem columns={6}>
              <Flex flexDirection="column">
                <Text color="gray">Borrow APR</Text>
                <Text>12.45%</Text>
              </Flex>
            </GridItem>
            <GridItem columns={6}>
              <Flex flexDirection="column">
                <Text color="gray">Borrow APR</Text>
                <Text>12.45%</Text>
              </Flex>
            </GridItem>
          </Grid>
          <Flex flexDirection="column">
            <Text color="gray">Current Price</Text>
            <Text>12.45$</Text>
          </Flex>
          <Flex flexDirection="column">
            <Flex flexDirection="row" justifyContent="space-between">
              <Text color="gray">Utilization</Text>
              <Text>40%</Text>
            </Flex>
            <Process value={0.4} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolCard;
