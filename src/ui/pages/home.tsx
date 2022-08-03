import React from "react";

// atoms
import Text from "../atoms/text";
import Button from "../atoms/button";

// organisms
import LendingPoolCard from "../molecules/lendingPoolCard";

const Home = () => {

  const lendingPoolCardData = {
    title: 'Joe',
    amount: 1,
    price: '$2.12',
    token0TotalSupply: '$336K',
    token1TotalSupply: '$801K',
    token0TotalBorrowed: '$336K',
    token1TotalBorrowed: '$801K',
    token0Utilization: '39.25%',
    token1Utilization: '13.15%',
    token0SupplyAPR: '0.18%',
    token1SupplyAPR: '0.02%',
    token0BorrowAPR: '0.52%',
    token1BorrowAPR: '0.18%'
  };

  return (
    <div className="page-home">
      <Text type="title" center>
        Stake Your CYG.
      </Text>
      <Text type="paragraph" center>
        Get rewards from yields and platform fees.
      </Text>
      <div className="page-home__card-group">
        <LendingPoolCard data={lendingPoolCardData} />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Home;
