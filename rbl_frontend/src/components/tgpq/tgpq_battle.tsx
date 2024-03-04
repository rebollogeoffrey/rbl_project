import TGPQButtonBattle from "./tgpq_buttonbattle";
import TGPQChaCardBody from "./tgpq_card_body";
import { characterInfos } from "./data/tgpq_character_infos";
import TGPQTitle from "./tgpq_title";
import "../../styles/tgpq/tgpq_battle.css";

function TGPQBattle() {
  // TODO : Find a better way to feed fct with character info -> props for now ?
  // TODO : Find a better way to feed fct with character info -> Hook ? Witch one ?
  // TODO : Handle images from database
  const characterInformations = { characterInfos };
  return (
    <div className="font-family-tgpq-regular">
      <TGPQChaCardBody
        characterInfos={characterInformations.characterInfos[1]}
        isInColumn={false}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
        isHealthActualVisible={true}
      />
      <TGPQTitle
        title="Choose to maximise your attack or defense for the next round"
        howImportant={3}
      />
      <TGPQButtonBattle />
      <TGPQChaCardBody
        characterInfos={characterInformations.characterInfos[0]}
        isInColumn={false}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
        isHealthActualVisible={true}
      />
    </div>
  );
}
export default TGPQBattle;
