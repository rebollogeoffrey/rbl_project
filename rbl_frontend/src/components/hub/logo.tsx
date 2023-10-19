import { Link } from "react-router-dom";
import rblLogo from "../../assets/images/hub/logo_RBL_with-text.png";
import "../../styles/hub/logo.css";

function Logo() {
  return (
    <div className="logo-constructor">
      <Link to="/hub">
        <img className="logo-img" src={rblLogo} />
      </Link>
    </div>
  );
}
export default Logo;
