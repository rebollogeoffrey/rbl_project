import tgpqLogo from "../../assets/images/tgpq/tgpq_logo.png";
import "../../styles/tgpq/tgpq_logo.css";

function TGPQLogo() {
  return (
    <div className="tgpq-logo-constructor">
      <img className="tgpq-logo-img" src={tgpqLogo} />
    </div>
  );
}
export default TGPQLogo;
