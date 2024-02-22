import "../../styles/tgpq/tgpq_chaCard_cardBody.css";
import TGPQChaCardImage from "./tgpq_chaCard_image";
import TGPQChaCardName from "./tgpq_chaCard_name";
import TGPQCharacterAbilities from "./tgpq_character_abilities";
import { ICharacterInfo } from "./tgpq_character_infos";

export default function TGPQChaCardBody(props: {
  characterInfos: ICharacterInfo;
  isInColumn: boolean;
  isNameVisible: boolean;
  isCharacterImageVisible: boolean;
  areStatsVisible: boolean;
}) {
  return (
    <div className="tgpq-chaCard-body">
      <div
        className={"tgpq-chaCard-card " + (props.isInColumn ? "column" : "row")}
      >
        {props.isNameVisible ? (
          <TGPQChaCardName characterName={props.characterInfos.name} />
        ) : null}
        {props.isCharacterImageVisible ? (
          <TGPQChaCardImage
            characterName={props.characterInfos.name}
            characterImageURL={props.characterInfos.url_image}
          />
        ) : null}
        {props.areStatsVisible ? (
          <TGPQCharacterAbilities
            characterInfos={props.characterInfos}
            isHealthActualVisible={false}
          />
        ) : null}
      </div>
    </div>
  );
}
