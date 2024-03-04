import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import TGPQCardBody from "../../components/tgpq/tgpq_card_body";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import { characterInfos } from "../../components/tgpq/data/tgpq_character_infos";

export default function TGPQCharacterSelectionPage() {
  const characterInformations = { characterInfos };
  return (
    <div className="font-family-tgpq-regular bg-tgpq-tavern">
      <TGPQTitle title="Select your character" howImportant={2} />
      <TGPQCardBody
        characterInfos={characterInformations.characterInfos[0]}
        isInColumn={true}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
        isHealthActualVisible={false}
      />
      <TGPQButtonNext path="/map" />
    </div>
  );
}
