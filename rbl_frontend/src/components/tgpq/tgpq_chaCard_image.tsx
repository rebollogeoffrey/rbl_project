import "../../styles/tgpq/tgpq_character.css";
import characterImg from "../../assets/images/tgpq/tgpq_character_rogue.webp";
import { ICharacterInfo } from "./tgpq_character_infos";

function TGPQChaCardImage(props: { characterInfos: ICharacterInfo }) {
  const characterName = props.characterInfos.name;
  const chaImg = { characterImg };
  return (
    <img
      src={chaImg.characterImg}
      alt={characterName}
      className="tgpq-character-selected-img"
    />
  );
}
export default TGPQChaCardImage;
