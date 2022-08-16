import React from "react";

import { Container, Box, Flex, Grid, GridItem, Text } from "../atoms";
import { Page } from "../molecules";
import { LendingPoolCard } from "../organisms";

import Dimension from "../../config/dimension";

const Home = () => {
  return (
    <Page>
      <Container>
        <Flex flexDirection="column" gap={Dimension.GAP.LARGE}>
          <Text center fontSize="EXTRA_LARGE" fontWeight="BOLD">
            Lending Pool
          </Text>
          <Grid gap={Dimension.GAP.LARGE}>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
            <GridItem columns={3}>
              <LendingPoolCard />
            </GridItem>
          </Grid>
        </Flex>
      </Container>
    </Page>
  );
};

export default Home;
