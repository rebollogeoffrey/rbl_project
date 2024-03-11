import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import TGPQCardBody from "../../components/tgpq/tgpq_card_body";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import axios from "axios";
import { useContext, useEffect } from "react";
import TGPQContext from "../../contexts/tgpq/TGPQContext";

export default function TGPQCharacterSelectionPage() {
  const { idUser, personHero, setPersonHero } = useContext(TGPQContext);

  useEffect(() => {
    axios
      .patch(`http://localhost:8261/person/createHero/${idUser}`)
      .then((res) => {
        setPersonHero(res.data);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);

  return (
    <div className="font-family-tgpq-regular bg-tgpq-tavern">
      <TGPQTitle title="Select your character" howImportant={2} />
      <TGPQCardBody
        personInfos={personHero}
        isInColumn={true}
        isNameVisible={true}
        isCharacterImageVisible={true}
        areStatsVisible={true}
        isHealthActualVisible={false}
      />
      <TGPQButtonNext path="/map" />
    </div>
  );
}
