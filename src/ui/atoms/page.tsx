import React from "react";

interface IPageProps {
  children: JSX.Element | JSX.Element[];
}

const Page: React.FC<IPageProps> = ({ children }) => {
  return <div className="atom-page">{children}</div>;
};

export default Page;
