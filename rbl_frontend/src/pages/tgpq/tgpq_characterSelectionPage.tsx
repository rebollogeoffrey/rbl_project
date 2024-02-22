import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import TGPQChaCardBody from "../../components/tgpq/tgpq_chaCard_cardBody";
import { characterInfos } from "../../components/tgpq/tgpq_character_infos";
import TGPQTitle from "../../components/tgpq/tgpq_title";

function TGPQCharacterSelectionPage() {
  const characterInformations = { characterInfos };
  return (
    <div className="font-family-tgpq-regular bg-tgpq-tavern">
      <TGPQTitle title="Select your character" howImportant={2} />
      <TGPQChaCardBody
        characterInfos={characterInformations.characterInfos[0]}
        isInColumn={true}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
      />
      <TGPQButtonNext path="/map" />
    </div>
  );
}

export default TGPQCharacterSelectionPage;
