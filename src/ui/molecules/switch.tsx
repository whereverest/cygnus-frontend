import React, { useState } from "react";

// atoms
import Icon from "../atoms/icon";

interface SwitchProps {
  stateIndex: number;
  size: "large" | "normal";
}

const Switch: React.FC<SwitchProps> = ({ stateIndex, size }) => {
  // const [switchIndex, setSwitchIndex] = useState<number>(stateIndex);
  // const switchHandler = () => {
  //   setSwitchIndex(1 - switchIndex);
  // };
  // const sizeClassNames = {
  //   large: "molecule-switch-large",
  //   normal: "molecule-switch-normal",
  // };
  const [switchState, setSwitchState] = useState(false);

  return (
    <div
      className="molecule-switch"
      onClick={() => {
        setSwitchState(!switchState);
      }}
    >
      <div
        className="molecule-switch__container"
        style={{ left: switchState ? "-50%" : "0%", right: switchState ? "50%" : "0%" }}
      >
        <div className="molecule-switch__container__item">
          <Icon name="tiles" size="small" />
        </div>
        <div className="molecule-switch__container__item">
          <Icon name="lines" size="small" />
        </div>
      </div>
      <div className="molecule-switch__cover" />
    </div>
  );
};

export default Switch;
