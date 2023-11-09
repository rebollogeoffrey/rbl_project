import { Link } from "react-router-dom";
import logoHub from "../../assets/images/logo_RBL.png";
import "../../styles/games/games_buttonbacktohub.css";

function ButtonBackToHub() {
  return (
    <Link to="/hub">
      <img className="logo-hub" src={logoHub} />
    </Link>
  );
}
export default ButtonBackToHub;
