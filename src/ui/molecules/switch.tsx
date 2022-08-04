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
      <div className="molecule-swtich__item">
        <Icon size="small" />
      </div>
      <div className="molecule-swtich__item">
        <Icon size="small" />
      </div>
      <div
        className="molecule-switch__slider"
        style={{ right: switchState ? "50%" : "0%" }}
      ></div>
      {/* <div
        className={[
          "molecule-switch__item",
          sizeClassNames[size],
          switchIndex === 0 && "molecule-switch__item-selected",
        ].join(" ")}
      >
        <Icon size="small" />
      </div>
      <div
        className={[
          "molecule-switch__item",
          sizeClassNames[size],
          switchIndex === 1 && "molecule-switch__item-selected",
        ].join(" ")}
      >
        <Icon size="small" />
      </div> */}
    </div>
  );
};

export default Switch;
