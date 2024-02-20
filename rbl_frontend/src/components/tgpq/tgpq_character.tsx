import "../../styles/tgpq/tgpq_character.css";
import CharacterImg from "../../assets/images/tgpq/tgpq_character_rogue.webp";

function TGPQCharacter() {
  // TODO : Handle category to check if only heroes appear in the list but for now only one hero available

  // TODO : Handle character info when bdd filled and linked
  const characters = [
    {
      name: "Peasant Roger",
      imageurl: CharacterImg,
    },
  ];
  return (
    <img
      src={characters[0].imageurl}
      alt={characters[0].name}
      className="tgpq-character-selected-img"
    />
  );
}
export default TGPQCharacter;
