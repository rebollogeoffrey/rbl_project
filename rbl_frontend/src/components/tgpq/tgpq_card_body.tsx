import { IPerson } from "./data/tgpq_character_infos";
import TGPQCardImage from "./tgpq_card_image";
import TGPQCardAbilities from "./tgpq_card_abilities";
import TGPQTitle from "./tgpq_title";
import "../../styles/tgpq/tgpq_card_body.css";
// import axios from "axios";
// import { useContext, useEffect } from "react";
// import TGPQContext from "../../contexts/tgpq/TGPQContext";

export default function TGPQCardBody(props: {
  personInfos: IPerson;
  isInColumn: boolean;
  isNameVisible: boolean;
  isCharacterImageVisible: boolean;
  areStatsVisible: boolean;
  isHealthActualVisible: boolean;
}) {
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
          characterImageURL={props.personInfos.personModel.url_image}
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
