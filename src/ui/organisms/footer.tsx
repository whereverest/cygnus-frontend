import React from "react";

// atoms
import Logo from "../atoms/logo";
import Text from "../atoms/text";

const Footer = () => {
  return (
    <div className="organism-footer">
      <Logo />
      <Text type="paragraph">
        @2022 by Cygnus Finance. All rights reserved.
      </Text>
    </div>
  );
};

export default Footer;
