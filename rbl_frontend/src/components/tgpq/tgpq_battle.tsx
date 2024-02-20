import TGPQChaCardBody from "./tgpq_chaCard_cardBody";

function TGPQBattle() {
  // TODO : Grab real data from database
  const personAbilities = [
    {
      name: "Peasant Roger",
      health_max: 140,
      health_actual: 120,
      strengh: 70,
      dexterity: 20,
      dodge: 40,
      description: "I'm not here to suffer",
      url_image: "test",
    },
    {
      name: "Bad person n°4",
      health_max: 100,
      health_actual: 100,
      strengh: 30,
      dexterity: 80,
      dodge: 70,
      description: "Who ate my pie?!",
      url_image: "test",
    },
  ];
  return (
    <div className="font-family-tgpq-regular">
      <TGPQChaCardBody
        toColumn={false}
        characterName={personAbilities[0].name}
      />
      <TGPQChaCardBody
        toColumn={false}
        characterName={personAbilities[1].name}
      />
    </div>
  );
}
export default TGPQBattle;
