import { ICharacterInfo } from "./data/tgpq_character_infos";
import ProgressBar from "../general/general_progressbar";
import HeartShape from "./tgpq_heart-shape";
import "../../styles/tgpq/tgpq_card_abilities.css";

export default function TGPQCardAbilities(props: {
  isHealthActualVisible: boolean;
  characterInfos: ICharacterInfo;
}) {
  return (
    <div className="tgpq-card-abilities">
      <span className="life">
        {props.isHealthActualVisible ? (
          <p>{props.characterInfos.health_actual}</p>
        ) : null}
        <HeartShape />
        <p>{props.characterInfos.health_max}</p>
      </span>
      <span className="bar">
        <p>Strengh</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.characterInfos.strengh}
          textDisplayed={props.characterInfos.strengh.toString()}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dexterity</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.characterInfos.dexterity}
          textDisplayed={props.characterInfos.dexterity.toString()}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dodge</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.characterInfos.dodge}
          textDisplayed={props.characterInfos.dodge.toString()}
          borderRadPx={8}
        />
      </span>
    </div>
  );
}
