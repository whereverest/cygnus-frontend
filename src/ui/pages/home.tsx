import React from "react";

// atoms
import Text from "../atoms/text";
import Button from "../atoms/button";

// organisms
import LendingPoolCard from "../molecules/lendingPoolCard";

const Home = () => {
  const lendingPoolCardData = {
    title: "Joe",
    amount: 1,
    price: "$2.12",
    rows: [
      { value0: "$336K", title: "TotalSupply", value1: "$801K" },
      { value0: "$336K", title: "TotalSupply", value1: "$801K" },
      { value0: "$336K", title: "TotalSupply", value1: "$801K" },
      { value0: "$336K", title: "TotalSupply", value1: "$801K" },
      { value0: "$336K", title: "TotalSupply", value1: "$801K" },
    ],
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
        <LendingPoolCard data={lendingPoolCardData} />
        <LendingPoolCard data={lendingPoolCardData} />
        <LendingPoolCard data={lendingPoolCardData} />
        <LendingPoolCard data={lendingPoolCardData} />
        <LendingPoolCard data={lendingPoolCardData} />
        <LendingPoolCard data={lendingPoolCardData} />
      </div>
    </div>
  );
};

export default Home;
