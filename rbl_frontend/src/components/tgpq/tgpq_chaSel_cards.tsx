import "../../styles/tgpq/tgpq_chaSel_cards.css";
import TGPQCharacter from "./tgpq_character";
import TGPQCharacterAbilities from "./tgpq_character_abilities";
function TGPQChaSelCards() {
  return (
    <div className="tgpq-chaSel-cards">
      <div className="tgpq-chaSel-card">
        <TGPQCharacter />
        <TGPQCharacterAbilities />
      </div>
    </div>
  );
}
export default TGPQChaSelCards;
