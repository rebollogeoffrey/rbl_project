import { useContext } from "react";
import NavBarContext from "../../contexts/hub/NavbarContext";
import { Link } from "react-router-dom";
import LogoBurger from "./hub_logo";
import "../../styles/hub/hub_menu.css";

function Menu() {
  const { modalMenu } = useContext(NavBarContext);

  return (
    <div className={`menu ${modalMenu ? "menu-show" : null}`}>
      <div className="menu-container">
        <LogoBurger />
        <div className="menu-items">
          {/* TODO : Add the link for the route */}
          <Link to="/statistics" className="statistics">
            <h3>Statistics</h3>
          </Link>
          <Link to="/account" className="account">
            <h3>Account</h3>
          </Link>
        </div>
        <div className="logout">
          <Link to="/">
            <h3>Log Out</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
