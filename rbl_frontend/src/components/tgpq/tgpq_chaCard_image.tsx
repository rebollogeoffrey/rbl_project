import "../../styles/tgpq/tgpq_character.css";
import characterImg from "../../assets/images/tgpq/tgpq_character_rogue.webp";

function TGPQChaCardImage(props: { characterImage: string }) {
  const characterImage = props.characterImage;
  const chaImg = { characterImg };
  return (
    <img
      src={chaImg.characterImg}
      alt={characterImage}
      className="tgpq-character-selected-img"
    />
  );
}
export default TGPQChaCardImage;
