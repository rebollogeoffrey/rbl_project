import CharacterImg from "../../assets/images/tgpq/tgpq_character_rogue.webp";
import "../../styles/tgpq/tgpq_character.css";

function TGPQCharacter() {
  const characters = [
    { name: "Peasant Roger", imageurl: "tgpq_character_rogue.webp" },
    { name: "Peasant Goeffrey", imageurl: "tgpq_character_rogue.webp" },
  ];
  return (
    <>
      <h3 className="tgpq-character-selected-name is-visible">
        {characters[0].name}
      </h3>
      <img
        // TODO : Handle img when bdd filled
        // src={`${characters[0].imageurl}`}
        src={CharacterImg}
        alt={characters[0].name}
        className="tgpq-character-selected-img"
      />
    </>
  );
}
export default TGPQCharacter;
