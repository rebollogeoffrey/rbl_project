import { ICharacterInfo } from "./tgpq_character_infos";
import TGPQCardImage from "./tgpq_card_image";
import TGPQCardAbilities from "./tgpq_card_abilities";
import TGPQTitle from "./tgpq_title";
import "../../styles/tgpq/tgpq_card_body.css";

export default function TGPQCardBody(props: {
  characterInfos: ICharacterInfo;
  isInColumn: boolean;
  isNameVisible: boolean;
  isCharacterImageVisible: boolean;
  areStatsVisible: boolean;
  isHealthActualVisible: boolean;
}) {
  return (
    <div className={"tgpq-card-body " + (props.isInColumn ? "column" : "row")}>
      {props.isNameVisible ? (
        <TGPQTitle title={props.characterInfos.name} howImportant={3} />
      ) : null}
      {props.isCharacterImageVisible ? (
        <TGPQCardImage
          characterName={props.characterInfos.name}
          characterImageURL={props.characterInfos.url_image}
        />
      ) : null}
      {props.areStatsVisible ? (
        <TGPQCardAbilities
          characterInfos={props.characterInfos}
          isHealthActualVisible={props.isHealthActualVisible}
        />
      ) : null}
    </div>
  );
}
