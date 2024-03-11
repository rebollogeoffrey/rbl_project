import TGPQButtonBattle from "./tgpq_buttonbattle";
import TGPQChaCardBody from "./tgpq_card_body";

import TGPQTitle from "./tgpq_title";
import "../../styles/tgpq/tgpq_battle.css";
import TGPQContext from "../../contexts/tgpq/TGPQContext";
import { useContext } from "react";

function TGPQBattle() {
  const { personHero, personMonster } = useContext(TGPQContext);
  // TODO : Find a better way to feed fct with character info -> props for now ?
  // TODO : Find a better way to feed fct with character info -> Hook ? Witch one ?
  // TODO : Handle images from database

  return (
    <div className="font-family-tgpq-regular">
      <TGPQChaCardBody
        personInfos={personMonster}
        isInColumn={false}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
        isHealthActualVisible={true}
      />
      <TGPQTitle
        title="Choose to attack or defend for the next round"
        howImportant={3}
      />
      <TGPQButtonBattle />
      <TGPQChaCardBody
        personInfos={personHero}
        isInColumn={false}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
        isHealthActualVisible={true}
      />
    </div>
  );
}
export default TGPQBattle;
