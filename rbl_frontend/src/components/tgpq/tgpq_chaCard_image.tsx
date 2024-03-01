import "../../styles/tgpq/tgpq_character.css";

function TGPQChaCardImage(props: {
  characterName: string;
  characterImageURL: string;
}) {
  return (
    <img
      src={props.characterImageURL}
      alt={props.characterName}
      className="tgpq-chaCard-img"
    />
  );
}
export default TGPQChaCardImage;
