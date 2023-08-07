import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";
import { SwitchContext } from "../App";
import { useContext } from "react";

export default function Header() {
  const { on, planChange } = useContext(SwitchContext);

  return (
    <div className="header">
      <h1 className="header__title">Our Pricing</h1>
      <div className="header__plan">
        <p className="header__plan__text">Anually</p>
        <div className="header__plan__button" onClick={planChange}>
          {on ? (
            <PiToggleRightFill className="header__plan__button--icon" />
          ) : (
            <PiToggleLeftFill className="header__plan__button--icon" />
          )}
        </div>
        <p className="header__plan__text">Monthly</p>
      </div>
    </div>
  );
}
