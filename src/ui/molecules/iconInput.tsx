import React from "react";

// atoms
import Icon from "../atoms/icon";
import Input from "../atoms/input";

const IconInput = () => {
  return <div className="molecule-iconinput">
    <Icon name="search" size="small" />
    <Input placeholder="Filter pools" />
  </div>
};

export default IconInput;