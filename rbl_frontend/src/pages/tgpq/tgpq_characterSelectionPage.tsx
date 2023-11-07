import TGPQChaSelCards from "../../components/tgpq/tgpq_chaSel_cards";
import TGPQChaSelTitle from "../../components/tgpq/tgpq_chaSel_title";

function CharacterSelectionPage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-tavern">
      <TGPQChaSelTitle />
      <TGPQChaSelCards />
    </div>
  );
}

export default CharacterSelectionPage;
