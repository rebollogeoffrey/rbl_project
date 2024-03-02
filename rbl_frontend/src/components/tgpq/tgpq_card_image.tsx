import "../../styles/tgpq/tgpq_card_image.css";

export default function TGPQCardImage(props: {
  characterName: string;
  characterImageURL: string;
}) {
  return (
    <img
      className="tgpq-card-image"
      src={props.characterImageURL}
      alt={props.characterName}
    />
  );
}
