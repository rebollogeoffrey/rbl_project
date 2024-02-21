import ProgressBar from "../general/general_progressbar";
import HeartShape from "./tgpq_heart-shape";
function TGPQCharacterAbilities(props: {
  isHealthActualVisible: boolean;
  characterInfos: object;
}) {
  return (
    <div className="tgpq-character-stats">
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
          textDisplayed={props.characterInfos.strengh}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dexterity</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.characterInfos.dexterity}
          textDisplayed={props.characterInfos.dexterity}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dodge</p>
        <ProgressBar
          bgColorOuter="var(--NearBlack)"
          bgColorInner="var(--GameTGPQ)"
          progress={props.characterInfos.dodge}
          textDisplayed={props.characterInfos.dodge}
          borderRadPx={8}
        />
      </span>
    </div>
  );
}
export default TGPQCharacterAbilities;
