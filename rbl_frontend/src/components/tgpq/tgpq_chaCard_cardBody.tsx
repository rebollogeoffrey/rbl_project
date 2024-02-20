import "../../styles/tgpq/tgpq_chaCard_cardBody.css";
import TGPQCharacterName from "./tgpq_chaCard_name";
import TGPQCharacter from "./tgpq_character";
import TGPQCharacterAbilities from "./tgpq_character_abilities";
function TGPQChaCardBody({
  toColumn = true,
  isNameVisible = true,
  characterName = "Miss Terious",
  isCharacterImageVisible = true,
  areStatsVisible = true,
}: {
  toColumn?: boolean;
  isNameVisible?: boolean;
  characterName?: string;
  isCharacterImageVisible?: boolean;
  areStatsVisible?: boolean;
}) {
  return (
    <div className="tgpq-chaCard-body">
      <div className={"tgpq-chaCard-card " + (toColumn ? "column" : "row")}>
        {isNameVisible ? <TGPQCharacterName name={characterName} /> : null}
        {isCharacterImageVisible ? <TGPQCharacter /> : null}
        {areStatsVisible ? (
          <TGPQCharacterAbilities isHealthActualVisible={true} />
        ) : null}
      </div>
    </div>
  );
}

export default TGPQChaCardBody;
