import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import TGPQChaSelCards from "../../components/tgpq/tgpq_chaSel_cards";
import TGPQChaSelTitle from "../../components/tgpq/tgpq_chaSel_title";

function CharacterSelectionPage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-tavern">
      <TGPQChaSelTitle />
      <TGPQChaSelCards />
      <TGPQButtonNext path="/hub" />
    </div>
  );
}

export default CharacterSelectionPage;
