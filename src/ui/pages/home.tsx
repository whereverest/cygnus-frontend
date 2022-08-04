import React from "react";

// atoms
import Text from "../atoms/text";

// molecules
import IconInput from "../molecules/iconInput";
import Switch from "../molecules/switch";

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
      <div className="page-home__stake-list">
        <div className="page-home__stake-list__card-group-header">
          <div className="page-home__stake-list__card-group-header__title">
            <Text type="caption">
              Lending Pools
            </Text>
            <div className="page-home__stake-list__card-group-header__title__switch">
              <Switch stateIndex={0} size="large" />
            </div>
          </div>
          <IconInput />
        </div>
        <div className="page-home__stake-list__card-table">
          <div className="page-home__stake-list__card-table__header">
            <Text type="paragraph">Market</Text>
            <Text type="paragraph"> </Text>
            <Text type="paragraph">Total Supply</Text>
            <Text type="paragraph">Total Borrowed</Text>
            <Text type="paragraph">24h Supply APR</Text>
            <Text type="paragraph">24h Borrow APR</Text>
            <Text type="paragraph">Leveraged LP APR</Text>
          </div>
        </div>
        <div className="page-home__stake-list__card-group">
          <LendingPoolCard data={lendingPoolCardData} />
          <LendingPoolCard data={lendingPoolCardData} />
          <LendingPoolCard data={lendingPoolCardData} />
          <LendingPoolCard data={lendingPoolCardData} />
          <LendingPoolCard data={lendingPoolCardData} />
          <LendingPoolCard data={lendingPoolCardData} />
          <LendingPoolCard data={lendingPoolCardData} />
        </div>
      </div>
      </div>
  );
};

export default Home;
