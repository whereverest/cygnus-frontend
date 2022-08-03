import React from "react";

interface LendingPoolCardProps {
  data: {
    title: string,
    amount: number,
    price: string
  }
}

const LendingPoolCard: React.FC<LendingPoolCardProps> = ({
  data
}) => {
  return <div className="molecule-lendingpoolcard">
    {data.title}
  </div>;
};

export default LendingPoolCard;
