import TGPQDescription from "../../components/tgpq/tgpq_homeDescription";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import TGPQLogo from "../../components/tgpq/tgpq_logo";
import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import { gamesInformations } from "../../components/hub/hub_hub_informations";

function TGPQHomePage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-home">
      <TGPQTitle title="The Great's Peasant Quest" />
      <TGPQLogo />
      <TGPQDescription gameDescription={gamesInformations[0].descriptionGame} />
      <TGPQButtonNext path="/selectCharacter" />
    </div>
  );
}

export default TGPQHomePage;
