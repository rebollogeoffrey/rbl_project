import TGPQDescription from "../../components/tgpq/tgpq_homeDescription";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import TGPQLogo from "../../components/tgpq/tgpq_logo";
import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import { gamesInformations } from "../../components/hub/data/hub_hub_informations";
import "../../styles/App.css";

export default function TGPQHomePage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-home">
      <TGPQTitle title="The Great's Peasant Quest" howImportant={1} />
      <TGPQLogo />
      <TGPQDescription gameDescription={gamesInformations[0].descriptionGame} />
      <TGPQButtonNext path="/selectCharacter" />
    </div>
  );
}
