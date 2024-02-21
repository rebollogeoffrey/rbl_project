import TGPQChaCardBody from "./tgpq_chaCard_cardBody";
import { characterInfos } from "./tgpq_character_infos";

function TGPQBattle() {
  // TODO : Find a better way to feed fct with character info -> props for now ?
  // TODO : Find a better way to feed fct with character info -> Hook ? Witch one ?
  // TODO : Handle images from database
  const characterInformations = { characterInfos };
  return (
    <div className="font-family-tgpq-regular">
      <TGPQChaCardBody
        characterInfos={characterInformations.characterInfos[0]}
        isInColumn={false}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
      />
      <TGPQChaCardBody
        characterInfos={characterInformations.characterInfos[1]}
        isInColumn={false}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
      />
    </div>
  );
}
export default TGPQBattle;
