import "../../styles/tgpq/tgpq_chaSel_cards.css";
import TGPQCharacter from "./tgpq_character";
import TGPQCharacterStats from "./tgpq_character_stats";
function TGPQChaSelCards() {
  return (
    <div className="tgpq-chaSel-cards">
      <div className="tgpq-chaSel-card">
        <TGPQCharacter />
        <TGPQCharacterStats />
      </div>
    </div>
  );
}
export default TGPQChaSelCards;
