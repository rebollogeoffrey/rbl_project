import { IPerson } from "./data/tgpq_character_infos";
import ProgressBar from "../general/general_progressbar";
import HeartShape from "./tgpq_heart-shape";
import "../../styles/tgpq/tgpq_card_abilities.css";

export default function TGPQCardAbilities(props: {
  isHealthActualVisible: boolean;
  personInfos: IPerson;
}) {
  return (
    <div className="tgpq-card-abilities">
      <span className="life">
        {props.isHealthActualVisible ? <p>{props.personInfos.health}</p> : null}
        <HeartShape />
        <p>{props.personInfos.personModel.health_max}</p>
      </span>
      <span className="bar">
        <p>Strengh</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.personInfos.personModel.strength}
          textDisplayed={props.personInfos.personModel.strength.toString()}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dexterity</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.personInfos.personModel.dexterity}
          textDisplayed={props.personInfos.personModel.dexterity.toString()}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dodge</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.personInfos.personModel.dodge}
          textDisplayed={props.personInfos.personModel.dodge.toString()}
          borderRadPx={8}
        />
      </span>
    </div>
  );
}
