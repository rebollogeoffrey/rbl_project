import { Link } from "react-router-dom";
import rblLogo from "../../assets/images/hub/logo_RBL_with-text.png";
import "../../styles/hub/hub_logo.css";

function HubLogo() {
  return (
    <div className="hub-logo-container">
      <Link to="/hub">
        <img className="hub-logo-img" src={rblLogo} />
      </Link>
    </div>
  );
}
export default HubLogo;
