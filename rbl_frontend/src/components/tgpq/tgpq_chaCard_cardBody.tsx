import "../../styles/tgpq/tgpq_chaCard_cardBody.css";
import TGPQChaCardImage from "./tgpq_chaCard_image";
import TGPQCharacterAbilities from "./tgpq_character_abilities";
import { ICharacterInfo } from "./tgpq_character_infos";
import TGPQTitle from "./tgpq_title";

export default function TGPQChaCardBody(props: {
  characterInfos: ICharacterInfo;
  isInColumn: boolean;
  isNameVisible: boolean;
  isCharacterImageVisible: boolean;
  areStatsVisible: boolean;
  isHealthActualVisible: boolean;
}) {
  return (
    <div className="tgpq-chaCard-body">
      <div
        className={"tgpq-chaCard-card " + (props.isInColumn ? "column" : "row")}
      >
        {props.isNameVisible ? (
          <TGPQTitle title={props.characterInfos.name} howImportant={3} />
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
            isHealthActualVisible={props.isHealthActualVisible}
          />
        ) : null}
      </div>
    </div>
  );
}
