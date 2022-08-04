import React from "react";

// atoms
import Logo from "../atoms/logo";
import Text from "../atoms/text";

// molecules
import Link from "../molecules/link";

const Footer = () => {
  return (
    <div className="organism-footer">
      <Logo />
      <Text type="paragraph">
        @2022 by Cygnus Finance. All rights reserved.
      </Text>
      <div className="organism-footer__social-link">
        <Link url="#" />
        <Link url="#" />
        <Link url="#" />
        <Link url="#" />
        <Link url="#" />
      </div>
    </div>
  );
};

export default Footer;
