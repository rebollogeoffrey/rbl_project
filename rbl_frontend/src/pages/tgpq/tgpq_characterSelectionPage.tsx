import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import TGPQChaCardBody from "../../components/tgpq/tgpq_chaCard_cardBody";
import TGPQChaCardTitle from "../../components/tgpq/tgpq_chaCard_title";

function TGPQCharacterSelectionPage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-tavern">
      <TGPQChaCardTitle title="Select your character" />
      <TGPQChaCardBody />
      <TGPQButtonNext path="/map" />
    </div>
  );
}

export default TGPQCharacterSelectionPage;
