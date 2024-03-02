import TGPQBattle from "../../components/tgpq/tgpq_battle";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import "../../styles/App.css";

export default function TGPQMapPage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-battle">
      <TGPQTitle title="Battle" howImportant={1} />
      <TGPQBattle />
    </div>
  );
}
