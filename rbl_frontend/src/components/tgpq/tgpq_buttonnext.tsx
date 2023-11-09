import { Link } from "react-router-dom";
import "../../styles/tgpq/tgpq_buttonnext.css";

function TGPQButtonNext({ path }: { path: string }) {
  return (
    <Link to={`${path}`}>
      <div className="tgpq-button-next-container">
        <button className="tgpq-button-next">Let's go</button>
      </div>
    </Link>
  );
}
export default TGPQButtonNext;
