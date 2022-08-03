import React from "react";

// atoms
import Text from "../atoms/text";

interface Row {
  value0: string;
  title: string;
  value1: string;
}

interface LendingPoolCardProps {
  data: {
    title: string;
    amount: number;
    price: string;
    rows: Array<Row>;
    // token0TotalSupply: string;
    // token1TotalSupply: string;
    // token0TotalBorrowed: string;
    // token1TotalBorrowed: string;
    // token0Utilization: string;
    // token1Utilization: string;
    // token0SupplyAPR: string;
    // token1SupplyAPR: string;
    // token0BorrowAPR: string;
    // token1BorrowAPR: string;
  };
}

const LPCard: React.FC<LendingPoolCardProps> = ({ data }) => {
  return (
    <div className="molecule-lpcard">
      <Text type="subtitle">{data.title}</Text>
      <Text type="subtitle">{`${data.amount} (${data.price})`}</Text>
      <div className="molecule-lpcard__data-table">
        {data.rows.map((row, index) => {
          return (
            <div className="molecule-lpcard__data-table__row">
              <Text type="paragraph">{row.value0}</Text>
              <Text type="paragraph">{row.title}</Text>
              <Text type="paragraph">{row.value1}</Text>
            </div>
          );
        })}
      </div>
      <div className="molecule-lpcard__footer">
        <div className="molecule-lpcard__footer__title">
          <Text type="paragraph">Leveraged LP APR</Text>
        </div>
        <div className="molecule-lpcard__footer__body">
          <div className="molecule-lpcard__footer__body__left">
            <div className="molecule-lpcard__footer__body__left__circle">
              <Text type="paragraph">1x</Text>
            </div>
            <div className="molecule-lpcard__footer__body__left__text">
              <Text type="paragraph">12.00%</Text>
            </div>
          </div>
          <div className="molecule-lpcard__footer__body__arrow"></div>
          <div className="molecule-lpcard__footer__body__right">
            <div className="molecule-lpcard__footer__body__right__circle">
              <Text type="paragraph">5x</Text>
            </div>
            <div className="molecule-lpcard__footer__body__right__text">
              <Text type="paragraph">12.00%</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LPCard;
