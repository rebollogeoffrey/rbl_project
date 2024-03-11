import { IPerson } from "./data/tgpq_character_infos";
import TGPQCardImage from "./tgpq_card_image";
import TGPQCardAbilities from "./tgpq_card_abilities";
import TGPQTitle from "./tgpq_title";
import "../../styles/tgpq/tgpq_card_body.css";
import ImgHero from "../../assets/images/tgpq/persons/heroes/tgpq_character_peasant.png";
import ImgGoblin from "../../assets/images/tgpq/persons/monsters/tgpq_monster_goblin.png";
import ImgGobltwo from "../../assets/images/tgpq/persons/monsters/tgpq_monster_gobltwo.png";
import ImgGoblthird from "../../assets/images/tgpq/persons/monsters/tgpq_monster_goblthird.png";
import ImgDragon from "../../assets/images/tgpq/persons/monsters/tgpq_monster_dragon.png";

export default function TGPQCardBody(props: {
  personInfos: IPerson;
  isInColumn: boolean;
  isNameVisible: boolean;
  isCharacterImageVisible: boolean;
  areStatsVisible: boolean;
  isHealthActualVisible: boolean;
}) {
  const getImages = (arg: string) => {
    if (arg === "Hero") {
      return ImgHero;
    }
    if (arg === "Goblin") {
      return ImgGoblin;
    }
    if (arg === "Gobltwo") {
      return ImgGobltwo;
    }
    if (arg === "Goblthird") {
      return ImgGoblthird;
    } else {
      return ImgDragon;
    }
  };
  return (
    <div className={"tgpq-card-body " + (props.isInColumn ? "column" : "row")}>
      {props.isNameVisible ? (
        <TGPQTitle
          title={props.personInfos.personModel.name}
          howImportant={3}
        />
      ) : null}
      {props.isCharacterImageVisible ? (
        <TGPQCardImage
          characterName={props.personInfos.personModel.name}
          characterImageURL={getImages(props.personInfos.personModel.name)}
        />
      ) : null}
      {props.areStatsVisible ? (
        <TGPQCardAbilities
          personInfos={props.personInfos}
          isHealthActualVisible={props.isHealthActualVisible}
        />
      ) : null}
    </div>
  );
}
