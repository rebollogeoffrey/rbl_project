// import "../../styles/tgpq/tgpq_chaCard_chaName.css";

// export default function TGPQCharacterName(props: { nameCharacter: string }) {
//   const name = props.nameCharacter;
//   return <h3 className="tgpq-character-selected-name is-visible">{name}</h3>;
// }
import "../../styles/tgpq/tgpq_chaCard_chaName.css";
import { ICharacterInfo } from "./tgpq_character_infos";

export default function TGPQChaCardName(props: {
  characterInfos: ICharacterInfo;
}) {
  return (
    <h3 className="tgpq-character-selected-name is-visible">
      {props.characterInfos.name}
    </h3>
  );
}
