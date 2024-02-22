import TGPQBattle from "../../components/tgpq/tgpq_battle";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import "../../styles/App.css";

function TGPQMapPage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-battle">
      <TGPQTitle title="Battle" howImportant={1} />
      <TGPQBattle />
    </div>
  );
}
export default TGPQMapPage;
