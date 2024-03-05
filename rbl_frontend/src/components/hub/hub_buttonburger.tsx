import { useContext } from "react";
import NavBarContext from "../../../contexts/hub/NavbarContext";

import sword from "../../assets/images/hub/sword_burgermenu.png";

import "../../styles/hub/hub_buttonburger.css";

function ButtonBurger() {
  const { modalMenu, setModalMenu } = useContext(NavBarContext);
  const handleMenu = () => {
    setModalMenu(!modalMenu);
  };

  return (
    <button
      type="button"
      className={`button-burger ${modalMenu ? "change" : null}`}
      onClick={handleMenu}
    >
      <img src={sword} alt="Menu's sword" className="bar1" />
      <img src={sword} alt="Menu's sword" className="bar2" />
      <img src={sword} alt="Menu's sword" className="bar3" />
    </button>
  );
}

export default ButtonBurger;
