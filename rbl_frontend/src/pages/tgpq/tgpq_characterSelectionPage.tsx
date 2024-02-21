import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import TGPQChaCardBody from "../../components/tgpq/tgpq_chaCard_cardBody";
import TGPQChaCardTitle from "../../components/tgpq/tgpq_chaCard_title";
import { characterInfos } from "../../components/tgpq/tgpq_character_infos";

function TGPQCharacterSelectionPage() {
  const characterInformations = { characterInfos };
  console.log(
    "---> characterInformations\n" +
      typeof characterInformations +
      "\n" +
      characterInformations.characterInfos[0].name +
      "\n" +
      typeof characterInformations
  );
  return (
    <div className="font-family-tgpq-regular bg-tgpq-tavern">
      <TGPQChaCardTitle title="Select your character" />
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
