import React from "react";

import Text from "../atoms/text";
import Button from "../atoms/button";
import Logo from "../atoms/logo";

const Header = () => {

  const navHandler = (navTitle:string) => {
    alert(navTitle);
  }

  return (
    <div className="organism-header">
      <Logo />
      <div className="organism-header__nav">
        <Button type="nav" handler={() => {navHandler('Terminal')}}>Terminal</Button>
        <Button type="nav" handler={() => {navHandler('Dashboard')}}>Dashboard</Button>
        <Button type="nav" handler={() => {navHandler('Stake CYX')}}>Stake CYX</Button>
        <Button type="nav" handler={() => {navHandler('Governance')}}>Governance</Button>
        <Button type="nav" handler={() => {navHandler('Docs')}}>Docs</Button>
      </div>
      <Button type="connect">Connect</Button>
    </div>
  );
};

export default Header;
