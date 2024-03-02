import TGPQButtonBattle from "./tgpq_buttonbattle";
import TGPQChaCardBody from "./tgpq_card_body";
import { characterInfos } from "./tgpq_character_infos";
import TGPQTitle from "./tgpq_title";

function TGPQBattle() {
  // TODO : Find a better way to feed fct with character info -> props for now ?
  // TODO : Find a better way to feed fct with character info -> Hook ? Witch one ?
  // TODO : Handle images from database
  const characterInformations = { characterInfos };
  return (
    <div className="font-family-tgpq-regular">
      <TGPQTitle title="Battle" howImportant={1} />
      <TGPQChaCardBody
        characterInfos={characterInformations.characterInfos[1]}
        isInColumn={false}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
        isHealthActualVisible={true}
      />
      <TGPQTitle title="Attack or defend yourself" howImportant={2} />
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
