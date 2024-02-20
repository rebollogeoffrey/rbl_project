import "../../styles/tgpq/tgpq_chaCard_chaName.css";

function TGPQCharacterName({ name }: { name: string }) {
  return <h3 className="tgpq-character-selected-name is-visible">{name}</h3>;
}
export default TGPQCharacterName;
