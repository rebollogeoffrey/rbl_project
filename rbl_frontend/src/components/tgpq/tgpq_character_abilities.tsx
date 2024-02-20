import "../../styles/tgpq/tgpq_chaCard_abilities.css";
import ProgressBar from "../general/general_progressbar";
import HeartShape from "./tgpq_heart-shape";
function TGPQCharacterAbilities({
  isHealthActualVisible = true,
}: {
  isHealthActualVisible?: boolean;
}) {
  // TODO : Grab real data from database
  const personModelAbilities = [
    {
      health_max: 140,
      health_actual: 120,
      strengh: 70,
      dexterity: 20,
      dodge: 40,
      description: "I forgot to kick your ass",
      url_image: "test",
    },
  ];
  return (
    <div className="tgpq-character-stats">
      <span className="life">
        {isHealthActualVisible ? (
          <p>{personModelAbilities[0].health_actual}</p>
        ) : null}
        <HeartShape />
        <p>{personModelAbilities[0].health_max}</p>
      </span>
      <span className="bar">
        <p>Strengh</p>
        <ProgressBar
          bgColorOuter="var(--LightestOne)"
          bgColorInner="var(--GameTGPQ)"
          progress={personModelAbilities[0].strengh}
          textDisplayed={personModelAbilities[0].strengh.toString()}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dexterity</p>
        <ProgressBar
          bgColorOuter="var(--LightestOne)"
          bgColorInner="var(--GameTGPQ)"
          progress={personModelAbilities[0].dexterity}
          textDisplayed={personModelAbilities[0].dexterity.toString()}
          borderRadPx={8}
        />
      </span>
      <span className="bar">
        <p>Dodge</p>
        <ProgressBar
          bgColorOuter="var(--LightestOne)"
          bgColorInner="var(--GameTGPQ)"
          progress={personModelAbilities[0].dodge}
          textDisplayed={personModelAbilities[0].dodge.toString()}
          borderRadPx={8}
        />
      </span>
    </div>
  );
}
export default TGPQCharacterAbilities;
