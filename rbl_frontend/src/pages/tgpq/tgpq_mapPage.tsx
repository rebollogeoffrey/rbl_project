import TGPQMapLocations from "../../components/tgpq/tgpq_mapLocations";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import "../../styles/App.css";

function TGPQMapPage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-map">
      <TGPQTitle title="Map" howImportant={1} />
      <TGPQMapLocations />
    </div>
  );
}
export default TGPQMapPage;
